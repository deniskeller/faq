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
  const refStep_1 = useRef<HTMLDivElement>(null);
  const refStep_1_Number = useRef(null);
  const refStep_1_Title = useRef(null);
  const refStep_1_Description = useRef(null);
  const refStep_1_Image = useRef(null);
  useLayoutEffect(() => {
    const stepElement = refStep_1.current;
    if (!stepElement) {
      return;
    }
    const myPath = stepElement.querySelector('path') as SVGPathElement;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: myPath,
          toggleActions: 'play complete none complete',
          start: 'top 40%',
          onEnter: () => startAnimation(),
        },
      })
      .fromTo(myPath, { opacity: 0 }, { opacity: 1 });

    const startAnimation = () => {
      const pathLenght = myPath.getTotalLength();
      myPath.style.strokeDasharray = '14 14';
      const arr = [10];
      let totalLenght = 15;
      const frame = () => {
        if (arr[arr.length - 1] > 14) {
          arr.push(arr.length % 2 ? 15 : 1);
          totalLenght += 15;
        }
        myPath.style.strokeDasharray = `${arr.join(' ')}${
          arr.length % 2 ? ' ' : ' 0 '
        }${pathLenght}`;

        arr[arr.length - 1] += pathLenght / 200;

        if (totalLenght < pathLenght) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    };

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

    const startAnimation = () => {
      const pathLenght = myPath.getTotalLength();
      myPath.style.strokeDasharray = '14 14';
      const arr = [10];
      let totalLenght = 15;
      const frame = () => {
        if (arr[arr.length - 1] > 14) {
          arr.push(arr.length % 2 ? 15 : 1);
          totalLenght += 15;
        }
        myPath.style.strokeDasharray = `${arr.join(' ')}${
          arr.length % 2 ? ' ' : ' 0 '
        }${pathLenght}`;

        arr[arr.length - 1] += pathLenght / 200;

        if (totalLenght < pathLenght) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    };

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

    const startAnimation = () => {
      const pathLenght = myPath.getTotalLength();
      myPath.style.strokeOpacity = '1';
      myPath.style.strokeDasharray = '14 14';
      const arr = [10];
      let totalLenght = 15;
      const frame = () => {
        if (arr[arr.length - 1] > 14) {
          arr.push(arr.length % 2 ? 15 : 1);
          totalLenght += 15;
        }
        myPath.style.strokeDasharray = `${arr.join(' ')}${
          arr.length % 2 ? ' ' : ' 0 '
        }${pathLenght}`;

        // console.log(myPath.style.strokeDasharray);
        arr[arr.length - 1] += pathLenght / 200;

        if (totalLenght < pathLenght) {
          requestAnimationFrame(frame);
        }
      };
      requestAnimationFrame(frame);
    };

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
          <div className={`${s.Step} ${s.Step__1}`} ref={refStep_1}>
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
            >
              <path
                d="M1 0.664062V68.6641C1 96.2783 23.3858 118.664 51 118.664H530C557.614 118.664 580 141.05 580 168.664V293.664"
                stroke="#424242"
                strokeDasharray="14 14"
              />
            </svg>

            <svg
              viewBox="0 0 435 159"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 435 159"
              xmlSpace="preserve"
              className={`${s.Step_Line} ${s.Step_Line__Laptop}`}
            >
              <path
                d="M1 0V53.3333C1 68.0609 12.9391 80 27.6667 80H407.333C422.061 80 434 91.9391 434 106.667V159"
                stroke="#636363"
                strokeDasharray="7.47 7.47"
              />
            </svg>

            <svg
              viewBox="0 0 323 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Tablet}`}
            >
              <path
                d="M1 0.400391V53.7337C1 68.4613 12.9391 80.4004 27.6667 80.4004H295.333C310.061 80.4004 322 92.3395 322 107.067V159.4"
                stroke="#636363"
                strokeDasharray="7.47 7.47"
              />
            </svg>

            <svg
              viewBox="0 0 2 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Mobile}`}
            >
              <path
                d="M0.5 121.759C0.5 122.035 0.723858 122.259 1 122.259C1.27614 122.259 1.5 122.035 1.5 121.759H0.5ZM0.5 4.54004C0.5 4.81618 0.723858 5.04004 1 5.04004C1.27614 5.04004 1.5 4.81618 1.5 4.54004H0.5ZM1.5 12.1025C1.5 11.8264 1.27614 11.6025 1 11.6025C0.723858 11.6025 0.5 11.8264 0.5 12.1025H1.5ZM0.5 19.665C0.5 19.9412 0.723858 20.165 1 20.165C1.27614 20.165 1.5 19.9412 1.5 19.665H0.5ZM1.5 27.2275C1.5 26.9514 1.27614 26.7275 1 26.7275C0.723858 26.7275 0.5 26.9514 0.5 27.2275H1.5ZM0.5 34.79C0.5 35.0662 0.723858 35.29 1 35.29C1.27614 35.29 1.5 35.0662 1.5 34.79H0.5ZM1.5 42.3525C1.5 42.0764 1.27614 41.8525 1 41.8525C0.723858 41.8525 0.5 42.0764 0.5 42.3525H1.5ZM0.5 49.915C0.5 50.1912 0.723858 50.415 1 50.415C1.27614 50.415 1.5 50.1912 1.5 49.915H0.5ZM1.5 57.4775C1.5 57.2014 1.27614 56.9775 1 56.9775C0.723858 56.9775 0.5 57.2014 0.5 57.4775H1.5ZM0.5 65.04C0.5 65.3162 0.723858 65.54 1 65.54C1.27614 65.54 1.5 65.3162 1.5 65.04H0.5ZM1.5 72.6025C1.5 72.3264 1.27614 72.1025 1 72.1025C0.723858 72.1025 0.5 72.3264 0.5 72.6025H1.5ZM0.5 80.165C0.5 80.4412 0.723858 80.665 1 80.665C1.27614 80.665 1.5 80.4412 1.5 80.165H0.5ZM1.5 87.7275C1.5 87.4514 1.27614 87.2275 1 87.2275C0.723858 87.2275 0.5 87.4514 0.5 87.7275H1.5ZM0.5 95.29C0.5 95.5662 0.723858 95.79 1 95.79C1.27614 95.79 1.5 95.5662 1.5 95.29H0.5ZM1.5 102.853C1.5 102.576 1.27614 102.353 1 102.353C0.723858 102.353 0.5 102.576 0.5 102.853H1.5ZM0.5 110.415C0.5 110.691 0.723858 110.915 1 110.915C1.27614 110.915 1.5 110.691 1.5 110.415H0.5ZM1.5 117.978C1.5 117.701 1.27614 117.478 1 117.478C0.723858 117.478 0.5 117.701 0.5 117.978H1.5ZM0.5 0.758789V4.54004H1.5V0.758789H0.5ZM0.5 12.1025V19.665H1.5V12.1025H0.5ZM0.5 27.2275V34.79H1.5V27.2275H0.5ZM0.5 42.3525V49.915H1.5V42.3525H0.5ZM0.5 57.4775V65.04H1.5V57.4775H0.5ZM0.5 72.6025V80.165H1.5V72.6025H0.5ZM0.5 87.7275V95.29H1.5V87.7275H0.5ZM0.5 102.853V110.415H1.5V102.853H0.5ZM0.5 117.978V121.759H1.5V117.978H0.5Z"
                fill="#636363"
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
            >
              <path
                d="M580 1V130.397C580 158.011 557.614 180.397 530 180.397H51C23.3858 180.397 1 202.783 1 230.397V301"
                stroke="#424242"
                strokeLinecap="round"
                strokeDasharray="14 14"
              />
            </svg>

            <svg
              viewBox="0 0 435 163"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Laptop}`}
            >
              <path
                d="M434 1V68.3472C434 84.3243 421.048 97.2764 405.071 97.2764H29.9292C13.9521 97.2764 1 110.228 1 126.206V162"
                stroke="#636363"
                strokeLinecap="round"
                strokeDasharray="8.1 8.1"
              />
            </svg>

            <svg
              viewBox="0 0 323 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Tablet}`}
            >
              <path
                d="M322 1V74.3271C322 90.3043 309.048 103.256 293.071 103.256H29.9292C13.952 103.256 1 116.208 1 132.185V172"
                stroke="#636363"
                strokeLinecap="round"
                strokeDasharray="8.1 8.1"
              />
            </svg>

            <svg
              viewBox="0 0 2 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Mobile}`}
            >
              <path
                d="M0.5 142.759C0.5 143.035 0.723858 143.259 1 143.259C1.27614 143.259 1.5 143.035 1.5 142.759H0.5ZM0.5 4.30879C0.5 4.58493 0.723858 4.80879 1 4.80879C1.27614 4.80879 1.5 4.58493 1.5 4.30879H0.5ZM1.5 11.4088C1.5 11.1326 1.27614 10.9088 1 10.9088C0.723858 10.9088 0.5 11.1326 0.5 11.4088H1.5ZM0.5 18.5088C0.5 18.7849 0.723858 19.0088 1 19.0088C1.27614 19.0088 1.5 18.7849 1.5 18.5088H0.5ZM1.5 25.6088C1.5 25.3326 1.27614 25.1088 1 25.1088C0.723858 25.1088 0.5 25.3326 0.5 25.6088H1.5ZM0.5 32.7088C0.5 32.9849 0.723858 33.2088 1 33.2088C1.27614 33.2088 1.5 32.9849 1.5 32.7088H0.5ZM1.5 39.8088C1.5 39.5326 1.27614 39.3088 1 39.3088C0.723858 39.3088 0.5 39.5326 0.5 39.8088H1.5ZM0.5 46.9088C0.5 47.1849 0.723858 47.4088 1 47.4088C1.27614 47.4088 1.5 47.1849 1.5 46.9088H0.5ZM1.5 54.0088C1.5 53.7326 1.27614 53.5088 1 53.5088C0.723858 53.5088 0.5 53.7326 0.5 54.0088H1.5ZM0.5 61.1088C0.5 61.3849 0.723858 61.6088 1 61.6088C1.27614 61.6088 1.5 61.3849 1.5 61.1088H0.5ZM1.5 68.2088C1.5 67.9326 1.27614 67.7088 1 67.7088C0.723858 67.7088 0.5 67.9326 0.5 68.2088H1.5ZM0.5 75.3088C0.5 75.5849 0.723858 75.8088 1 75.8088C1.27614 75.8088 1.5 75.5849 1.5 75.3088H0.5ZM1.5 82.4088C1.5 82.1326 1.27614 81.9088 1 81.9088C0.723858 81.9088 0.5 82.1326 0.5 82.4088H1.5ZM0.5 89.5088C0.5 89.7849 0.723858 90.0088 1 90.0088C1.27614 90.0088 1.5 89.7849 1.5 89.5088H0.5ZM1.5 96.6088C1.5 96.3326 1.27614 96.1088 1 96.1088C0.723858 96.1088 0.5 96.3326 0.5 96.6088H1.5ZM0.5 103.709C0.5 103.985 0.723858 104.209 1 104.209C1.27614 104.209 1.5 103.985 1.5 103.709H0.5ZM1.5 110.809C1.5 110.533 1.27614 110.309 1 110.309C0.723858 110.309 0.5 110.533 0.5 110.809H1.5ZM0.5 117.909C0.5 118.185 0.723858 118.409 1 118.409C1.27614 118.409 1.5 118.185 1.5 117.909H0.5ZM1.5 125.009C1.5 124.733 1.27614 124.509 1 124.509C0.723858 124.509 0.5 124.733 0.5 125.009H1.5ZM0.5 132.109C0.5 132.385 0.723858 132.609 1 132.609C1.27614 132.609 1.5 132.385 1.5 132.109H0.5ZM1.5 139.209C1.5 138.933 1.27614 138.709 1 138.709C0.723858 138.709 0.5 138.933 0.5 139.209H1.5ZM0.5 0.758789V4.30879H1.5V0.758789H0.5ZM0.5 11.4088V18.5088H1.5V11.4088H0.5ZM0.5 25.6088V32.7088H1.5V25.6088H0.5ZM0.5 39.8088V46.9088H1.5V39.8088H0.5ZM0.5 54.0088V61.1088H1.5V54.0088H0.5ZM0.5 68.2088V75.3088H1.5V68.2088H0.5ZM0.5 82.4088V89.5088H1.5V82.4088H0.5ZM0.5 96.6088V103.709H1.5V96.6088H0.5ZM0.5 110.809V117.909H1.5V110.809H0.5ZM0.5 125.009V132.109H1.5V125.009H0.5ZM0.5 139.209V142.759H1.5V139.209H0.5Z"
                fill="#636363"
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
            >
              <path
                d="M1 0.664062V129.664C1 157.278 23.3858 179.664 51 179.664H530C557.614 179.664 580 202.05 580 229.664V293.664"
                stroke="#424242"
                strokeDasharray="14 14"
              />
            </svg>

            <svg
              viewBox="0 0 435 205"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Laptop}`}
            >
              <path
                d="M1 0V104.198C1 118.926 12.9391 130.865 27.6667 130.865H407.333C422.061 130.865 434 142.804 434 157.531V205"
                stroke="#636363"
                strokeDasharray="7.47 7.47"
              />
            </svg>

            <svg
              viewBox="0 0 323 206"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Tablet}`}
            >
              <path
                d="M1 0.400391V104.598C1 119.326 12.9391 131.265 27.6667 131.265H295.333C310.061 131.265 322 143.204 322 157.932V205.4"
                stroke="#636363"
                strokeDasharray="7.47 7.47"
              />
            </svg>

            <svg
              width="58"
              height="243"
              viewBox="0 0 58 243"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Step_Line} ${s.Step_Line__Mobile}`}
            >
              <path
                d="M57 242.139C57.2761 242.139 57.5 241.915 57.5 241.639C57.5 241.363 57.2761 241.139 57 241.139V242.139ZM0.5 4.46605C0.5 4.7422 0.723858 4.96605 1 4.96605C1.27614 4.96605 1.5 4.7422 1.5 4.46605H0.5ZM1.5 12.1208C1.5 11.8447 1.27614 11.6208 1 11.6208C0.723858 11.6208 0.5 11.8447 0.5 12.1208H1.5ZM0.5 19.7756C0.5 20.0517 0.723858 20.2756 1 20.2756C1.27614 20.2756 1.5 20.0517 1.5 19.7756H0.5ZM1.5 27.4303C1.5 27.1542 1.27614 26.9303 1 26.9303C0.723858 26.9303 0.5 27.1542 0.5 27.4303H1.5ZM0.5 35.0851C0.5 35.3612 0.723858 35.5851 1 35.5851C1.27614 35.5851 1.5 35.3612 1.5 35.0851H0.5ZM1.5 42.7399C1.5 42.4637 1.27614 42.2399 1 42.2399C0.723858 42.2399 0.5 42.4637 0.5 42.7399H1.5ZM0.5 50.3946C0.5 50.6708 0.723858 50.8946 1 50.8946C1.27614 50.8946 1.5 50.6708 1.5 50.3946H0.5ZM1.5 58.0494C1.5 57.7732 1.27614 57.5494 1 57.5494C0.723858 57.5494 0.5 57.7732 0.5 58.0494H1.5ZM0.5 65.7041C0.5 65.9803 0.723858 66.2041 1 66.2041C1.27614 66.2041 1.5 65.9803 1.5 65.7041H0.5ZM1.5 73.3589C1.5 73.0828 1.27614 72.8589 1 72.8589C0.723858 72.8589 0.5 73.0828 0.5 73.3589H1.5ZM0.5 81.0137C0.5 81.2898 0.723858 81.5137 1 81.5137C1.27614 81.5137 1.5 81.2898 1.5 81.0137H0.5ZM1.5 88.6684C1.5 88.3923 1.27614 88.1684 1 88.1684C0.723858 88.1684 0.5 88.3923 0.5 88.6684H1.5ZM0.5 96.3232C0.5 96.5993 0.723858 96.8232 1 96.8232C1.27614 96.8232 1.5 96.5993 1.5 96.3232H0.5ZM1.5 103.978C1.5 103.702 1.27614 103.478 1 103.478C0.723858 103.478 0.5 103.702 0.5 103.978H1.5ZM0.5 111.633C0.5 111.909 0.723858 112.133 1 112.133C1.27614 112.133 1.5 111.909 1.5 111.633H0.5ZM1.5 119.287C1.5 119.011 1.27614 118.787 1 118.787C0.723858 118.787 0.5 119.011 0.5 119.287H1.5ZM0.5 126.942C0.5 127.218 0.723858 127.442 1 127.442C1.27614 127.442 1.5 127.218 1.5 126.942H0.5ZM1.5 134.597C1.5 134.321 1.27614 134.097 1 134.097C0.723858 134.097 0.5 134.321 0.5 134.597H1.5ZM0.5 142.252C0.5 142.528 0.723858 142.752 1 142.752C1.27614 142.752 1.5 142.528 1.5 142.252H0.5ZM1.5 149.907C1.5 149.63 1.27614 149.407 1 149.407C0.723858 149.407 0.5 149.63 0.5 149.907H1.5ZM0.5 157.561C0.5 157.837 0.723858 158.061 1 158.061C1.27614 158.061 1.5 157.837 1.5 157.561H0.5ZM1.5 165.216C1.5 164.94 1.27614 164.716 1 164.716C0.723858 164.716 0.5 164.94 0.5 165.216H1.5ZM0.5 172.871C0.5 173.147 0.723858 173.371 1 173.371C1.27614 173.371 1.5 173.147 1.5 172.871H0.5ZM1.5 180.526C1.5 180.249 1.27614 180.026 1 180.026C0.723858 180.026 0.5 180.249 0.5 180.526H1.5ZM0.5 188.18C0.5 188.456 0.723858 188.68 1 188.68C1.27614 188.68 1.5 188.456 1.5 188.18H0.5ZM1.5 195.835C1.5 195.559 1.27614 195.335 1 195.335C0.723858 195.335 0.5 195.559 0.5 195.835H1.5ZM0.5 203.49C0.5 203.766 0.723858 203.99 1 203.99C1.27614 203.99 1.5 203.766 1.5 203.49H0.5ZM1.5 211.145C1.5 210.868 1.27614 210.645 1 210.645C0.723858 210.645 0.5 210.868 0.5 211.145H1.5ZM0.729595 218.52C0.765312 218.793 1.01624 218.986 1.29007 218.951C1.56389 218.915 1.75691 218.664 1.72119 218.39L0.729595 218.52ZM3.48535 224.988C3.37957 224.733 3.08704 224.612 2.83196 224.718C2.57688 224.824 2.45584 225.116 2.56162 225.371L3.48535 224.988ZM6.11289 231.511C6.28115 231.73 6.59506 231.771 6.81401 231.603C7.03297 231.434 7.07407 231.121 6.90581 230.902L6.11289 231.511ZM11.7371 235.733C11.5181 235.565 11.2042 235.606 11.036 235.825C10.8677 236.044 10.9088 236.358 11.1278 236.526L11.7371 235.733ZM17.2675 240.077C17.5226 240.183 17.8151 240.062 17.9209 239.807C18.0266 239.552 17.9056 239.259 17.6505 239.153L17.2675 240.077ZM24.2484 240.917C23.9746 240.882 23.7237 241.075 23.688 241.349C23.6522 241.622 23.8453 241.873 24.1191 241.909L24.2484 240.917ZM31.3333 242.139C31.6095 242.139 31.8333 241.915 31.8333 241.639C31.8333 241.363 31.6095 241.139 31.3333 241.139V242.139ZM38.6667 241.139C38.3905 241.139 38.1667 241.363 38.1667 241.639C38.1667 241.915 38.3905 242.139 38.6667 242.139V241.139ZM46 242.139C46.2761 242.139 46.5 241.915 46.5 241.639C46.5 241.363 46.2761 241.139 46 241.139V242.139ZM53.3333 241.139C53.0572 241.139 52.8333 241.363 52.8333 241.639C52.8333 241.915 53.0572 242.139 53.3333 242.139V241.139ZM0.5 0.638672V4.46605H1.5V0.638672H0.5ZM0.5 12.1208V19.7756H1.5V12.1208H0.5ZM0.5 27.4303V35.0851H1.5V27.4303H0.5ZM0.5 42.7399V50.3946H1.5V42.7399H0.5ZM0.5 58.0494V65.7041H1.5V58.0494H0.5ZM0.5 73.3589V81.0137H1.5V73.3589H0.5ZM0.5 88.6684V96.3232H1.5V88.6684H0.5ZM0.5 103.978V111.633H1.5V103.978H0.5ZM0.5 119.287V126.942H1.5V119.287H0.5ZM0.5 134.597V142.252H1.5V134.597H0.5ZM0.5 149.907V157.561H1.5V149.907H0.5ZM0.5 165.216V172.871H1.5V165.216H0.5ZM0.5 180.526V188.18H1.5V180.526H0.5ZM0.5 195.835V203.49H1.5V195.835H0.5ZM0.5 211.145V214.972H1.5V211.145H0.5ZM0.5 214.972C0.5 216.174 0.578112 217.358 0.729595 218.52L1.72119 218.39C1.57529 217.272 1.5 216.131 1.5 214.972H0.5ZM2.56162 225.371C3.4776 227.58 4.67646 229.642 6.11289 231.511L6.90581 230.902C5.52202 229.101 4.36738 227.115 3.48535 224.988L2.56162 225.371ZM11.1278 236.526C12.997 237.962 15.0586 239.161 17.2675 240.077L17.6505 239.153C15.5235 238.271 13.5378 237.117 11.7371 235.733L11.1278 236.526ZM24.1191 241.909C25.2804 242.061 26.4645 242.139 27.6667 242.139V241.139C26.5079 241.139 25.367 241.063 24.2484 240.917L24.1191 241.909ZM27.6667 242.139H31.3333V241.139H27.6667V242.139ZM38.6667 242.139H46V241.139H38.6667V242.139ZM53.3333 242.139H57V241.139H53.3333V242.139Z"
                fill="#636363"
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
