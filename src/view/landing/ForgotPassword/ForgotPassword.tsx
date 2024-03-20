import React, { useEffect, useState } from 'react';
import s from './ForgotPassword.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import Link from 'next/link';
import { ToMainPage } from '@content/landing/index';
import Image from 'next/image';
import VerificationInput from 'react-verification-input';
import toast from 'react-hot-toast';

interface IFormData {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [subtitle, setSubtitle] = useState(
    'Please login to your account using the email you signed up with and	the password which was sent to your email.'
  );

  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    email: '',
    password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState(false);
  useEffect(() => {
    if (step == 1)
      setSubtitle(
        'Please login to your account using the email you signed up with and	the password which was sent to your email.'
      );
    if (step == 2) setSubtitle('Write the code that we sent to your email');
    if (step == 3) setSubtitle('Write a new password');

    return () => {
      setSubtitle(
        'Please login to your account using the email you signed up with and	the password which was sent to your email.'
      );
    };
  }, [step]);

  // STEP 1
  const submitStepOneHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.email != '') {
      setStep(2);
      setSubtitle('Write the code that we sent to your email');
    } else {
      setError(true);
    }
  };

  // STEP 2
  const [verificationValue, setVerificationValue] = useState('');
  const [verificationError, setVerificationError] = useState(false);
  const [repeatSending, setRepeatSending] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (repeat) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter == 0) {
      setRepeat(false);
      setCounter(10);
    }
  }, [counter, repeat]);

  useEffect(() => {
    if (verificationValue.length >= 1) setVerificationError(false);
  }, [verificationValue]);

  const submitStepTwoHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!verificationValue) {
      setVerificationError(true);
    } else {
      setRepeatSending(true);
      setVerificationError(false);
      if (verificationValue.length == 6) {
        setStep(3);
        setSubtitle('Write a new password');
      }
    }
  };

  // STEP 3
  //проверка строки на цифры
  const checkForNumberValuePassword = (str: string) => {
    return /\d/.test(str);
  };
  //проверка строки на буквы
  const checkForStringValuePassword = (str: string) => {
    return /[a-zа-яё]/i.test(str);
  };

  const submitStepThreeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.password != '') {
      toast.success('Password changed successfully!', {
        duration: 3000,
        className: 'login',
      });
      // setTimeout(() => {
      //   router.push('/log-in');
      // }, 4000);
    } else {
      setError(true);
    }
  };

  return (
    <section className={s.ForgotPassword}>
      <BaseContainer className={s.ForgotPassword_Container}>
        <BaseText className={s.ForgotPassword_Title}>Forgot password</BaseText>

        <BaseText as="p" className={s.ForgotPassword_Subtitle}>
          {subtitle}
        </BaseText>

        <div className={s.ForgotPassword_Content}>
          <Image
            src="/pictures/images/log-in.webp"
            width={808}
            height={808}
            alt=""
            priority
            quality={100}
            className={s.Image}
          />

          <form className={s.Form} autoComplete="off">
            {step == 1 ? (
              <>
                <div className={s.Form_Fields}>
                  <BaseInput
                    name="email"
                    placeholder="Email address"
                    label="Email address"
                    value={value.email}
                    onChange={(val: string) => setNewValue(val, 'email')}
                    error={error}
                  />
                </div>

                <BaseButton
                  type="submit"
                  className={s.Form_Button}
                  onClick={submitStepOneHandler}
                >
                  Send code to email
                </BaseButton>
              </>
            ) : step == 2 ? (
              <>
                <div className={s.Form_Fields}>
                  <div className={s.VerificationCode}>
                    <VerificationInput
                      placeholder=" "
                      value={verificationValue}
                      onChange={(value) => setVerificationValue(value)}
                      autoFocus={true}
                      classNames={{
                        container: 'VerificationCode',
                        character: `${
                          !verificationError ? 'Input' : 'Input Error'
                        }`,
                        characterInactive: 'Inactive',
                        characterSelected: 'Selected',
                      }}
                    />
                    {verificationError ? (
                      <div className={s.VerificationCode_Error}>
                        <p>Please, enter the code</p>
                      </div>
                    ) : null}

                    {repeatSending &&
                    !verificationError &&
                    verificationValue.length < 6 ? (
                      <div className={s.VerificationCode_RepeatSending}>
                        <p>
                          Didn’t get the code?&nbsp;
                          {repeat && counter != 0 ? (
                            <span>{counter}</span>
                          ) : (
                            <span onClick={() => setRepeat(true)}>Resend</span>
                          )}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>

                <BaseButton
                  type="submit"
                  className={s.Form_Button}
                  onClick={submitStepTwoHandler}
                >
                  Reset password
                </BaseButton>
              </>
            ) : step == 3 ? (
              <>
                <div className={s.Form_Fields}>
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

                <BaseButton
                  type="submit"
                  className={s.Form_Button}
                  onClick={submitStepThreeHandler}
                >
                  Change password
                </BaseButton>
              </>
            ) : null}

            <ToMainPage className={s.Form_ToMainPage} />
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default ForgotPassword;
