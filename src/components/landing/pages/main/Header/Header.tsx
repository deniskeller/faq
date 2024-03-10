import React from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <BaseContainer className={s.Header_Container} large>
        <BaseText className={s.Header_Title} as="h1">
          Do what you like while we are writing for you!
        </BaseText>

        <BaseText className={s.Header_Description} as="p">
          At Coursepal, we love to write, so we are here to help you! Our
          professional writers will accommodate your requests in a timely
          manner.
        </BaseText>

        <BaseButton as="a" href="/order" className={s.Header_Button}>
          Place an order
        </BaseButton>

        <Image
          src="/pictures/images/main-header.webp"
          width={700}
          height={479}
          alt=""
          priority
          className={s.Header_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
