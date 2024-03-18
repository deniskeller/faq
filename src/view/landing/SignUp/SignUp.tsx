import React, { useState } from 'react';
import s from './SignUp.module.scss';
import { useRouter } from 'next/router';
import {
  BaseButton,
  BaseCheckbox,
  BaseContainer,
  BaseInput,
  BaseInputPhone,
  BaseText,
} from '@base/index';
import Link from 'next/link';
import { ToMainPage } from '@content/landing/index';
import Image from 'next/image';
import toast from 'react-hot-toast';
// import BaseInputPhone from '@base/BaseInputPhone/BaseInputPhone';

interface IFormData {
  fullname: string;
  email: string;
  phone: string;
  password: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    fullname: '',
    email: '',
    phone: '',
    password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  //checkbox
  const [checked, setChecked] = React.useState<boolean>(false);

  //проверка строки на цифры
  const checkForNumberValuePassword = (str: string) => {
    return /\d/.test(str);
  };
  //проверка строки на буквы
  const checkForStringValuePassword = (str: string) => {
    return /[a-zа-яё]/i.test(str);
  };

  const [error, setError] = useState(false);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.fullname != '') {
      // router.push('/');
      toast.success('Thank you! Our manager will contact you shortly.', {
        duration: 3000,
        // className: 'login',
      });
    } else {
      setError(true);
    }
  };

  return (
    <section className={s.SignUp}>
      <BaseContainer className={s.SignUp_Container}>
        <BaseText className={s.SignUp_Title}>
          Sign&nbsp;<span>Up</span>
        </BaseText>

        <BaseText as="p" className={s.SignUp_Subtitle}>
          Please register using your email address and fill out all the
          information given.
        </BaseText>

        <div className={s.SignUp_Content}>
          <Image
            src="/pictures/images/signup.webp"
            width={720}
            height={822}
            alt=""
            priority
            className={s.Image}
          />

          <form className={s.Form} autoComplete="off">
            <div className={s.Form_Fields}>
              <BaseInput
                name="fullname"
                placeholder="Full name"
                label="Full name"
                value={value.fullname}
                onChange={(val: string) => setNewValue(val, 'fullname')}
                error={error}
              />
              <BaseInput
                name="email"
                placeholder="Email address"
                label="Email address"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                error={error}
              />

              <BaseInputPhone
                country="us"
                value={value.phone}
                onChange={(val: string) => setNewValue(val, 'phone')}
              />

              <div className={s.Form_Password}>
                <BaseInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  value={value.password}
                  onChange={(val: string) => setNewValue(val, 'password')}
                  withIcon
                  error={error}
                  autocomplete="new-password"
                />

                <ul className={s.PasswordCheck}>
                  <li
                    className={`${s.PasswordCheck_Item} ${
                      value.password.length >= 8
                        ? s.PasswordCheck_Item__Valid
                        : ''
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={s.Icon}
                    >
                      <path
                        id="Shape"
                        d="M13.36 4.23C13.67 4.54 13.67 5.05 13.36 5.36L6.96 11.76C6.65 12.07 6.14 12.07 5.83 11.76L2.63 8.56C2.32 8.25 2.32 7.74 2.63 7.43C2.94 7.12 3.45 7.12 3.76 7.43L6.4 10.07L12.23 4.23C12.54 3.92 13.05 3.92 13.36 4.23Z"
                        fill="#999999"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>

                    <p className={s.Label}>8+ symbols</p>
                  </li>

                  <li
                    className={`${s.PasswordCheck_Item} ${
                      checkForStringValuePassword(value.password)
                        ? s.PasswordCheck_Item__Valid
                        : ''
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={s.Icon}
                    >
                      <path
                        id="Shape"
                        d="M13.36 4.23C13.67 4.54 13.67 5.05 13.36 5.36L6.96 11.76C6.65 12.07 6.14 12.07 5.83 11.76L2.63 8.56C2.32 8.25 2.32 7.74 2.63 7.43C2.94 7.12 3.45 7.12 3.76 7.43L6.4 10.07L12.23 4.23C12.54 3.92 13.05 3.92 13.36 4.23Z"
                        fill="#999999"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>

                    <p className={s.Label}>Letters</p>
                  </li>

                  <li
                    className={`${s.PasswordCheck_Item} ${
                      checkForNumberValuePassword(value.password)
                        ? s.PasswordCheck_Item__Valid
                        : ''
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={s.Icon}
                    >
                      <path
                        id="Shape"
                        d="M13.36 4.23C13.67 4.54 13.67 5.05 13.36 5.36L6.96 11.76C6.65 12.07 6.14 12.07 5.83 11.76L2.63 8.56C2.32 8.25 2.32 7.74 2.63 7.43C2.94 7.12 3.45 7.12 3.76 7.43L6.4 10.07L12.23 4.23C12.54 3.92 13.05 3.92 13.36 4.23Z"
                        fill="#999999"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>

                    <p className={s.Label}>Nubmers</p>
                  </li>
                </ul>
              </div>
            </div>

            <BaseCheckbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              className={s.Form_Checkbox}
            >
              I have read, understood and accept the &nbsp;
              <Link href={'/terms-and-conditions'}>Terms and Conditions</Link>
            </BaseCheckbox>

            <BaseButton
              type="submit"
              className={s.Form_Button}
              onClick={submitHandler}
              // disabled
            >
              Sign Up
            </BaseButton>
            <ToMainPage className={s.Form_ToMainPage} />
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default SignUp;
