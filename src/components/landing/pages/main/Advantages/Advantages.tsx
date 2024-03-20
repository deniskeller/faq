//@ts-nocheck
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import s from './Advantages.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Link from 'next/link';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const DELAY = 0.8;
const DURATION = 1;
const SCALE = '.9';

const Advantages: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const showMoreHundler = () => {
    setShowMore(!showMore);
  };
  // animation
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refButton = useRef(null);

  const refAdvantages = useRef<HTMLDivElement>(null);
  const refCard_1 = useRef(null);
  const refCard_2 = useRef(null);
  const refCard_3 = useRef(null);
  const refCard_4 = useRef(null);
  const refCard_5 = useRef(null);
  const refCard_6 = useRef(null);

  useLayoutEffect(() => {
    //заголовок, текс, кнопка
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

    // карточки
    if (refAdvantages.current != null) {
      const childNodes = refAdvantages.current.childNodes;
      // УБРАТЬ @ts-nocheck И ОПИСАТЬ ТИПЫ
      gsap.utils.toArray(childNodes).forEach((item) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              toggleActions: 'play none none none',
              start: 'top 70%',
            },
          })
          .fromTo(
            item,
            { scale: SCALE, opacity: 0 },
            { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
          );
      });
    }
  }, []);

  return (
    <section className={s.Advantages}>
      <BaseContainer className={s.Advantages_Container} large>
        <BaseText className={s.Advantages_Title} ref={refTitle}>
          Why choose Coursepal?
        </BaseText>

        <BaseText
          className={s.Advantages_Description}
          as="p"
          ref={refDescription}
        >
          Choosing the right service can be challenging due to the abundance of
          options. We'll highlight our advantages to help you make an informed.
        </BaseText>

        <div ref={refButton} className={s.Advantages_Button}>
          <BaseButton as="a" href="/order">
            Place an order
          </BaseButton>
        </div>

        <div
          className={`${s.Advantages_Content} ${
            showMore && isMobile ? s.Advantages_Content__ShowMore : ''
          }`}
          ref={refAdvantages}
        >
          {/* 1 */}
          <Link
            href={'/'}
            className={`${s.AdvantageCard} ${s.AdvantageCard__ReasonablePrices}`}
            ref={refCard_1}
          >
            <Image
              src="/pictures/icons/reasonable-prices.webp"
              width={123}
              height={100}
              alt=""
              quality={100}
              className={s.AdvantageCard_Image}
            />
            <div className={s.AdvantageCard_Title}>
              <h3>Reasonable prices</h3>
            </div>
            <div className={s.AdvantageCard_Description}>
              <p>
                Our prices are fair and transparent. No hidden fees – you only
                pay for the discussed work.
              </p>
            </div>
          </Link>

          {/* 2 */}
          <Link
            href={'/'}
            className={`${s.AdvantageCard} ${s.AdvantageCard__UniquenessGuaranteed}`}
          >
            <Image
              src="/pictures/icons/uniqueness-guaranteed.webp"
              width={66.36}
              height={100}
              alt=""
              quality={100}
              className={s.AdvantageCard_Image}
            />
            <div className={s.AdvantageCard_Title}>
              <h3>Uniqueness guaranteed</h3>
            </div>
            <div className={s.AdvantageCard_Description}>
              <p>
                Our authors create original and unique texts and thoroughly
                check every work before delivery.
              </p>
            </div>
          </Link>

          {/* 3 */}
          <Link
            href={'/'}
            className={`${s.AdvantageCard} ${s.AdvantageCard__Support}`}
          >
            <Image
              src="/pictures/icons/support.webp"
              width={134}
              height={100}
              alt=""
              quality={100}
              className={s.AdvantageCard_Image}
            />
            <div className={s.AdvantageCard_Title}>
              <h3>24/7 customer support</h3>
            </div>
            <div className={s.AdvantageCard_Description}>
              <p>
                Our 24/7 support team is available for your inquiries. We accept
                rush orders even at night.
              </p>
            </div>
          </Link>

          {/* 4 */}
          <Link
            href={'/'}
            className={`${s.AdvantageCard} ${s.AdvantageCard__PrivacyGuarantee}`}
          >
            <Image
              src="/pictures/icons/privacy-guarantee.webp"
              width={121}
              height={100}
              alt=""
              quality={100}
              className={s.AdvantageCard_Image}
            />
            <div className={s.AdvantageCard_Title}>
              <h3>Privacy guarantee</h3>
            </div>
            <div className={s.AdvantageCard_Description}>
              <p>
                Your personal data is strictly confidential. We never share it
                with third parties without your consent.
              </p>
            </div>
          </Link>

          {/* 5 */}
          <Link
            href={'/'}
            className={`${s.AdvantageCard} ${s.AdvantageCard__TopWriters}`}
          >
            <Image
              src="/pictures/icons/top-writers.webp"
              width={97}
              height={100}
              alt=""
              quality={100}
              className={s.AdvantageCard_Image}
            />
            <div className={s.AdvantageCard_Title}>
              <h3>Top writers</h3>
            </div>
            <div className={s.AdvantageCard_Description}>
              <p>
                Our team includes highly experienced authors proficient in
                diverse subjects and topics.
              </p>
            </div>
          </Link>

          {/* 6 */}
          <Link
            href={'/'}
            className={`${s.AdvantageCard} ${s.AdvantageCard__OnTime}`}
          >
            <Image
              src="/pictures/icons/on-time.webp"
              width={90}
              height={100}
              alt=""
              quality={100}
              className={s.AdvantageCard_Image}
            />
            <div className={s.AdvantageCard_Title}>
              <h3>On time</h3>
            </div>
            <div className={s.AdvantageCard_Description}>
              <p>
                You can be sure that your work will be completed on time (and
                maybe even a little earlier).
              </p>
            </div>
          </Link>
        </div>

        <div className={s.Advantages_ShowMore} onClick={showMoreHundler}>
          <span>{!showMore ? 'Show more' : 'Hide'}</span>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Advantages;
