import React from 'react';
import s from './TypesOfJobs.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const TypesOfJobs: React.FC = () => {
  return (
    <section className={s.TypesOfJobs}>
      <BaseContainer className={s.TypesOfJobs_Container}>
        <BaseText className={s.TypesOfJobs_Title}>
          We create written content for diverse sectors
        </BaseText>

        <BaseText className={s.TypesOfJobs_Description} as="p">
          We are available 24/7 to stay connected and assist you with any
          writing needs you may have.
        </BaseText>

        <BaseButton as="a" href="/order" className={s.TypesOfJobs_Button}>
          Place an order
        </BaseButton>

        <Image
          src="/pictures/images/main-blocks-desktop.png"
          width={748}
          height={263.69}
          alt=""
          quality={100}
          className={`${s.TypesOfJobs_Image} ${s.TypesOfJobs_Image__Desktop}`}
        />

        <Image
          src="/pictures/images/main-blocks-mobile.png"
          width={336}
          height={226}
          alt=""
          quality={100}
          className={`${s.TypesOfJobs_Image} ${s.TypesOfJobs_Image__Mobile}`}
        />
      </BaseContainer>
    </section>
  );
};

export default TypesOfJobs;
