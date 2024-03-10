import React from 'react';
import s from './HowWorks.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const HowWorks: React.FC = () => {
  return (
    <section className={s.HowWorks}>
      <BaseContainer className={s.HowWorks_Container}>
        <BaseText className={s.HowWorks_Title}>How our service works</BaseText>

        <BaseText className={s.HowWorks_Description} as="p">
          You have made the best decision by choosing us! And now let's see how
          easy it is to make an order.
        </BaseText>

        {/* <BaseButton as="a" href="/order" className={s.HowWorks_Button}>
          Place an order
        </BaseButton>

        <Image
          src="/pictures/images/main-header.webp"
          width={700}
          height={479}
          alt=""
          priority
          className={s.HowWorks_Image}
        /> */}
      </BaseContainer>
    </section>
  );
};

export default HowWorks;
