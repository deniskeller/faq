//@ts-nocheck
import React, { useLayoutEffect, useRef, useState } from 'react';
import s from './Questions.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';
import { AccordionItem } from '@content/landing/index';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const DELAY = 0.8;
const DURATION = 1;
const SCALE = '.9';

const questions = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We offer a vast range of copywriting services – writing essays, term papers, lab reports, book and movie reviews.',
  },
  {
    id: 2,
    question: 'How quickly can you complete my order?',
    answer:
      'The minimum deadline is 24 hours. We can accommodate other time frames upon request.',
  },
  {
    id: 3,
    question: 'What payment options do you have?',
    answer:
      'The order cost is auto-calculated based on service type, proficiency level, deadline, and file specifications. We accept Visa and Mastercard for secure payment during checkout.',
  },
  {
    id: 4,
    question: 'Can I get a refund?',
    answer:
      'If you find that your work doesn`t adhere to your initial guidelines, request a free revision within 48 hours of receiving it. If the revised work still doesn`t meet your requirements, you can request a refund. Our policy allows refunds within 7 days after the order is completed.',
  },
  {
    id: 5,
    question: 'Where can I check the prices?',
    answer:
      'The total cost of your order will be automatically calculated based on the type of service, level of proficiency, deadline, and file specifications you choose.',
  },
  {
    id: 6,
    question: 'How qualified are your writers?',
    answer:
      'We only work with professionals who have enough experience in writing papers in a particular field.',
  },
  {
    id: 7,
    question: 'What should I do if any corrections to my work are required?',
    answer:
      'You can request a free revision within 2 days of receiving your order. Explain the necessary improvements, and the assigned writer will make the changes. The free revision option is available if the original instructions remain unchanged.',
  },
  {
    id: 8,
    question: 'How will my work be framed?',
    answer:
      'You can discuss all the details of the content and formatting of your work with our manager. You can be sure that your work will be organized properly, even if your formatting requirements are quite specific.',
  },
];

const Questions: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  // animation
  const refTitle = useRef(null);
  const refImage = useRef(null);
  const refAnswers = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    //заголовок, картинка
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
          trigger: refImage.current,
          toggleActions: 'play none none none',
          start: 'top 80%',
        },
      })
      .fromTo(
        refImage.current,
        { scale: SCALE, opacity: 0 },
        { scale: '1', opacity: 1, delay: DELAY, duration: DURATION }
      );

    // карточки
    if (refAnswers.current != null) {
      const childNodes = refAnswers.current.childNodes;
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
            {
              scale: '1',
              opacity: 1,
              delay: DELAY,
              duration: DURATION,
            }
          );
      });
    }
  }, []);

  return (
    <section className={s.Questions}>
      <BaseContainer className={s.Questions_Container} large>
        <div className={s.Header}>
          <BaseText className={s.Questions_Title} ref={refTitle}>
            Got questions? <br /> We have answers
          </BaseText>

          <Image
            src="/pictures/images/main-questions.webp"
            width={539.7}
            height={482.72}
            alt=""
            quality={100}
            className={s.Questions_Image}
            ref={refImage}
          />
        </div>

        <div className={s.Answers} ref={refAnswers}>
          {questions?.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                item={item}
                className={s.Answers_AccortionItem}
              />
            );
          })}
        </div>
      </BaseContainer>
    </section>
  );
};

export default Questions;
