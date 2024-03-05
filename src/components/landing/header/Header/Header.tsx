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

  return (
    <div className={`${s.Header}`}>
      <BaseContainer className={s.Header_Container}>
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
                <Link href={'/'} className={s.Logo}>
                  <BaseIcon
                    viewBox="0 0 71 39"
                    icon={ALL_ICONS.LOGO}
                    className={s.Logo_Icon}
                  />
                  <span className={s.Logo_Label}>Softwarex</span>
                </Link>
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
