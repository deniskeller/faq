import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import s from './BaseTextarea.module.scss';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  errorText?: string;
  value: string;
  maxLength?: number;
  onChange(value: string): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseTextarea: React.FC<Props> = ({
  value,
  label,
  error,
  errorText,
  name,
  maxLength,
  required = true,
  disabled = false,
  placeholder,
  className = '',
  onChange,
  onKeyDown,
}) => {
  const refTextarea = useRef<HTMLTextAreaElement | null>(null);
  const [focus, setFocus] = useState(false);

  const onBlur = () => {
    if (refTextarea.current != null) {
      const scrollHeight = refTextarea.current.scrollHeight;
      refTextarea.current.style.height = scrollHeight + 'px';
    }
    setFocus(false);
  };

  useEffect(() => {
    if (refTextarea.current != null) {
      refTextarea.current.style.height = 'initial';
      refTextarea.current.style.height =
        refTextarea.current.scrollHeight + 'px';
    }

    setTimeout(() => {
      if (refTextarea.current != null && value.length > 1) {
        refTextarea.current.style.height = 'initial';
        refTextarea.current.style.height =
          refTextarea.current.scrollHeight + 'px';
      }
    }, 10);
  }, [value]);

  return (
    <div
      className={`${s.BaseTextarea} ${className} ${
        disabled ? s.BaseTextarea__Disabled : null
      } ${error ? s.BaseTextarea__Error : ''} ${
        focus ? s.BaseTextarea__Focus : ''
      }`}
      onClick={() => refTextarea.current?.focus()}
    >
      {label ? (
        <label className={`${s.Label} ${value ? s.Label__NoEmpty : ''}`}>
          <span>{label}</span>
        </label>
      ) : null}

      {!required ? (
        <label className={`${s.Optional} ${value ? s.Optional__NoEmpty : ''}`}>
          <span>Optional</span>
        </label>
      ) : null}

      <div className={s.BaseTextarea_Wrapper}>
        <textarea
          ref={refTextarea}
          value={value}
          className={s.Textarea}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={onKeyDown}
          onFocus={() => setFocus(true)}
          onBlur={onBlur}
        />
      </div>

      {errorText && errorText?.length > 0 ? (
        <div className={s.BaseTextarea_ErrorText}>
          <p>{errorText}</p>
        </div>
      ) : null}
    </div>
  );
};
export default BaseTextarea;
