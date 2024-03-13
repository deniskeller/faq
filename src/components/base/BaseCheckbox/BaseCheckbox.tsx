import React, { ReactNode } from 'react';
import s from './BaseCheckbox.module.scss';

interface Props {
  id?: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  children?: ReactNode;
  onChange: (e: React.FormEvent) => void;
}

const BaseCheckbox: React.FC<Props> = ({
  id = '',
  disabled = false,
  className = '',
  error = false,
  children,
  checked = false,
  onChange,
}) => {
  const handler = !disabled ? onChange : undefined;

  return (
    <div
      className={`${s.BaseCheckbox} ${checked ? s.BaseCheckbox__Active : ''} ${
        error && !checked ? s.BaseCheckbox__Error : ''
      } ${disabled ? s.BaseCheckbox__Disabled : ''} ${className} `}
    >
      <input
        id={id}
        checked={checked}
        type="checkbox"
        className={s.BaseCheckbox_Input}
        disabled={disabled}
        onChange={handler}
      />

      <div className={`${s.BaseCheckbox_Check}`} onClick={handler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          fill="none"
          className={s.Tick}
        >
          <path
            d="M3.23438 7.53831L5.38491 9.68884L10.7613 4.3125"
            stroke="rgb(118, 86, 245)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {children ? (
        <div className={s.BaseCheckbox_Label}>
          <p>{children}</p>
        </div>
      ) : null}
    </div>
  );
};

export default BaseCheckbox;
