import React, { useState, useEffect, useLayoutEffect } from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer, BaseIcon } from '@base/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Logo } from '@content/landing/index';
import { ALL_ICONS } from '@constants/icons';

interface ILink {
  name: string;
  href: string;
}

interface Props {
  pages: ILink[];
}

const Header: React.FC<Props> = ({ pages }) => {
  const router = useRouter();

  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  useEffect(() => {
    if (isVisibleSidebar) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [isVisibleSidebar]);

  //ВРЕМЕННАЯ АВТОРИЗАЦИЯ
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const checkAuth = sessionStorage.getItem('auth');
    if (checkAuth == 'true') {
      setAuth(true);
    }
    console.log('auth: ', auth);
  }, [auth]);

  const logout = () => {
    sessionStorage.removeItem('auth');
    setAuth(false);
  };

  return (
    <div className={`${s.Header}`}>
      <BaseContainer className={s.Header_Container}>
        {/* <Link href={'/'} className={s.Header_Logo}> */}
        {/* <BaseIcon
            viewBox="0 0 107 48"
            icon={ALL_ICONS.LOGO}
            className={s.Icon}
          /> */}
        <Logo className={s.Logo} />
        {/* </Link> */}

        <ul className={s.Header_Navbar}>
          {pages?.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`${s.Link} ${
                    router.pathname.split('/')[1] === link.href.split('/')[1]
                      ? s.Link_Active
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={s.Header_Actions}>
          {!auth ? (
            <>
              <BaseButton as="a" href="/sign-up" className={s.SignUp}>
                Sign Up
              </BaseButton>
              <BaseButton as="a" href="/log-in" className={s.Login}>
                Log In
              </BaseButton>
            </>
          ) : (
            <>
              <Link href="/personal-profile" className={s.User}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45 45"
                  fill="none"
                  className={s.User_Icon}
                >
                  <circle
                    cx="22.5"
                    cy="22.5"
                    r="21.25"
                    fill="white"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M5.625 22.5C5.625 24.7161 6.06148 26.9104 6.90953 28.9578C7.75758 31.0052 9.00058 32.8654 10.5676 34.4324C12.1346 35.9994 13.9948 37.2424 16.0422 38.0905C18.0896 38.9385 20.2839 39.375 22.5 39.375C24.7161 39.375 26.9104 38.9385 28.9578 38.0905C31.0052 37.2424 32.8654 35.9994 34.4324 34.4324C35.9994 32.8654 37.2424 31.0052 38.0905 28.9578C38.9385 26.9104 39.375 24.7161 39.375 22.5C39.375 20.2839 38.9385 18.0896 38.0905 16.0422C37.2424 13.9948 35.9994 12.1346 34.4324 10.5676C32.8654 9.00058 31.0052 7.75758 28.9578 6.90953C26.9104 6.06148 24.7161 5.625 22.5 5.625C20.2839 5.625 18.0896 6.06148 16.0422 6.90953C13.9948 7.75758 12.1346 9.00058 10.5676 10.5676C9.00058 12.1346 7.75758 13.9948 6.90953 16.0422C6.06148 18.0896 5.625 20.2839 5.625 22.5Z"
                    stroke="#F98973"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.565 35.3419C12.0291 33.7973 12.9787 32.4435 14.273 31.4812C15.5672 30.5189 17.1372 29.9995 18.75 30H26.25C27.8649 29.9994 29.4368 30.5201 30.732 31.4846C32.0272 32.4491 32.9765 33.8058 33.4388 35.3531M16.875 18.75C16.875 20.2418 17.4676 21.6726 18.5225 22.7275C19.5774 23.7824 21.0082 24.375 22.5 24.375C23.9918 24.375 25.4226 23.7824 26.4775 22.7275C27.5324 21.6726 28.125 20.2418 28.125 18.75C28.125 17.2582 27.5324 15.8274 26.4775 14.7725C25.4226 13.7176 23.9918 13.125 22.5 13.125C21.0082 13.125 19.5774 13.7176 18.5225 14.7725C17.4676 15.8274 16.875 17.2582 16.875 18.75Z"
                    stroke="#F98973"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <button className={s.Logout} onClick={logout}>
                <div className={s.Logout_Label}>Log out</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45 45"
                  fill="none"
                  className={s.Logout_Icon}
                >
                  <path
                    d="M28.125 15V13.125C28.125 12.1304 27.7299 11.1766 27.0266 10.4733C26.3234 9.77009 25.3696 9.375 24.375 9.375L9.375 9.375C8.38044 9.375 7.42661 9.77009 6.72335 10.4733C6.02009 11.1766 5.625 12.1304 5.625 13.125V31.875C5.625 32.8696 6.02009 33.8234 6.72335 34.5266C7.42661 35.2299 8.38044 35.625 9.375 35.625H24.375C25.3696 35.625 26.3234 35.2299 27.0266 34.5266C27.7299 33.8234 28.125 32.8696 28.125 31.875V30"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.75 22.5H39.375M39.375 22.5L33.75 16.875M39.375 22.5L33.75 28.125"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <div
          className={s.Header_Burder}
          onClick={() => setIsVisibleSidebar(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`${s.Header_Sidebar} ${
            isVisibleSidebar ? s.Header_Sidebar_Visible : null
          }`}
        >
          <div
            className={s.Overlay}
            onClick={() => setIsVisibleSidebar(false)}
          ></div>

          <div className={s.Sidebar}>
            <div className={s.Sidebar_Content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 138 197"
                fill="none"
                className={s.Sidebar_Flower_1}
              >
                <g opacity="0.3">
                  <path
                    d="M68.2526 51.9744C78.2186 46.2593 86.2036 36.7347 84.8798 23.293C84.7097 21.0632 84.2363 18.7703 83.03 16.4668C81.8238 14.1632 79.7586 11.9642 77.4437 10.8459C74.4963 9.45454 71.6304 10.2038 70.0175 11.8506C68.4047 13.4974 67.8302 16.0679 67.3818 18.523C65.7421 29.2251 66.24 40.867 68.2526 51.9744Z"
                    fill="#F98973"
                  />
                  <path
                    d="M65.6526 77.8011C80.6867 80.0089 93.7784 74.6684 99.4878 63.7261C100.801 61.2058 101.541 57.4481 98.6686 54.4167C96.8463 52.4819 94.1244 51.6976 92.1508 51.9627C90.1772 52.2279 88.6166 53.3467 87.2067 54.489C78.8298 61.069 71.6872 68.918 65.6526 77.8011Z"
                    fill="#F98973"
                  />
                  <path
                    opacity="0.51"
                    d="M93.1914 66.3996C93.6579 65.8991 94.1243 65.3986 94.1634 64.6162C94.2947 63.9199 93.9063 62.8556 93.1438 62.378C92.1045 61.6419 91.0018 61.8996 90.2003 62.2043C87.6207 63.3061 73.008 68.6189 76.4605 73.2447C79.8208 77.7844 91.4422 68.2764 93.1914 66.3996Z"
                    fill="#F98973"
                  />
                  <path
                    d="M58.011 60.8757C61.0674 52.4385 61.5145 42.3807 59.4148 31.9246C58.9756 30.0015 58.5362 28.0784 57.3237 26.2483C56.1111 24.4182 54.1253 22.6812 52.1198 22.4388C49.6648 22.1261 48.5576 24.2352 47.982 26.1422C45.2878 35.8485 49.0443 49.1314 58.011 60.8757Z"
                    fill="#F98973"
                  />
                  <path
                    d="M47.6977 77.7695C47.8596 67.1145 47.7707 55.993 42.6399 44.5814C41.8781 42.8246 40.875 40.9588 39.4665 39.5281C38.0242 37.9497 36.027 36.7829 34.3914 36.8831C32.8137 36.9211 31.8629 38.1252 31.602 39.5085C31.3411 40.8917 31.6543 42.5783 32.0254 44.2028C34.3628 54.7503 39.5419 65.7423 47.6977 77.7695Z"
                    fill="#F98973"
                  />
                  <path
                    d="M60.91 94.6766C67.8603 98.4803 75.2469 100.708 81.7913 100.516C88.3357 100.325 93.8295 97.7526 96.9648 93.0958C98.0261 91.403 98.734 88.7972 96.8502 86.5723C95.8284 85.2686 94.1332 84.5031 92.6316 84.2682C91.13 84.0333 89.914 84.415 88.6642 84.6485C79.0675 87.0078 70.352 91.0062 60.91 94.6766Z"
                    fill="#F98973"
                  />
                  <path
                    d="M36.433 97.3134C37.4195 87.4303 36.5009 76.4662 31.2312 65.3911C30.3779 63.5491 29.3171 61.7459 27.8751 60.1678C26.3753 58.6519 24.3448 57.3377 22.7095 57.4378C21.1321 57.4759 20.1478 58.5321 19.7953 59.8295C19.3849 61.1891 19.5148 62.7043 19.7363 64.3051C21.3447 75.4482 27.357 87.5649 36.433 97.3134Z"
                    fill="#F98973"
                  />
                  <path
                    d="M43.0243 114.371C56.5228 123.476 72.4697 125.899 82.6208 120.351C84.473 119.285 86.3399 117.65 85.5234 115.025C84.8421 112.991 82.7633 111.167 80.6794 110.271C78.5955 109.374 76.5646 109.341 74.6836 109.333C63.5813 109.452 53.5857 111.884 43.0243 114.371Z"
                    fill="#F98973"
                  />
                  <path
                    d="M22.5493 112.037C21.5539 100.423 20.491 88.5135 15.1938 76.3689C14.3069 74.3797 13.2705 72.3672 11.5878 70.6806C9.90509 68.994 7.60975 67.7809 5.83486 68.215C3.85258 68.6878 3.62047 71.1425 3.76942 73.3721C4.52823 86.1592 11.561 100.853 22.5493 112.037Z"
                    fill="#F98973"
                  />
                  <path
                    opacity="0.51"
                    d="M11.1857 77.7454C10.9254 76.9216 10.5397 75.8645 9.74867 75.2425C8.95765 74.6204 7.88667 74.6664 7.42343 75.1635C6.86854 75.5751 6.77184 76.4143 6.64142 77.1058C6.23497 81.9545 8.5299 87.5817 10.9069 92.937C11.9532 95.3076 12.9994 97.6782 14.5764 99.8471C15.5361 101.207 18.6181 103.968 17.9771 101.162C16.7723 96.2038 15.0272 91.0897 13.5812 86.0224C12.7666 83.4033 11.9761 80.5743 11.1857 77.7454Z"
                    fill="#F98973"
                  />
                  <path
                    d="M29.8234 130.017C40.8643 139.508 55.2609 144.11 65.6195 141.457C67.6033 140.984 69.5681 139.795 69.0039 137.641C68.6084 136.226 67.3491 134.818 65.8675 134.017C64.4439 133.153 62.9139 132.771 61.5673 132.561C50.1867 130.424 40.277 133.148 29.8234 130.017Z"
                    fill="#F98973"
                  />
                  <path
                    d="M9.74206 124.995C8.20662 115.436 6.72906 105.814 2.53745 95.9815C1.90149 94.4592 1.08238 92.766 -0.026052 91.3833C-1.22606 89.9151 -2.86482 88.734 -4.50863 88.4769C-6.15245 88.2198 -7.28558 89.2519 -7.69569 90.6106C-8.10579 91.9692 -7.88443 93.5689 -7.66307 95.1686C-5.63606 105.303 0.608903 116.239 9.74206 124.995Z"
                    fill="#F98973"
                  />
                  <path
                    d="M13.1252 143.561C22.4792 153.916 36.3173 160.562 47.2504 159.853C49.5981 159.723 52.2254 158.924 52.0092 156.401C51.812 154.591 50.1205 152.548 48.2166 151.468C46.3707 150.326 44.3943 149.874 42.418 149.423C32.7197 147.337 23.0645 145.756 13.1252 143.561Z"
                    fill="#F98973"
                  />
                  <path
                    opacity="0.51"
                    d="M45.1867 158.547C46.1076 158.478 47.2021 158.222 47.0577 157.274C46.8554 156.389 45.9154 155.744 45.0092 155.247C40.9019 153.039 36.6835 152.237 32.5566 151.52C28.7286 150.85 24.4669 149.543 20.7401 149.316C21.0339 150.287 24.0517 151.826 24.9917 152.471C26.6548 153.443 28.2263 154.329 29.9136 155.091C33.2882 156.615 36.6195 157.634 39.9075 158.148C41.7009 158.429 43.5523 158.647 45.1867 158.547Z"
                    fill="#F98973"
                  />
                  <path
                    d="M-4.78277 134.902C-5.37838 125.987 -7.29493 116.651 -11.5932 107.299C-12.1955 105.924 -12.9473 104.526 -13.9305 103.376C-15.0054 102.141 -16.519 101.193 -17.8304 101.13C-19.0839 101.005 -19.9856 101.789 -20.2559 102.814C-20.6756 103.815 -20.5216 105.12 -20.4014 106.277C-19.3383 115.977 -13.541 126.845 -4.78277 134.902Z"
                    fill="#F98973"
                  />
                  <path
                    d="M-20.3551 160.748C-20.7407 160.976 -21.2873 160.819 -21.7508 160.386C-21.8436 160.3 -21.8435 160.3 -21.9948 160.276C-22.3998 159.781 -22.4191 159.058 -22.0335 158.83C25.7773 129.3 59.8826 84.1644 76.4015 28.1431"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M53.7417 80.7714C65.3921 78.6476 79.2341 73.3952 86.7139 65.7402"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M55.3077 41.5001C54.6584 50.6656 56.8388 58.4308 60.6573 68.5091"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M41.2113 55.3388C41.5948 65.2192 45.4802 74.4737 51.5009 84.7377"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M47.435 91.0574C60.8189 96.2176 76.4296 98.4552 87.0708 94.7715"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M26.1412 70.3974C28.4954 81.6471 33.1877 91.4765 39.1758 102.868"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M32.0016 111.498C43.5517 115.301 57.1259 118.386 67.1609 116.82"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M13.9557 84.7274C13.3578 84.6339 12.919 84.921 13.0539 85.5113C14.927 96.5482 19.6028 107.612 26.0901 118.659"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M19.8743 125.344C31.2714 131.108 44.2649 136.889 55.4221 138.137"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M13.381 132.174C13.7472 132.516 14.2868 132.671 14.6098 132.508C15.0821 132.369 15.1545 131.74 14.8125 131.189C8.2655 121.133 3.66559 110.458 1.51376 100.094C1.37896 99.5039 0.829687 98.9913 0.23213 98.8978C-0.365425 98.8044 -0.712485 99.1767 -0.577684 99.7667C1.55 110.34 6.30885 121.396 13.0726 131.77C13.1979 132.003 13.2894 132.088 13.381 132.174Z"
                    fill="#F98973"
                  />
                  <path
                    d="M37.8013 153.725C27.0818 151.835 16.0549 147.34 5.76502 140.404C5.76502 140.404 5.67359 140.318 5.58215 140.233C5.21639 139.892 5.02396 139.364 5.16363 139.031C5.26964 138.55 5.98206 138.52 6.49703 138.884"
                    stroke="#6D6BCE"
                  />
                  <path
                    d="M0.605644 144.056C0.97166 144.397 1.60263 144.638 1.98322 144.413C2.36382 144.189 2.43622 143.56 2.03652 143.071C-5.91881 132.515 -11.4991 120.696 -13.7605 109.538C-13.8953 108.948 -14.4443 108.436 -15.0416 108.342C-15.6389 108.249 -15.9858 108.621 -15.8511 109.211C-13.58 120.726 -7.74939 133.011 0.422631 143.885C0.422631 143.885 0.51414 143.97 0.605644 144.056Z"
                    fill="#F98973"
                  />
                </g>
              </svg>

              <svg
                viewBox="0 0 124 305"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.Sidebar_Flower_2}
              >
                <g opacity="0.3">
                  <path
                    d="M91.2116 73.0904C80.646 60.6658 67.0949 42.6275 72.8901 23.9972C73.7902 20.8856 75.0852 17.8136 77.2903 15.0397C79.4955 12.2659 82.7312 10.0088 85.9418 9.40189C90.0195 8.67557 93.3345 10.9714 94.8211 14.0131C96.3077 17.0548 96.2237 20.9716 96.0193 24.6697C94.7388 40.6549 97.1373 58.0886 91.2116 73.0904Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M85.2118 107.84C64.9072 104.521 51.6479 90.2223 47.7656 71.7036C46.874 67.4391 47.1313 61.6118 51.8583 58.4228C54.8613 56.3828 58.6624 56.4203 61.1475 57.669C63.6326 58.9178 65.3022 61.237 66.7679 63.525C75.5433 76.816 80.2366 92.1963 85.2118 107.84Z"
                    fill="#6D6BCE"
                  />
                  <path
                    opacity="0.51"
                    d="M55.1723 78.335C54.7315 77.4042 54.2907 76.4735 54.4923 75.3177C54.547 74.2472 55.391 72.8663 56.529 72.5015C58.1075 71.8806 59.4478 72.7336 60.3842 73.5246C63.3587 76.2467 80.5076 90.3141 74.5616 95.5512C68.7625 100.703 56.8254 81.8252 55.1723 78.335Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M96.9619 92.8406C95.8132 80.0001 97.6512 64.0747 103.366 50.5757C104.482 48.1148 105.598 45.6539 107.623 43.6377C109.648 41.6216 112.582 40.0503 115.087 40.5398C118.159 41.1171 118.862 44.4677 118.982 47.3227C119.307 61.7576 111.394 80.3885 96.9619 92.8406Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M107.712 120.841C110.692 106.499 112.976 91.6159 122.485 78.3767C123.916 76.3273 125.666 74.2285 127.77 72.8747C129.958 71.3365 132.685 70.5718 134.603 71.3603C136.471 72.0424 137.245 74.0362 137.144 75.994C137.043 77.9519 136.168 80.0867 135.242 82.1151C129.317 95.3136 121.008 107.987 107.712 120.841Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M88.7122 134.84C78.8672 137.287 71.1013 135.016 63.0061 131.982C54.911 128.949 48.8661 122.991 46.4092 115.08C45.6138 112.238 45.543 108.253 48.5831 105.901C50.2622 104.488 52.613 104.121 54.5572 104.422C56.5015 104.724 57.8978 105.777 59.3825 106.635C70.6062 114.023 78.0894 125.662 88.7122 134.84Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M117.712 156.84C119.475 143.249 123.763 127.152 133.317 114.462C134.878 112.343 136.675 110.357 138.858 108.825C141.091 107.398 143.895 106.452 145.809 107.238C147.672 107.917 148.529 109.72 148.562 111.593C148.646 113.573 148.041 115.544 147.303 117.594C142.081 131.834 131.396 147.439 117.712 156.84Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M107.712 173.09C88.4608 180.114 70.4492 174.082 59.7534 162.208C57.8181 159.967 56.0384 156.933 57.8359 153.637C59.2876 151.104 62.3809 149.439 65.1977 149.059C68.0145 148.679 70.5028 149.473 72.8011 150.238C86.3142 154.991 95.5815 165.283 107.712 173.09Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M132.306 184.096C136.929 169.038 141.719 153.613 151.601 139.556C153.242 137.262 155.068 134.996 157.563 133.42C160.059 131.844 163.14 131.141 165.117 132.423C167.327 133.84 166.875 137.198 166.038 140.106C161.348 156.819 148.652 173.578 132.306 184.096Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M120.962 203.34C104.921 211.69 89.1792 209.341 77.585 201.596C75.354 200.16 73.3597 197.768 74.6782 195.092C75.5741 193.343 77.501 191.952 79.5124 191.468C81.4731 190.877 83.4168 190.978 85.0901 191.236C99.3384 192.936 107.525 203.353 120.962 203.34Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M142.346 229.877C128.252 239.861 109.96 243.183 97.2652 237.942C94.533 236.845 91.6676 234.756 92.6671 231.51C93.4334 229.2 96.0323 227.17 98.5979 226.494C101.113 225.713 103.579 225.895 106.045 226.078C118.106 227.144 129.968 228.859 142.346 229.877Z"
                    fill="#6D6BCE"
                  />
                  <path
                    opacity="0.51"
                    d="M100.533 237.121C99.4651 236.665 98.2467 235.894 98.6974 234.697C99.1981 233.605 100.5 233.122 101.718 232.822C107.226 231.522 112.451 232.126 117.541 232.808C122.265 233.433 127.689 233.387 132.162 234.558C131.528 235.727 127.506 236.573 126.204 237.055C123.951 237.685 121.831 238.237 119.611 238.579C115.171 239.263 110.932 239.296 106.893 238.678C104.689 238.341 102.436 237.899 100.533 237.121Z"
                    fill="#6D6BCE"
                  />
                  <path
                    d="M175.505 277.283C175.961 277.795 176.783 277.788 177.589 277.325C177.75 277.232 177.75 277.232 177.971 277.261C178.718 276.677 179.009 275.581 178.552 275.069C122.455 209.604 91.2227 126.149 88.5609 33.5684"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M99.4619 117.34C84.8249 109.493 70.6339 97.1709 63.4771 82.8164"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M107.972 65.2615C105.717 77.917 102.89 84.3216 94.9619 96.5895"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M123.157 93.2171C119.51 106.057 111.944 116.837 101.537 128.19"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M103.712 134.59C85.8259 136.73 70.4209 134.089 58.7922 125.172"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M139.551 123.463C133.19 137.246 123.367 150.145 112.712 162.84"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M116.962 172.84C101.873 173.787 91.4919 173.36 79.989 167.617"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M152.607 151C153.34 151.088 153.763 151.618 153.414 152.344C147.652 166.134 138.588 178.971 127.4 191.149"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M136.713 200.19C121.612 203.65 104.648 206.579 91.2659 204.311"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                  <path
                    d="M110.6 236.381C123.557 237.66 137.688 235.753 151.735 230.51C151.735 230.51 151.868 230.433 152 230.357C152.529 230.051 152.917 229.45 152.86 228.982C152.889 228.338 152.077 228.056 151.368 228.34"
                    stroke="#413C7C"
                    strokeWidth="1.43025"
                  />
                </g>
              </svg>

              <div className={s.Sidebar_Header}>
                <Link href={'/'} className={s.Logo}>
                  <BaseIcon
                    viewBox="0 0 71 39"
                    icon={ALL_ICONS.LOGO}
                    className={s.Logo_Icon}
                  />
                  <span className={s.Logo_Label}>Softwarex</span>
                </Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 21"
                  fill="none"
                  className={s.Close}
                  onClick={() => setIsVisibleSidebar(false)}
                >
                  <g opacity="0.7">
                    <path
                      d="M1.56128 18.9395L18.4363 2.06446"
                      stroke="#1F1E58"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1.75 1.5C7.62921 7.37921 12.4875 13.7375 18.25 19.5"
                      stroke="#1F1E58"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>

              <ul className={s.Sidebar_Navbar}>
                {pages?.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className={`${s.Link} ${
                          router.pathname.split('/')[1] ===
                          link.href.split('/')[1]
                            ? s.Link_Active
                            : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className={s.Sidebar_Actions}>
                {!auth ? (
                  <>
                    <BaseButton
                      as="a"
                      href="/sign-up"
                      design="gradientEmpty"
                      className={s.SignUp}
                    >
                      Sign Up
                    </BaseButton>
                    <BaseButton
                      as="a"
                      href="/log-in"
                      design="gradient"
                      className={s.Login}
                    >
                      Log In
                    </BaseButton>
                  </>
                ) : (
                  <>
                    <Link href="/personal-profile" className={s.User}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 73 73"
                        fill="none"
                        className={s.User_Icon}
                      >
                        <circle
                          cx="36.9619"
                          cy="36.3398"
                          r="34"
                          fill="#F98973"
                        />
                        <path
                          d="M9.96191 36.3398C9.96191 39.8855 10.6603 43.3965 12.0172 46.6723C13.374 49.9481 15.3628 52.9245 17.87 55.4317C20.3772 57.9389 23.3537 59.9277 26.6295 61.2846C29.9053 62.6415 33.4162 63.3398 36.9619 63.3398C40.5076 63.3398 44.0186 62.6415 47.2944 61.2846C50.5702 59.9277 53.5466 57.9389 56.0538 55.4317C58.561 52.9245 60.5498 49.9481 61.9067 46.6723C63.2635 43.3965 63.9619 39.8855 63.9619 36.3398C63.9619 32.7942 63.2635 29.2832 61.9067 26.0074C60.5498 22.7316 58.561 19.7551 56.0538 17.248C53.5466 14.7408 50.5702 12.752 47.2944 11.3951C44.0186 10.0382 40.5076 9.33984 36.9619 9.33984C33.4162 9.33984 29.9053 10.0382 26.6295 11.3951C23.3537 12.752 20.3772 14.7408 17.87 17.248C15.3628 19.7551 13.374 22.7316 12.0172 26.0074C10.6603 29.2832 9.96191 32.7942 9.96191 36.3398Z"
                          stroke="white"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.4658 56.8868C20.2083 54.4155 21.7277 52.2494 23.7986 50.7098C25.8694 49.1702 28.3814 48.3391 30.9618 48.3398H42.9618C45.5456 48.339 48.0607 49.172 50.133 50.7152C52.2053 52.2584 53.7242 54.4292 54.4638 56.9048M27.9618 30.3398C27.9618 32.7268 28.91 35.016 30.5979 36.7038C32.2857 38.3916 34.5749 39.3398 36.9618 39.3398C39.3488 39.3398 41.638 38.3916 43.3258 36.7038C45.0136 35.016 45.9618 32.7268 45.9618 30.3398C45.9618 27.9529 45.0136 25.6637 43.3258 23.9759C41.638 22.2881 39.3488 21.3398 36.9618 21.3398C34.5749 21.3398 32.2857 22.2881 30.5979 23.9759C28.91 25.6637 27.9618 27.9529 27.9618 30.3398Z"
                          stroke="white"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <button className={s.Logout} onClick={logout}>
                      <div className={s.Logout_Label}>Log out</div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 45 45"
                        fill="none"
                        className={s.Logout_Icon}
                      >
                        <path
                          d="M28.125 15V13.125C28.125 12.1304 27.7299 11.1766 27.0266 10.4733C26.3234 9.77009 25.3696 9.375 24.375 9.375L9.375 9.375C8.38044 9.375 7.42661 9.77009 6.72335 10.4733C6.02009 11.1766 5.625 12.1304 5.625 13.125V31.875C5.625 32.8696 6.02009 33.8234 6.72335 34.5266C7.42661 35.2299 8.38044 35.625 9.375 35.625H24.375C25.3696 35.625 26.3234 35.2299 27.0266 34.5266C27.7299 33.8234 28.125 32.8696 28.125 31.875V30"
                          stroke="#f98973"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.75 22.5H39.375M39.375 22.5L33.75 16.875M39.375 22.5L33.75 28.125"
                          stroke="#f98973"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Header;
