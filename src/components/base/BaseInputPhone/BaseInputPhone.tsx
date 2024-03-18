import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import s from './BaseInputPhone.module.scss';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

interface Props {
  placeholder?: string;
  country?: string;
  className?: string;
  error?: string | boolean;
  value: string;
  disabled?: boolean;
  onChange(value: string | number): void;
}

const InputPhone: React.FC<Props> = ({
  value,
  error,
  country = 'us',
  placeholder,
  className = '',
  onChange,
  disabled = false,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={`${s.BaseInput} ${className} ${
        disabled ? s.BaseInput_Disabled : ''
      }`}
    >
      <ReactLenis options={{ smoothWheel: false }}>
        <PhoneInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          country={country}
          value={value}
          onChange={onChange}
          enableSearch
          searchPlaceholder="Search"
          searchNotFound="Nothing found"
          inputClass={error ? 'phone-input-error' : ''}
          disabled={disabled}
          inputStyle={{ borderColor: focus ? '#425eec' : '#e8e8ea' }}
        />
      </ReactLenis>
    </div>
  );
};
export default InputPhone;
