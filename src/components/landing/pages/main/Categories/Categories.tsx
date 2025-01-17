//@ts-nocheck
import React, { useLayoutEffect, useRef } from 'react';
import s from './Categories.module.scss';
import { BaseButton, BaseContainer, BaseText } from '@base/index';

import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const DELAY = 0.8;
const DURATION = 1;
const SCALE = '.9';

const categories = [
  {
    name: 'Standard',
    price: '12.83',
    advantagesList: [
      'Undergraduate level author',
      '3 years of writing experience',
      'Delivery time 6-9 days',
      'Up to 20 pages A4',
      'Immediate availability to start your assignment',
      'Sufficient writing experience in your required field',
      'Chosen in accordance with the task',
    ],
  },

  {
    name: 'Advanced',
    price: '14.75',
    advantagesList: [
      'Graduate/Masters level author',
      'Writing experience of up to 5 years',
      'Delivery time 4-5 days',
      'Up to 50 pages A4',
      'Professional in the relevant field',
      'Excellent academic grades and reviews',
      'Suited for complex and substantial tasks',
    ],
  },

  {
    name: 'Premium',
    price: '18.35',
    advantagesList: [
      'PhD level author',
      'Over 8 years of writing experience',
      'Delivery time 2 days',
      'Up to 100 pages A4',
      'Proficient in diverse fields',
      'Exceptional reviews and top user ratings',
      'Suitable for the most challenging and crucial assignments',
    ],
  },
];

const Categories: React.FC = () => {
  // animation
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refCategories = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    //заголовок, текст
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

    // карточки
    if (refCategories.current != null) {
      const childNodes = refCategories.current.childNodes;
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
    <section className={s.Categories}>
      <BaseContainer className={s.Categories_Container} large>
        <BaseText className={s.Categories_Title} ref={refTitle}>
          Choose an author according to his/her category
        </BaseText>

        <BaseText
          className={s.Categories_Description}
          as="p"
          ref={refDescription}
        >
          We have 3 categories of authors and you can choose who to entrust your
          work to:
        </BaseText>

        <div className={s.Categories_Content} ref={refCategories}>
          {categories?.map((item, index) => {
            return (
              <div className={s.CategoryItem} key={index}>
                {item.name == 'Advanced' ? (
                  <svg
                    viewBox="0 0 146.787 134.193"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.CategoryItem_Decor}
                  >
                    <defs />
                    <path
                      id="Vector 7"
                      d="M124.188 86.5283L50.8027 25.7139L2.17871 25.5674L8.74023 29.9609L119.954 126.366L124.323 132.034L124.188 86.5283Z"
                      fill="#C1FD61"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <path
                      id="Vector 7"
                      d="M2.17871 25.5674L2.20508 29.9404L8.74023 29.9609L2.17871 25.5674Z"
                      fill="#96C649"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <path
                      id="Vector 7"
                      d="M119.946 132.021L124.323 132.034L119.954 126.366L119.946 132.021Z"
                      fill="#96C649"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                    <path
                      id="Most Popular"
                      d="M96.2281 92.3336L103.081 84.5638L101.883 83.508L95.031 91.2778L96.2281 92.3336ZM47.6335 49.4767L54.07 42.1785L52.7908 41.0504L45.1893 44.5228L47.6767 36.5401L46.3847 35.4007L39.9483 42.6988L41.1454 43.7546L45.554 38.7559L43.3833 45.7283L44.2113 46.4585L50.8475 43.4244L46.439 48.4231L47.6335 49.4767ZM77.2719 67.4028Q77.5459 67.2076 77.7743 66.9486Q78.1606 66.5106 78.3434 65.9998Q78.4142 65.8021 78.4545 65.5934Q78.4729 65.5012 78.484 65.4081Q78.5632 64.7462 78.2747 64.0403Q77.9483 63.2374 77.1075 62.4959L74.5876 60.2735L68.1511 67.5717L69.3483 68.6275L71.9595 65.6667L73.2822 66.8333Q74.1845 67.6291 75.0349 67.8276Q75.8467 68.0187 76.5159 67.7909Q76.5498 67.7794 76.5833 67.7668Q76.9576 67.6268 77.2719 67.4028ZM64.3298 61.3441L67.1535 58.1424L68.5608 59.3835L69.4222 58.4068L68.0148 57.1657L69.2831 55.7276L68.0758 54.6627L66.8074 56.1008L66.1256 55.4995L65.2642 56.4762L65.9461 57.0775L63.1224 60.2793Q62.3838 61.1168 62.465 61.8653Q62.4663 61.8774 62.4678 61.8896Q62.5662 62.6462 63.3737 63.3583L64.3196 64.1926L65.199 63.1954L64.4633 62.5465Q64.0967 62.2233 64.0673 61.9466Q64.0426 61.6697 64.3298 61.3441ZM75.4348 66.444Q74.8255 66.458 74.1436 65.8566L72.8208 64.69L74.9234 62.306L76.2461 63.4726Q77.0082 64.1447 77.0086 64.8172Q77.0088 65.3413 76.5464 65.8657Q76.1438 66.3222 75.6682 66.4185Q75.5536 66.4417 75.4348 66.444ZM50.6485 51.8957Q50.9922 52.6074 51.6352 53.1745Q52.2589 53.7246 52.9866 53.9936Q53.2279 54.0829 53.4806 54.1412Q53.9523 54.2486 54.4206 54.2354Q54.962 54.2201 55.4989 54.0436Q55.617 54.0048 55.732 53.9583Q56.5919 53.6104 57.2779 52.8326Q58.0023 52.0112 58.2366 51.068Q58.2545 50.9957 58.2696 50.9227Q58.394 50.3201 58.3251 49.7406Q58.2767 49.3337 58.133 48.9382Q58.0657 48.7513 57.9803 48.5732Q57.626 47.8348 56.9589 47.2465Q56.2802 46.6479 55.4901 46.3894Q55.3134 46.3316 55.1312 46.2908Q54.7208 46.1977 54.3111 46.2006Q53.7275 46.2046 53.1453 46.4033Q53.0844 46.4243 53.0244 46.4473Q52.1088 46.7983 51.3768 47.6282Q50.5901 48.5203 50.3701 49.5294Q50.2458 50.1074 50.3007 50.6678Q50.3419 51.088 50.4839 51.4983Q50.5552 51.7023 50.6485 51.8957ZM56.9183 57.3963Q57.2421 58.1194 57.924 58.7208Q58.5982 59.3154 59.2899 59.5335Q59.9625 59.747 60.5588 59.6153Q60.5781 59.6111 60.5974 59.6064Q60.8429 59.5477 61.0597 59.4343Q61.3887 59.2621 61.6516 58.964Q62.0954 58.4416 62.1303 57.8933Q62.1332 57.8481 62.1333 57.8028Q62.1341 57.4582 62.0496 57.1359Q61.988 56.9011 61.8811 56.6781Q61.6324 56.1488 61.151 55.4235Q60.7991 54.8716 60.6347 54.5671Q60.4729 54.2649 60.4416 53.9593Q60.4282 53.8176 60.466 53.6911Q60.509 53.547 60.6186 53.4227Q60.7307 53.2957 60.8714 53.2318Q61.0544 53.1488 61.2858 53.1726Q61.6979 53.217 62.1696 53.633Q62.6541 54.0602 62.7303 54.5422Q62.7633 54.7381 62.7315 54.9228Q62.6851 55.1923 62.5008 55.4381L63.6979 56.4939Q64.1611 55.9154 64.2566 55.2815Q64.3093 54.9319 64.2501 54.5655Q64.2427 54.5182 64.2336 54.4713Q64.0433 53.4944 63.1016 52.6639Q62.4377 52.0784 61.7331 51.849Q61.0311 51.6218 60.4177 51.7644Q60.0967 51.8395 59.8311 52.0041Q59.5933 52.1515 59.3999 52.3707Q58.9496 52.8814 58.9009 53.4278Q58.8955 53.4876 58.895 53.5478Q58.8915 53.9596 59.0079 54.3342Q59.064 54.515 59.1481 54.687Q59.4113 55.2154 59.9042 55.9691Q60.4108 56.7485 60.5808 57.181Q60.6771 57.4213 60.6299 57.6289Q60.5926 57.7929 60.4659 57.9365Q60.3657 58.0502 60.2401 58.1143Q60.0287 58.2223 59.7457 58.19Q59.297 58.1406 58.792 57.6952Q58.3591 57.3134 58.2316 56.848Q58.2172 56.7953 58.2067 56.7415Q58.141 56.3966 58.2413 56.1097Q58.2954 55.9547 58.3981 55.8166L57.1573 54.7223Q56.9423 54.9889 56.8173 55.2925Q56.6864 55.6107 56.6544 55.9695Q56.6526 55.992 56.6511 56.0145Q56.607 56.6938 56.9183 57.3963ZM75.8379 74.1109Q76.1815 74.8226 76.8246 75.3897Q77.4483 75.9398 78.1759 76.2088Q78.4172 76.2981 78.6699 76.3564Q79.1416 76.4638 79.6099 76.4506Q80.1514 76.4353 80.6883 76.2588Q80.8064 76.22 80.9214 76.1735Q81.7813 75.8256 82.4673 75.0478Q83.1917 74.2264 83.4259 73.2832Q83.4439 73.2109 83.459 73.1379Q83.5834 72.5353 83.5144 71.9558Q83.466 71.549 83.3224 71.1534Q83.2551 70.9666 83.1696 70.7884Q82.8153 70.05 82.1483 69.4617Q81.4695 68.8631 80.6795 68.6046Q80.5028 68.5468 80.3206 68.5061Q79.9102 68.4129 79.5005 68.4158Q78.9169 68.4198 78.3346 68.6185Q78.2738 68.6395 78.2138 68.6625Q77.2982 69.0135 76.5662 69.8434Q75.7794 70.7355 75.5594 71.7446Q75.4352 72.3226 75.4901 72.883Q75.5313 73.3032 75.6733 73.7135Q75.7445 73.9176 75.8379 74.1109ZM88.0696 75.1715Q87.3044 74.9798 86.6467 75.1107L87.3973 74.2596L86.2001 73.2038L78.6717 81.7401L79.8689 82.7959L83.0362 79.2045Q83.0091 79.8915 83.287 80.6151Q83.5671 81.3361 84.2285 81.9194Q84.677 82.315 85.1994 82.5352Q85.5548 82.6851 85.9445 82.7538Q86.2507 82.8068 86.5567 82.8055Q87.2145 82.8026 87.8713 82.5481Q87.8801 82.5447 87.8889 82.5412Q88.8428 82.1649 89.6044 81.3012Q90.3731 80.4297 90.6091 79.4438Q90.7625 78.8032 90.6905 78.189Q90.6517 77.8579 90.5474 77.5346Q90.4344 77.1802 90.2542 76.864Q89.9636 76.3542 89.4984 75.944Q88.8641 75.3846 88.1323 75.1877Q88.101 75.1793 88.0696 75.1715ZM101.703 89.2279Q100.749 89.5807 99.9807 90.4523Q99.2361 91.2965 98.9813 92.2691Q98.973 92.3006 98.9653 92.3322Q98.7891 93.0569 98.8859 93.7431Q98.9235 94.0093 99.0021 94.2696Q99.1245 94.671 99.3328 95.0213Q99.6067 95.4819 100.029 95.8543Q100.701 96.4467 101.466 96.6384Q102.233 96.8276 102.9 96.6865L102.14 97.5478L103.348 98.6126L108.45 92.8269L107.243 91.762L106.501 92.6029Q106.549 91.9339 106.274 91.2174Q106.004 90.5006 105.322 89.8993Q104.846 89.4797 104.292 89.2539Q103.965 89.1208 103.61 89.055Q103.29 88.9945 102.969 88.9942Q102.336 88.9936 101.703 89.2279ZM111.265 95.9868Q110.873 95.9867 110.48 96.1118L111.222 95.271L110.025 94.2152L104.922 100.001L106.119 101.057L108.805 98.0113Q109.583 97.1295 110.258 97.092Q110.269 97.0914 110.28 97.091Q110.948 97.0664 111.639 97.6761L111.944 97.9452L113.038 96.7044Q112.441 96.1777 111.786 96.042Q111.525 95.9869 111.265 95.9868ZM93.4562 89.889L98.5588 84.1033L97.3617 83.0475L94.5176 86.2723Q93.8463 87.0335 93.1021 87.1132Q93.0868 87.1148 93.0716 87.1162Q92.8867 87.1325 92.7068 87.1094Q92.1511 87.0381 91.6438 86.5907Q91.1347 86.1417 90.9967 85.5984Q90.9527 85.425 90.9465 85.242Q90.9256 84.4853 91.6106 83.7086L94.4547 80.4838L93.2678 79.437L90.2678 82.8387Q89.5737 83.6257 89.3885 84.4558Q89.2755 84.9756 89.347 85.4687Q89.3897 85.7627 89.498 86.0472Q89.5034 86.0614 89.509 86.0755Q89.803 86.8175 90.4746 87.4099Q90.8023 87.6989 91.1809 87.8838Q91.3946 87.9882 91.6245 88.0594Q92.2168 88.2442 92.7718 88.1656Q92.8163 88.1593 92.8605 88.1514L92.2591 88.8332L93.4562 89.889ZM53.0517 52.4745Q52.785 52.3382 52.5531 52.1337Q52.1515 51.7796 51.9632 51.3351Q51.8126 50.9794 51.7985 50.5658Q51.7977 50.5393 51.7976 50.5128Q51.795 49.6086 52.5945 48.7021Q53.1506 48.0715 53.7657 47.8392Q54.246 47.6578 54.709 47.6945Q54.8389 47.7048 54.9674 47.7323Q55.215 47.786 55.44 47.8889Q55.7505 48.031 56.018 48.267Q56.2885 48.5055 56.4703 48.799Q56.6003 49.009 56.6849 49.247Q56.731 49.3758 56.7596 49.5083Q56.8582 49.9658 56.747 50.4685Q56.6036 51.1168 56.0475 51.7474Q55.4936 52.3754 54.8535 52.5948Q54.3347 52.7726 53.8426 52.7165Q53.7276 52.7033 53.614 52.6774Q53.3158 52.6094 53.0517 52.4745ZM78.2411 74.6897Q77.9743 74.5534 77.7424 74.3489Q77.3409 73.9948 77.1526 73.5503Q77.0019 73.1946 76.9878 72.7811Q76.987 72.7545 76.987 72.728Q76.9843 71.8238 77.7838 70.9173Q78.34 70.2867 78.955 70.0544Q79.4353 69.873 79.8983 69.9097Q80.0282 69.92 80.1567 69.9475Q80.4043 70.0012 80.6293 70.1042Q80.9398 70.2462 81.2073 70.4822Q81.4778 70.7207 81.6596 71.0143Q81.7896 71.2242 81.8742 71.4622Q81.9204 71.591 81.9489 71.7235Q82.0475 72.181 81.9363 72.6837Q81.793 73.332 81.2368 73.9626Q80.6829 74.5907 80.0428 74.81Q79.5241 74.9878 79.032 74.9317Q78.9169 74.9185 78.8033 74.8926Q78.5051 74.8246 78.2411 74.6897ZM89.0518 78.9772Q88.9136 79.6301 88.3868 80.2274Q87.8578 80.8272 87.2138 81.0613Q86.692 81.2511 86.1905 81.2074Q86.0731 81.1971 85.9568 81.1741Q85.615 81.1064 85.3204 80.9501Q85.0865 80.8259 84.8823 80.6458Q84.7126 80.4962 84.5783 80.3196Q84.3553 80.0268 84.2296 79.66Q84.1949 79.5578 84.1706 79.4531Q84.0559 78.9582 84.1753 78.409Q84.3226 77.7459 84.8494 77.1486Q85.3784 76.5488 86.0133 76.3249Q86.5249 76.1471 87.0161 76.1919Q87.1371 76.203 87.2568 76.2275Q87.6365 76.3064 87.9549 76.491Q88.1468 76.6023 88.3165 76.7519Q88.5385 76.9478 88.7015 77.1843Q88.8771 77.4393 88.984 77.7416Q89.0343 77.8839 89.0641 78.0304Q89.1563 78.4838 89.0518 78.9772ZM105.364 93.391Q105.224 94.0512 104.695 94.6511Q104.168 95.2484 103.526 95.4751Q102.995 95.6654 102.488 95.6133Q102.385 95.6027 102.283 95.5821Q101.992 95.5242 101.734 95.3988Q101.459 95.2654 101.221 95.0555Q101.059 94.912 100.929 94.7432Q100.699 94.4438 100.573 94.0645Q100.536 93.952 100.511 93.8368Q100.405 93.3447 100.528 92.8033Q100.68 92.1351 101.209 91.5352Q101.735 90.9379 102.366 90.7192Q102.865 90.5459 103.345 90.5897Q103.471 90.6012 103.595 90.6275Q103.883 90.6886 104.139 90.8144Q104.416 90.9503 104.655 91.1616Q104.893 91.3715 105.06 91.6277Q105.217 91.8682 105.311 92.1497Q105.348 92.2616 105.373 92.3762Q105.48 92.8592 105.364 93.391Z"
                      fill="#373737"
                      fillOpacity="1.000000"
                      fillRule="evenodd"
                    />
                  </svg>
                ) : null}

                <div className={s.CategoryItem_Name}>
                  <span>{item.name}</span>
                </div>

                <div className={s.CategoryItem_Price}>
                  <div className={s.Value}>
                    from <span>{item.price}$</span>
                  </div>
                </div>

                <ul className={s.CategoryItem_ListIncludes}>
                  {item.advantagesList.map((el, index) => {
                    return (
                      <li key={index}>
                        <svg
                          viewBox="0 0 18.333 18.3301"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M9.16699 0L6.66699 6.66504L0 9.16504L6.66699 11.6641L9.16699 18.3301L11.667 11.6641L18.333 9.16504L11.667 6.66504L9.16699 0Z"
                            fill="#7656F5"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                          />
                          <path
                            id="Vector"
                            d="M6.66699 6.66504L0.711914 8.89844L0 9.16504L0.711914 9.43164L6.66699 11.6641L8.89941 17.6182L9.16699 18.3301L9.43359 17.6182L11.667 11.6641L17.6211 9.43164L18.333 9.16504L17.6211 8.89844L11.667 6.66504L9.43359 0.711914L9.16699 0L8.89941 0.711914L6.66699 6.66504ZM9.16699 1.42383L7.05469 7.05371L6.8418 7.13379L1.42383 9.16504L7.05469 11.2764L9.16699 16.9062L11.2783 11.2764L16.9092 9.16504L11.2783 7.05371L9.16699 1.42383Z"
                            fill="#7656F5"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                          />
                        </svg>

                        <p>{el}</p>
                      </li>
                    );
                  })}
                </ul>

                <BaseButton
                  as="button"
                  design={item.name == 'Advanced' ? 'green' : 'empty'}
                  className={s.CategoryItem_Button}
                >
                  Choose the category
                </BaseButton>
              </div>
            );
          })}
        </div>
      </BaseContainer>
    </section>
  );
};

export default Categories;
