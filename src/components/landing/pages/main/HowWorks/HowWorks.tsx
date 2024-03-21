import React, { useLayoutEffect, useRef } from 'react';
import s from './HowWorks.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const DELAY = 0.8;
const DURATION = 1;
const SCALE = '.9';

const HowWorks: React.FC = () => {
  // animation
  //заголовок, текст
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refHowWorks = useRef(null);
  const refButton = useRef(null);

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
        { scale: '1', opacity: 1, delay: 1, duration: DURATION }
      );
  }, []);

  // STEP 1
  // const refStep_1 = useRef<HTMLDivElement>(null);
  const refStep_1_Number = useRef(null);
  const refStep_1_Title = useRef(null);
  const refStep_1_Description = useRef(null);
  const refStep_1_Image = useRef(null);
  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_1_Number.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_1_Number.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_1_Title.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_1_Title.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_1_Description.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_1_Description.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_1_Image.current,
          toggleActions: 'play none none none',
          start: 'top 50%',
        },
      })
      .fromTo(
        refStep_1_Image.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );
  }, []);
  // анимация линий
  const refStep_1_line_desktop = useRef<SVGSVGElement>(null);
  const refStep_1_line_laptop = useRef<SVGSVGElement>(null);
  const refStep_1_line_tablet = useRef<SVGSVGElement>(null);
  const refStep_1_line_mobile = useRef<SVGSVGElement>(null);
  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_1_line_desktop.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_1_line_desktop, 'pathPlayDesktopStep1'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_1_line_laptop.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_1_line_laptop, 'pathPlayLaptopStep1'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_1_line_tablet.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_1_line_tablet, 'pathPlayTabletStep1'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_1_line_mobile.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_1_line_mobile, 'pathPlayMobileStep1'),
      },
    });

    const startAnimation = (
      target: React.RefObject<SVGSVGElement>,
      className: string
    ) => {
      const line = target.current;
      if (!line) {
        return;
      }
      const myPath = line.querySelector('path') as SVGPathElement;
      myPath.classList.add(className);
    };
  }, []);

  // STEP 2
  const refStep_2 = useRef<HTMLDivElement>(null);
  const refStep_2_Number = useRef(null);
  const refStep_2_Title = useRef(null);
  const refStep_2_Description = useRef(null);
  const refStep_2_Image = useRef(null);
  useLayoutEffect(() => {
    const stepElement = refStep_2.current;
    if (!stepElement) {
      return;
    }
    const myPath = stepElement.querySelector('path') as SVGPathElement;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: myPath,
          toggleActions: 'play none none none',
          start: 'top 40%',
          onEnter: () => startAnimation(),
        },
      })
      .fromTo(myPath, { opacity: 0 }, { opacity: 1 });

    const startAnimation = () => {};

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_2_Number.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_2_Number.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_2_Title.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_2_Title.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_2_Description.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_2_Description.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_2_Image.current,
          toggleActions: 'play none none none',
          start: 'top 50%',
        },
      })
      .fromTo(
        refStep_2_Image.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );
  }, []);
  // анимация линий
  const refStep_2_line_desktop = useRef<SVGSVGElement>(null);
  const refStep_2_line_laptop = useRef<SVGSVGElement>(null);
  const refStep_2_line_tablet = useRef<SVGSVGElement>(null);
  const refStep_2_line_mobile = useRef<SVGSVGElement>(null);
  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_2_line_desktop.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_2_line_desktop, 'pathPlayDesktopStep2'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_2_line_laptop.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_2_line_laptop, 'pathPlayLaptopStep2'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_2_line_tablet.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_2_line_tablet, 'pathPlayTabletStep2'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_2_line_mobile.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_2_line_mobile, 'pathPlayMobileStep2'),
      },
    });

    const startAnimation = (
      target: React.RefObject<SVGSVGElement>,
      className: string
    ) => {
      const line = target.current;
      if (!line) {
        return;
      }
      const myPath = line.querySelector('path') as SVGPathElement;
      myPath.classList.add(className);
    };
  }, []);

  // STEP 3
  const refStep_3 = useRef<HTMLDivElement>(null);
  const refStep_3_Number = useRef(null);
  const refStep_3_Title = useRef(null);
  const refStep_3_Description = useRef(null);
  const refStep_3_Image = useRef(null);
  useLayoutEffect(() => {
    const stepElement = refStep_3.current;
    if (!stepElement) {
      return;
    }
    const myPath = stepElement.querySelector('path') as SVGPathElement;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: myPath,
          toggleActions: 'play none none none',
          start: 'top 40%',
          onEnter: () => startAnimation(),
        },
      })
      .fromTo(myPath, { opacity: 0 }, { opacity: 1 });

    const startAnimation = () => {};

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_3_Number.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_3_Number.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_3_Title.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_3_Title.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_3_Description.current,
          toggleActions: 'play none none none',
          start: 'top 70%',
        },
      })
      .fromTo(
        refStep_3_Description.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: refStep_3_Image.current,
          toggleActions: 'play none none none',
          start: 'top 50%',
        },
      })
      .fromTo(
        refStep_3_Image.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );
  }, []);

  // анимация линий
  const refStep_3_line_desktop = useRef<SVGSVGElement>(null);
  const refStep_3_line_laptop = useRef<SVGSVGElement>(null);
  const refStep_3_line_tablet = useRef<SVGSVGElement>(null);
  const refStep_3_line_mobile = useRef<SVGSVGElement>(null);
  useLayoutEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_3_line_desktop.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_3_line_desktop, 'pathPlayDesktopStep3'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_3_line_laptop.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_3_line_laptop, 'pathPlayLaptopStep3'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_3_line_tablet.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_3_line_tablet, 'pathPlayTabletStep3'),
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: refStep_3_line_mobile.current,
        toggleActions: 'play none none none',
        start: 'top 40%',
        onEnter: () =>
          startAnimation(refStep_3_line_mobile, 'pathPlayMobileStep3'),
      },
    });

    const startAnimation = (
      target: React.RefObject<SVGSVGElement>,
      className: string
    ) => {
      const line = target.current;
      if (!line) {
        return;
      }
      const myPath = line.querySelector('path') as SVGPathElement;
      myPath.classList.add(className);
    };
  }, []);

  return (
    <section className={s.HowWorks} ref={refHowWorks}>
      <BaseContainer className={s.HowWorks_Container} large>
        <BaseText className={s.HowWorks_Title} ref={refTitle}>
          How our service works
        </BaseText>

        <BaseText
          className={s.HowWorks_Description}
          as="p"
          ref={refDescription}
        >
          You have made the best decision by choosing us! And now let's see how
          easy it is to make an order.
        </BaseText>

        <div className={s.HowWorks_Content}>
          {/* STEP 1 */}
          <div className={`${s.Step} ${s.Step__1}`}>
            <div className={s.Step_Number} ref={refStep_1_Number}>
              <span>Step 1</span>
            </div>

            <div className={s.Step_Content}>
              <div className={s.Title} ref={refStep_1_Title}>
                <p>Complete the order form</p>
              </div>

              <p className={s.Description} ref={refStep_1_Description}>
                Use our user-friendly order form, fill in all required fields.
                Ask our manager for pricing or check our pricing page for
                details.
              </p>
            </div>

            <svg
              viewBox="0 0 581 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 581 294"
              xmlSpace="preserve"
              className={`${s.Step_Line} ${s.Step_Line__Desktop}`}
              ref={refStep_1_line_desktop}
            >
              <path
                className="pathDesktopStep1"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="14"
                d="M1 0.664062V68.6641C1 96.2783 23.3858 118.664 51 118.664H530C557.614 118.664 580 141.05 580 168.664V293.664"
              />

              <path
                className="dashedDesktopStep1"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="14"
                d="M1 0.664062V68.6641C1 96.2783 23.3858 118.664 51 118.664H530C557.614 118.664 580 141.05 580 168.664V293.664"
              />
            </svg>

            <svg
              viewBox="0 0 435 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 435 159"
              xmlSpace="preserve"
              className={`${s.Step_Line} ${s.Step_Line__Laptop}`}
              ref={refStep_1_line_laptop}
            >
              <path
                className="pathLaptopStep1"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0V53.3333C1 68.0609 12.9391 80 27.6667 80H407.333C422.061 80 434 91.9391 434 106.667V159"
              />

              <path
                className="dashedLaptopStep1"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0V53.3333C1 68.0609 12.9391 80 27.6667 80H407.333C422.061 80 434 91.9391 434 106.667V159"
              />
            </svg>

            <svg
              viewBox="0 0 323 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Tablet}`}
              ref={refStep_1_line_tablet}
            >
              <path
                className="pathTabletStep1"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0.400391V53.7337C1 68.4613 12.9391 80.4004 27.6667 80.4004H295.333C310.061 80.4004 322 92.3395 322 107.067V159.4"
              />

              <path
                className="dashedTabletStep1"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0.400391V53.7337C1 68.4613 12.9391 80.4004 27.6667 80.4004H295.333C310.061 80.4004 322 92.3395 322 107.067V159.4"
              />
            </svg>

            <svg
              viewBox="0 0 2 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Mobile}`}
              ref={refStep_1_line_mobile}
            >
              <path
                className="pathMobileStep1"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="8.1"
                d="M1 1V117"
              />

              <path
                className="dashedMobileStep1"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeMiterlimit="8.1"
                d="M1 1V117"
              />
            </svg>

            <Image
              src="/pictures/images/how-works-step-1.webp"
              width={756}
              height={547}
              alt=""
              quality={100}
              className={s.Step_Image}
              ref={refStep_1_Image}
            />
          </div>

          {/* STEP 2 */}
          <div className={`${s.Step} ${s.Step__2}`} ref={refStep_2}>
            <div className={s.Step_Number} ref={refStep_2_Number}>
              <span>Step 2</span>
            </div>

            <div className={s.Step_Content}>
              <div className={s.Title} ref={refStep_2_Title}>
                <p>Talk with manager</p>
              </div>

              <p className={s.Description} ref={refStep_2_Description}>
                After you find the best solution for you and place an order, our
                manager will contact you within an hour to clarify the details.
                Check your order and give the correct e-mail address.
              </p>
            </div>

            <svg
              viewBox="0 0 581 302"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Desktop}`}
              ref={refStep_2_line_desktop}
            >
              <path
                className="pathDesktopStep2"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="14"
                d="M580 1V130.397C580 158.011 557.614 180.397 530 180.397H51C23.3858 180.397 1 202.783 1 230.397V301"
              />

              <path
                className="dashedDesktopStep2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="14"
                d="M580 1V130.397C580 158.011 557.614 180.397 530 180.397H51C23.3858 180.397 1 202.783 1 230.397V301"
              />
            </svg>

            <svg
              viewBox="0 0 435 163"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Laptop}`}
              ref={refStep_2_line_laptop}
            >
              {/* <path
                d="M434 1V68.3472C434 84.3243 421.048 97.2764 405.071 97.2764H29.9292C13.9521 97.2764 1 110.228 1 126.206V162"
                stroke="#636363"
                strokeLinecap="round"
                strokeDasharray="8.1 8.1"
              /> */}

              <path
                className="pathLaptopStep2"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="8.1"
                d="M434 1V68.3472C434 84.3243 421.048 97.2764 405.071 97.2764H29.9292C13.9521 97.2764 1 110.228 1 126.206V162"
              />

              <path
                className="dashedLaptopStep2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="8.1"
                d="M434 1V68.3472C434 84.3243 421.048 97.2764 405.071 97.2764H29.9292C13.9521 97.2764 1 110.228 1 126.206V162"
              />
            </svg>

            <svg
              viewBox="0 0 323 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Tablet}`}
              ref={refStep_2_line_tablet}
            >
              {/* <path
                d="M322 1V74.3271C322 90.3043 309.048 103.256 293.071 103.256H29.9292C13.952 103.256 1 116.208 1 132.185V172"
                stroke="#636363"
                strokeLinecap="round"
                strokeDasharray="8.1 8.1"
              /> */}

              <path
                className="pathTabletStep2"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="8.1"
                d="M322 1V74.3271C322 90.3043 309.048 103.256 293.071 103.256H29.9292C13.952 103.256 1 116.208 1 132.185V172"
              />

              <path
                className="dashedTabletStep2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="8.1"
                d="M322 1V74.3271C322 90.3043 309.048 103.256 293.071 103.256H29.9292C13.952 103.256 1 116.208 1 132.185V172"
              />
            </svg>

            <svg
              viewBox="0 0 2 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Mobile}`}
              ref={refStep_2_line_mobile}
            >
              <path
                className="pathMobileStep2"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="8"
                d="M1 1V140"
              />

              <path
                className="dashedMobileStep2"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeMiterlimit="8"
                d="M1 1V140"
              />
            </svg>

            <Image
              src="/pictures/images/how-works-step-2.webp"
              width={842}
              height={758}
              alt=""
              quality={100}
              className={s.Step_Image}
              ref={refStep_2_Image}
            />
          </div>

          {/* STEP 3 */}
          <div className={`${s.Step} ${s.Step__3}`} ref={refStep_3}>
            <div className={s.Step_Number} ref={refStep_3_Number}>
              <span>Step 3</span>
            </div>

            <div className={s.Step_Content}>
              <div className={s.Title} ref={refStep_3_Title}>
                <p>Get your work</p>
              </div>

              <p className={s.Description} ref={refStep_3_Description}>
                After agreeing on all the details, our manager will send you
                payment instructions. When the payment has been confirmed, your
                order will be given to the writer. You just have to wait for the
                order to be fulfilled and sent to your email.
              </p>
            </div>

            <svg
              viewBox="0 0 581 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Desktop}`}
              ref={refStep_3_line_desktop}
            >
              {/* <path
                d="M1 0.664062V129.664C1 157.278 23.3858 179.664 51 179.664H530C557.614 179.664 580 202.05 580 229.664V293.664"
                stroke="#424242"
                strokeDasharray="14 14"
              /> */}

              <path
                className="pathDesktopStep3"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="14"
                d="M1 0.664062V129.664C1 157.278 23.3858 179.664 51 179.664H530C557.614 179.664 580 202.05 580 229.664V293.664"
              />

              <path
                className="dashedDesktopStep3"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="14"
                d="M1 0.664062V129.664C1 157.278 23.3858 179.664 51 179.664H530C557.614 179.664 580 202.05 580 229.664V293.664"
              />
            </svg>

            <svg
              viewBox="0 0 435 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Laptop}`}
              ref={refStep_3_line_laptop}
            >
              {/* <path
                d="M1 0V104.198C1 118.926 12.9391 130.865 27.6667 130.865H407.333C422.061 130.865 434 142.804 434 157.531V205"
                stroke="#636363"
                strokeDasharray="7.47 7.47"
              /> */}

              <path
                className="pathLaptopStep3"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0V104.198C1 118.926 12.9391 130.865 27.6667 130.865H407.333C422.061 130.865 434 142.804 434 157.531V205"
              />

              <path
                className="dashedLaptopStep3"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0V104.198C1 118.926 12.9391 130.865 27.6667 130.865H407.333C422.061 130.865 434 142.804 434 157.531V205"
              />
            </svg>

            <svg
              viewBox="0 0 323 206"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Tablet}`}
              ref={refStep_3_line_tablet}
            >
              <path
                className="pathTabletStep3"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0.400391V104.598C1 119.326 12.9391 131.265 27.6667 131.265H295.333C310.061 131.265 322 143.204 322 157.932V205.4"
              />

              <path
                className="dashedTabletStep3"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeMiterlimit="7.47"
                d="M1 0.400391V104.598C1 119.326 12.9391 131.265 27.6667 131.265H295.333C310.061 131.265 322 143.204 322 157.932V205.4"
              />
            </svg>

            <svg
              viewBox="0 0 58 243"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Mobile}`}
              ref={refStep_3_line_mobile}
            >
              <path
                className="pathMobileStep3"
                fill="none"
                stroke="#424242"
                strokeLinejoin="round"
                strokeMiterlimit="8"
                d="M1 1L1 202C1 224.091 18.9086 242 41 242H57"
              />

              <path
                className="dashedMobileStep3"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeMiterlimit="8"
                d="M1 1L1 202C1 224.091 18.9086 242 41 242H57"
              />
            </svg>

            <Image
              src="/pictures/images/how-works-step-3.webp"
              width={866}
              height={780}
              alt=""
              quality={100}
              className={s.Step_Image}
              ref={refStep_3_Image}
            />
          </div>
        </div>

        <BaseButton
          as="a"
          href="/order"
          className={s.HowWorks_Button}
          ref={refButton}
        >
          Place an order
        </BaseButton>
      </BaseContainer>
    </section>
  );
};

export default HowWorks;
