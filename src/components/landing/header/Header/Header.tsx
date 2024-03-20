import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Logo } from '@content/landing/index';
import { gsap } from 'gsap';

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
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const checkAuth = sessionStorage.getItem('auth');
    if (checkAuth == 'true') {
      setAuth(true);
    }
  }, [auth]);

  const logout = () => {
    sessionStorage.removeItem('auth');
    setAuth(false);
  };

  const refHeader = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(refHeader.current, { y: '-100%' }, { y: '0%' });
  }, []);

  return (
    <div className={`${s.Header}`} ref={refHeader}>
      <BaseContainer className={s.Header_Container} large>
        <Logo className={s.Header_Logo} />

        <ul className={s.Header_Navbar}>
          {pages?.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  data-content={link.name}
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
              <BaseButton
                as="a"
                href="/log-in"
                design="login"
                className={s.Login}
              >
                Log in
              </BaseButton>

              <BaseButton
                as="a"
                href="/sign-up"
                design="signup"
                className={s.SignUp}
              >
                Sign up
              </BaseButton>
            </>
          ) : (
            <>
              <Link href="/personal-profile" className={s.User}>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={s.User_Icon}
                >
                  <defs>
                    <clipPath id="clip6_12581">
                      <rect
                        id="icon/user"
                        width="20.000000"
                        height="20.000000"
                        fill="white"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clip6_12581)">
                    <path
                      id="Vector"
                      d="M10 3.3335C10.8848 3.3335 11.7324 3.68457 12.3574 4.30957C12.9824 4.93506 13.334 5.78271 13.334 6.66699C13.334 7.55078 12.9824 8.39893 12.3574 9.02393C11.7324 9.64893 10.8848 10 10 10C9.11719 10 8.26953 9.64893 7.64453 9.02393C7.01758 8.39893 6.66797 7.55078 6.66797 6.66699C6.66797 5.78271 7.01758 4.93506 7.64453 4.30957C8.26953 3.68457 9.11719 3.3335 10 3.3335ZM10 11.667C13.6836 11.667 16.668 13.1587 16.668 15L16.668 15.667C16.668 16.2192 16.2188 16.667 15.668 16.667L4.33398 16.667C3.78125 16.667 3.33398 16.2192 3.33398 15.667L3.33398 15C3.33398 13.1587 6.31641 11.667 10 11.667Z"
                      fill="#FFFFFF"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </Link>

              <button className={s.Logout} onClick={logout}>
                <div className={s.Logout_Label}>Log out</div>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={s.Logout_Icon}
                >
                  <path
                    d="M12 3C12.2539 3.00049 12.5 3.09766 12.6855 3.27295C12.8711 3.44775 12.9824 3.68701 12.998 3.94141C13.0117 4.1958 12.9297 4.44629 12.7656 4.6416C12.6016 4.8374 12.3691 4.96289 12.1172 4.99316L12 5L7 5C6.75586 5 6.51953 5.08984 6.33594 5.25293C6.15234 5.41553 6.03516 5.63965 6.00781 5.88281L6 6L6 18C6 18.2451 6.08984 18.4814 6.25195 18.6646C6.41602 18.8472 6.64062 18.9644 6.88281 18.9932L7 19L11.5 19C11.7539 19.0005 12 19.0977 12.1855 19.2729C12.3711 19.4478 12.4824 19.687 12.498 19.9414C12.5117 20.1958 12.4297 20.4463 12.2656 20.6416C12.1016 20.8374 11.8691 20.9629 11.6172 20.9932L11.5 21L7 21C6.23438 21 5.49805 20.7075 4.94141 20.1826C4.38477 19.6577 4.05078 18.9399 4.00586 18.1758L4 18L4 6C4 5.23486 4.29297 4.49854 4.81641 3.94189C5.3418 3.38477 6.06055 3.0498 6.82422 3.00488L7 3L12 3ZM17.707 8.46387L20.5352 11.293C20.7227 11.4805 20.8281 11.7349 20.8281 12C20.8281 12.2651 20.7227 12.5195 20.5352 12.707L17.707 15.5361C17.5195 15.7236 17.2656 15.8286 17 15.8286C16.7344 15.8286 16.4805 15.7231 16.293 15.5356C16.1055 15.3477 16 15.0933 16 14.8281C16 14.563 16.1055 14.3086 16.293 14.1211L17.4141 13L12 13C11.7344 13 11.4805 12.8945 11.293 12.707C11.1055 12.5195 11 12.2651 11 12C11 11.7349 11.1055 11.4805 11.293 11.293C11.4805 11.1055 11.7344 11 12 11L17.4141 11L16.293 9.87891C16.1055 9.69141 16 9.43701 16 9.17188C16 8.90674 16.1055 8.65234 16.293 8.46436C16.4805 8.27686 16.7344 8.17139 17 8.17139C17.2656 8.17139 17.5195 8.27637 17.707 8.46387Z"
                    fill="#373737"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <div
          className={`${s.Header_Burder} ${
            isVisibleSidebar ? s.Header_Burder__Active : null
          }`}
          onClick={() => setIsVisibleSidebar(!isVisibleSidebar)}
        >
          <span></span>
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
              <div className={s.Sidebar_Header}>
                <Logo className={s.Logo} />
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
                      href="/log-in"
                      design="login"
                      className={s.Login}
                    >
                      Log in
                    </BaseButton>

                    <BaseButton
                      as="a"
                      href="/sign-up"
                      design="signup"
                      className={s.SignUp}
                    >
                      Sign Up
                    </BaseButton>
                  </>
                ) : (
                  <>
                    <Link href="/personal-profile" className={s.User}>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={s.User_Icon}
                      >
                        <defs>
                          <clipPath id="clip6_12581">
                            <rect
                              id="icon/user"
                              width="20.000000"
                              height="20.000000"
                              fill="white"
                              fillOpacity="0"
                            />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#clip6_12581)">
                          <path
                            id="Vector"
                            d="M10 3.3335C10.8848 3.3335 11.7324 3.68457 12.3574 4.30957C12.9824 4.93506 13.334 5.78271 13.334 6.66699C13.334 7.55078 12.9824 8.39893 12.3574 9.02393C11.7324 9.64893 10.8848 10 10 10C9.11719 10 8.26953 9.64893 7.64453 9.02393C7.01758 8.39893 6.66797 7.55078 6.66797 6.66699C6.66797 5.78271 7.01758 4.93506 7.64453 4.30957C8.26953 3.68457 9.11719 3.3335 10 3.3335ZM10 11.667C13.6836 11.667 16.668 13.1587 16.668 15L16.668 15.667C16.668 16.2192 16.2188 16.667 15.668 16.667L4.33398 16.667C3.78125 16.667 3.33398 16.2192 3.33398 15.667L3.33398 15C3.33398 13.1587 6.31641 11.667 10 11.667Z"
                            fill="#FFFFFF"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </Link>

                    <button className={s.Logout} onClick={logout}>
                      <div className={s.Logout_Label}>Log out</div>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={s.Logout_Icon}
                      >
                        <path
                          d="M12 3C12.2539 3.00049 12.5 3.09766 12.6855 3.27295C12.8711 3.44775 12.9824 3.68701 12.998 3.94141C13.0117 4.1958 12.9297 4.44629 12.7656 4.6416C12.6016 4.8374 12.3691 4.96289 12.1172 4.99316L12 5L7 5C6.75586 5 6.51953 5.08984 6.33594 5.25293C6.15234 5.41553 6.03516 5.63965 6.00781 5.88281L6 6L6 18C6 18.2451 6.08984 18.4814 6.25195 18.6646C6.41602 18.8472 6.64062 18.9644 6.88281 18.9932L7 19L11.5 19C11.7539 19.0005 12 19.0977 12.1855 19.2729C12.3711 19.4478 12.4824 19.687 12.498 19.9414C12.5117 20.1958 12.4297 20.4463 12.2656 20.6416C12.1016 20.8374 11.8691 20.9629 11.6172 20.9932L11.5 21L7 21C6.23438 21 5.49805 20.7075 4.94141 20.1826C4.38477 19.6577 4.05078 18.9399 4.00586 18.1758L4 18L4 6C4 5.23486 4.29297 4.49854 4.81641 3.94189C5.3418 3.38477 6.06055 3.0498 6.82422 3.00488L7 3L12 3ZM17.707 8.46387L20.5352 11.293C20.7227 11.4805 20.8281 11.7349 20.8281 12C20.8281 12.2651 20.7227 12.5195 20.5352 12.707L17.707 15.5361C17.5195 15.7236 17.2656 15.8286 17 15.8286C16.7344 15.8286 16.4805 15.7231 16.293 15.5356C16.1055 15.3477 16 15.0933 16 14.8281C16 14.563 16.1055 14.3086 16.293 14.1211L17.4141 13L12 13C11.7344 13 11.4805 12.8945 11.293 12.707C11.1055 12.5195 11 12.2651 11 12C11 11.7349 11.1055 11.4805 11.293 11.293C11.4805 11.1055 11.7344 11 12 11L17.4141 11L16.293 9.87891C16.1055 9.69141 16 9.43701 16 9.17188C16 8.90674 16.1055 8.65234 16.293 8.46436C16.4805 8.27686 16.7344 8.17139 17 8.17139C17.2656 8.17139 17.5195 8.27637 17.707 8.46387Z"
                          fill="#373737"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
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
