
'use client';

import { useState } from 'react';

export default function FaqList({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <article key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="faq-symbol">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="faq-answer" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
