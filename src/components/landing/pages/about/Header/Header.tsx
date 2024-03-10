import React from 'react';
import s from './Header.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <BaseContainer className={s.Header_Container}>
        <BaseText className={s.Header_Title}>About company</BaseText>

        <BaseText className={s.Header_Description} as="p">
          We are only moving forward and we want you to go part of this path
          with us. There are many similar writing services on the Internet, but
          we are sure that you will like ours the most.
        </BaseText>

        <div className={s.Header_Subtitle}>
          <h3>Every day we try to improve our service</h3>
        </div>

        <BaseText className={s.Header_Subdescription} as="p">
          Our aim is to create a comfortable and productive cooperation. If you
          decide to order work from us, we're prepared to thoroughly discuss
          your needs and preferences, and we commit to delivering high-quality
          work promptly.
        </BaseText>

        <Image
          src="/pictures/images/about-header.webp"
          width={961}
          height={722}
          alt=""
          priority
          className={s.Header_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
