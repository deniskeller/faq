import { useRouter } from 'next/router';
import React from 'react';
import s from './NotFound.module.scss';
import Image from 'next/image';
import { BaseButton, BaseContainer } from '@base/index';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <section className={s.NotFound}>
      <BaseContainer className={s.NotFound_Container}>
        <div className={s.NotFound_Title}>
          <h1>404</h1>
        </div>

        <div className={s.NotFound_Subtitle}>
          <p>We couldn't find the page you were looking for</p>
        </div>

        <Image
          src="/pictures/images/404.webp"
          width={590}
          height={581}
          alt="404"
          priority
          quality={100}
          className={s.NotFound_Image}
        />

        <BaseButton as="a" href="/" className={s.NotFound_Button}>
          Main page
        </BaseButton>
      </BaseContainer>
    </section>
  );
};

export default NotFound;
