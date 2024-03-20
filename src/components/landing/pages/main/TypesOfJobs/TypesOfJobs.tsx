import React, { useLayoutEffect, useRef } from 'react';
import s from './TypesOfJobs.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const DELAY = 0.8;
const DURATION = 1;
const SCALE = '.9';

const TypesOfJobs: React.FC = () => {
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refButton = useRef(null);
  const refImage_D = useRef(null);
  const refImage_M = useRef(null);

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: refTitle.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(
        refTitle.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refDescription.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(
        refDescription.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refButton.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(
        refButton.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refImage_D.current,
          toggleActions: 'play none none none',
          start: 'top 60%',
        },
      })
      .fromTo(
        refImage_D.current,
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
    gsap
      .timeline({
        scrollTrigger: {
          trigger: refImage_M.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(
        refImage_M.current,
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
    <section className={s.TypesOfJobs}>
      <BaseContainer className={s.TypesOfJobs_Container} large>
        <BaseText className={s.TypesOfJobs_Title} ref={refTitle}>
          We create written content for diverse sectors
        </BaseText>

        <BaseText
          className={s.TypesOfJobs_Description}
          as="p"
          ref={refDescription}
        >
          We are available 24/7 to stay connected and assist you with any
          writing needs you may have.
        </BaseText>

        <BaseButton
          as="a"
          href="/order"
          className={s.TypesOfJobs_Button}
          ref={refButton}
        >
          Place an order
        </BaseButton>

        <Image
          src="/pictures/images/main-blocks-desktop.webp"
          width={1496}
          height={528}
          alt=""
          quality={100}
          className={`${s.TypesOfJobs_Image} ${s.TypesOfJobs_Image__Desktop}`}
          ref={refImage_D}
        />

        <Image
          src="/pictures/images/main-blocks-mobile.webp"
          width={673}
          height={453}
          alt=""
          quality={100}
          className={`${s.TypesOfJobs_Image} ${s.TypesOfJobs_Image__Mobile}`}
          ref={refImage_M}
        />
      </BaseContainer>
    </section>
  );
};

export default TypesOfJobs;
