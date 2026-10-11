import test from 'node:test';
import assert from 'node:assert/strict';
import { getRomeClockParts, isCallWindowOpen } from '../lib/businessHours.js';

test('ordinary calls are available Mon–Fri from 09:30 inclusive to 19:00 exclusive in Rome', () => {
  for (const day of ['12', '13', '14', '15', '16']) {
    for (const [time, expected] of [['09:29:00', false], ['09:30:00', true], ['18:59:00', true], ['18:59:59', true], ['19:00:00', false], ['19:00:59', false]]) {
      const date = `2026-10-${day}T${time}+02:00`;
      assert.equal(isCallWindowOpen(new Date(date)), expected, date);
    }
  }
});

test('Saturday and Sunday never open the ordinary call window, including DST transition Sundays', () => {
  for (const [day, offset] of [['2026-10-17', '+02:00'], ['2026-10-18', '+02:00'], ['2026-03-29', '+02:00'], ['2026-10-25', '+01:00']]) {
    for (const time of ['09:30:00', '12:00:00', '18:59:00']) {
      const date = `${day}T${time}${offset}`;
      assert.equal(isCallWindowOpen(new Date(date)), false, date);
    }
  }
});

test('Rome boundaries follow both DST changes rather than a fixed UTC offset', () => {
  for (const [day, offset] of [['2026-03-27', 1], ['2026-03-30', 2], ['2026-10-23', 2], ['2026-10-26', 1]]) {
    for (const [hour, minute, expected] of [[9, 29, false], [9, 30, true], [18, 59, true], [19, 0, false]]) {
      const utcHour = String(hour - offset).padStart(2, '0');
      const date = new Date(`${day}T${utcHour}:${String(minute).padStart(2, '0')}:00Z`);
      const clock = getRomeClockParts(date);
      assert.equal(clock.hour, hour, date.toISOString());
      assert.equal(clock.minute, minute, date.toISOString());
      assert.equal(isCallWindowOpen(date), expected, date.toISOString());
    }
  }
});

test('Rome weekday controls availability even when the UTC date is still Sunday', () => {
  const date = new Date('2026-10-11T22:30:00Z');
  assert.equal(getRomeClockParts(date).weekdayIndex, 1);
  assert.equal(getRomeClockParts(date).hour, 0);
  assert.equal(isCallWindowOpen(date), false);
});
