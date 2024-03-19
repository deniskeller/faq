import React, { useEffect, useRef } from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const refDEscription = useRef(null);
  const refButton = useRef(null);

  const refImage = useRef(null);

  useEffect(() => {
    // var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    // tl.to('#id', { x: 100, duration: 1 });
    // tl.to('#id', { y: 50, duration: 1 });
    // tl.to('#id', { opacity: 0, duration: 1 });

    console.log('refTitle: ', refTitle);
    console.log('refDEscription: ', refDEscription);
    console.log('refButton: ', refButton);
    console.log('refImage: ', refImage);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refTitle.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(refTitle.current, { y: '100%' }, { y: '0%' });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refDEscription.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(refDEscription.current, { y: '100%' }, { y: '0%', delay: 0.5 });
  }, []);

  const refTitle = useRef(null);

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

        <BaseButton
          as="a"
          href="/order"
          className={s.Header_Button}
          ref={refButton}
        >
          Place an order
        </BaseButton>

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
