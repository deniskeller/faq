import React, { ReactNode } from 'react';
import s from './BaseRadioButton.module.scss';

interface Props {
  id?: string;
  className?: string;
  name?: string;
  isActive: boolean;
  children?: ReactNode;
  onClick: () => void;
}

const BaseRadioButton: React.FC<Props> = ({
  children,
  id = '',
  name = '',
  className,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`${s.BaseRadioButton} ${
        isActive ? s.BaseRadioButton__Active : ''
      } ${className}`}
    >
      <input
        id={id}
        checked={isActive}
        name={name}
        type="radio"
        className={s.BaseRadioButton_Input}
        readOnly
      />
      <div className={s.BaseRadioButton_Check} onClick={onClick}>
        <div className={s.Tick}></div>
      </div>

      {children ? (
        <div className={s.BaseRadioButton_Label}>
          <p>{children}</p>
        </div>
      ) : null}
    </div>
  );
};

export default BaseRadioButton;
