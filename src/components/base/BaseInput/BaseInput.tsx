import { ALL_ICONS } from '@constants/icons';
import React, { useState } from 'react';
import { BaseIcon } from '..';
import s from './BaseInput.module.scss';

interface Props {
  type?: string;
  name: string;
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  withIcon?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
  value,
  label,
  type = 'text',
  error,
  name,
  min,
  max,
  required = false,
  withIcon = false,
  disabled = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  const [focus, setFocus] = useState(false);
  //ДЛЯ ПАРОЛЯ НААЛО
  const [typeIcon, setTypeIcon] = React.useState<string>('eye-off');
  const [newType, setType] = React.useState<string>(type);

  const changeType = (value: string) => {
    if (value == 'eye') {
      setTypeIcon('eye');
      setType('text');
    } else {
      setTypeIcon('eye-off');
      setType('password');
    }
  };
  //ДЛЯ ПАРОЛЯ КОНЕЦ

  return (
    <div
      className={`${s.BaseInput} ${focus ? s.BaseInput__Focus : ''} ${
        withIcon ? s.BaseInput__WithIcon : ''
      }  ${error ? s.BaseInput__Error : ''} ${
        disabled ? s.BaseInput__Disabled : ''
      } ${className}`}
    >
      <div className={s.BaseInput_Wrapper}>
        {label ? (
          <label
            className={`${s.BaseInput_Label} ${
              value ? s.BaseInput_Label__NoEmpty : ''
            }`}
          >
            <span>{label}</span>
          </label>
        ) : null}

        <input
          value={value}
          type={newType || type}
          className={`${s.Input} ${
            type == 'password' ? s.Input__Password : ''
          }`}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          autoComplete={autocomplete}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={onKeyDown}
        />

        {typeIcon === 'eye' ? (
          <BaseIcon
            viewBox="0 0 24 24"
            icon={ALL_ICONS.EYE_OFF}
            className={s.Icon}
            onClick={() => changeType('eye-off')}
          />
        ) : null}

        {type === 'password' && typeIcon === 'eye-off' ? (
          <BaseIcon
            viewBox="0 0 24 24"
            icon={ALL_ICONS.EYE}
            className={s.Icon}
            onClick={() => changeType('eye')}
          />
        ) : null}
      </div>

      {error ? (
        <div className={s.BaseInput_ErrorText}>
          <p>{error}</p>
        </div>
      ) : null}
    </div>
  );
};
export default BaseInput;
