import Link from 'next/link';
import React from 'react';
import s from './ToMainPage.module.scss';

interface Props {
  className?: string;
}

const ToMainPage: React.FC<Props> = ({ className = '' }) => {
  return (
    <Link href="/" className={`${s.ToMainPage} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 17"
        fill="none"
        className={s.ToMainPage_Icon}
      >
        <path
          d="M10 13.1953L5.33333 8.52865L10 3.86198"
          stroke="#7656F5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className={s.ToMainPage_Label}>Main page</span>
    </Link>
  );
};

export default ToMainPage;
