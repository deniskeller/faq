import React, { useEffect, useRef } from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const refTitle = useRef(null);
  const refDEscription = useRef(null);
  const refButton = useRef(null);
  const refImage = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});

    tl.fromTo(refTitle.current, { y: '100%' }, { y: '0%', delay: 0.8 });
    tl.fromTo(refDEscription.current, { y: '100%' }, { y: '0%' });
    tl.fromTo(
      refButton.current,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1 }
    );
    tl.fromTo(refImage.current, { scale: '0' }, { scale: '1' });
  }, []);

  return (
    <section className={s.Header}>
      <BaseContainer className={s.Header_Container} large>
        <BaseText className={s.Header_Title} as="h1" ref={refTitle}>
          Do what you like while we are writing for you!
        </BaseText>

        <BaseText className={s.Header_Description} as="p" ref={refDEscription}>
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
