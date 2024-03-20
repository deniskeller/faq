import React, { useEffect, useRef } from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

import { gsap } from 'gsap';

const DELAY = 0.8;
const DURATION = 1;
const SCALE = '.9';

const Header: React.FC = () => {
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refButton = useRef(null);
  const refImage = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      refTitle.current,
      { scale: SCALE, opacity: 0 },
      { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
    );
    gsap.fromTo(
      refDescription.current,
      { scale: SCALE, opacity: 0 },
      { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
    );
    gsap.fromTo(
      refButton.current,
      { scale: SCALE, opacity: 0 },
      { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
    );
    gsap.fromTo(
      refImage.current,
      {
        scale: SCALE,
        opacity: 0,
      },
      {
        scale: '1',
        opacity: 1,
        delay: DELAY,
        duration: DURATION,
      }
    );
  }, []);

  return (
    <section className={s.Header}>
      <BaseContainer className={s.Header_Container} large>
        <BaseText className={s.Header_Title} as="h1" ref={refTitle}>
          Do what you like while we are writing for you!
        </BaseText>

        <BaseText className={s.Header_Description} as="p" ref={refDescription}>
          At Coursepal, we love to write, so we are here to help you! Our
          professional writers will accommodate your requests in a timely
          manner.
        </BaseText>

        <div ref={refButton} className={s.Header_Button}>
          <BaseButton as="a" href="/order">
            Place an order
          </BaseButton>
        </div>

        <Image
          src="/pictures/images/main-header.webp"
          width={700}
          height={479}
          alt=""
          priority
          quality={100}
          className={s.Header_Image}
          ref={refImage}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
