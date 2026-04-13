
const formatter = new Intl.DateTimeFormat('it-IT', {
  timeZone: 'Europe/Rome',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
});

const weekdayMap = {
  lun: 1,
  mar: 2,
  mer: 3,
  gio: 4,
  ven: 5,
  sab: 6,
  dom: 0
};

export function getRomeClockParts(date = new Date()) {
  const parts = formatter.formatToParts(date);
  const data = {};
  for (const part of parts) {
    if (part.type !== 'literal') data[part.type] = part.value;
  }
  const weekday = (data.weekday || '').slice(0, 3).toLowerCase();
  const hour = Number(data.hour || 0);
  const minute = Number(data.minute || 0);
  return {
    weekdayIndex: weekdayMap[weekday] ?? 0,
    hour,
    minute,
    totalMinutes: hour * 60 + minute
  };
}

export function isCallWindowOpen(date = new Date()) {
  const { totalMinutes } = getRomeClockParts(date);
  const openFrom = 9 * 60 + 30;
  const openUntil = 19 * 60;
  return totalMinutes >= openFrom && totalMinutes <= openUntil;
}
