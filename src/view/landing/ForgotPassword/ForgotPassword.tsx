import React, { useState } from 'react';
import s from './ForgotPassword.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import Link from 'next/link';
import { ToMainPage } from '@content/landing/index';
import Image from 'next/image';

interface IFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    email: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState('');

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.email != '') {
      router.push('/');
    } else {
      setError('Поле не должно быть пустым!');
    }
  };

  return (
    <section className={s.ForgotPassword}>
      <BaseContainer className={s.ForgotPassword_Container}>
        <BaseText className={s.ForgotPassword_Title}>Forgot password</BaseText>

        <BaseText as="p" className={s.ForgotPassword_Subtitle}>
          Please login to your account using the email you signed up with and
          the password which was sent to your email.
        </BaseText>

        <div className={s.ForgotPassword_Content}>
          <Image
            src="/pictures/images/log-in.webp"
            width={808}
            height={808}
            alt=""
            priority
            className={s.Image}
          />

          <form className={s.Form} autoComplete="off">
            <div className={s.Form_Fields}>
              <BaseInput
                name="email"
                placeholder="E-mail address"
                label="E-mail address"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                error={error}
              />
            </div>

            <BaseButton
              type="submit"
              className={s.Form_Button}
              onClick={submitHandler}
            >
              Send code to email
            </BaseButton>

            <ToMainPage className={s.Form_ToMainPage} />
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default ForgotPassword;
