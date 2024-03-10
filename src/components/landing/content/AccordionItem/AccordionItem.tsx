import React, { useRef } from 'react';
import s from './AccordionItem.module.scss';

type Question = {
  id: number;
  question: string;
  answer: string;
};

interface Props {
  className?: string;
  handleToggle: (val: number) => void;
  active: number | null;
  item: Question;
}

const AccordionItem: React.FC<Props> = ({
  className = '',
  handleToggle,
  active,
  item,
}) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const { id, question, answer } = item as Question;

  return (
    <div
      className={`${className} ${s.AccordionItem} ${
        active === id ? s.AccordionItem__Active : ''
      }`}
    >
      <div className={s.AccordionItem_Header} onClick={() => handleToggle(id)}>
        <div className={s.Content}>
          <p className={s.Question}>{question}</p>

          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.Icon}
          >
            <defs>
              <clipPath id="clip38_976">
                <rect
                  id="iconamoon:arrow-up-2-light"
                  width="32.000000"
                  height="32.000000"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip38_976)">
              <path
                id="Vector"
                d="M24 19L15 10L6 19"
                stroke="#7656F5"
                strokeOpacity="1.000000"
                strokeWidth="3.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>

      <div
        ref={contentEl}
        className={s.AccordionItem_Body}
        style={
          active === id
            ? { height: contentEl.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className={s.Content}>
          <p className={s.Answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
