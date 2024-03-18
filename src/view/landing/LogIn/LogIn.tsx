import React, { useState } from 'react';
import s from './LogIn.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import Link from 'next/link';
import { ToMainPage } from '@content/landing/index';
import Image from 'next/image';

interface IFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    email: '',
    password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState(false);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.email != '') {
      router.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <section className={s.LogIn}>
      <BaseContainer className={s.LogIn_Container}>
        <BaseText className={s.LogIn_Title}>
          <span>Log</span>&nbsp;in
        </BaseText>

        <BaseText as="p" className={s.LogIn_Subtitle}>
          Please login to your account using the email you signed up with and
          the password which was sent to your email.
        </BaseText>

        <div className={s.LogIn_Content}>
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
                placeholder="Email address"
                label="Email address"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                error={error}
              />

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
            </div>

            <Link href={'/forgot-password'} className={s.Form_ForgotPassword}>
              <span>Forgot password?</span>
            </Link>

            <BaseButton
              type="submit"
              className={s.Form_Button}
              onClick={submitHandler}
            >
              Log in
            </BaseButton>

            <ToMainPage className={s.Form_ToMainPage} />
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default LogIn;
