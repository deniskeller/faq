import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';

interface Props {
  className?: string;
  footer?: boolean;
}

const Logo: React.FC<Props> = ({ className = '', footer = false }) => {
  return (
    <Link href={'/'} className={`${className}`}>
      <svg
        viewBox="0 0 107 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${s.Logo} ${footer ? s.Logo_Footer : ''}`}
      >
        <defs>
          <clipPath id="clip6_8953">
            <rect
              id="logo"
              width="107.000000"
              height="48.000000"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
        <rect
          id="logo"
          width="107.000000"
          height="48.000000"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        {/* clip-path="url(#clip6_8953)" */}
        <g>
          <path
            id="Vector"
            d="M14.8555 46.9102L15.0898 46.4512C15.4961 46.8477 16.2285 47.1367 16.9785 47.1367C18.0469 47.1367 18.5176 46.6895 18.5176 46.1348C18.5176 44.584 14.9922 45.5352 14.9922 43.4414C14.9922 42.6094 15.6445 41.8906 17.1035 41.8906C17.75 41.8906 18.4199 42.0781 18.877 42.3945L18.6719 42.8691C18.1797 42.5527 17.6074 42.4004 17.1035 42.4004C16.0566 42.4004 15.5938 42.8574 15.5938 43.4238C15.5938 44.9746 19.1172 44.0352 19.1172 46.0996C19.1172 46.9316 18.4473 47.6445 16.9844 47.6445C16.125 47.6445 15.2852 47.3457 14.8613 46.9102L14.8555 46.9102Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M24.8281 44.7656C24.8281 43.1191 26.1035 41.8906 27.8379 41.8906C29.5703 41.8906 30.834 43.1133 30.834 44.7656C30.834 46.418 29.5527 47.6387 27.8379 47.6387C26.1211 47.6387 24.8281 46.4121 24.8281 44.7656ZM30.2285 44.7656C30.2285 43.418 29.2051 42.4219 27.8379 42.4219C26.4707 42.4219 25.4297 43.418 25.4297 44.7656C25.4297 46.1113 26.459 47.1074 27.8379 47.1074C29.2168 47.1074 30.2285 46.1113 30.2285 44.7656Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M37.0938 41.8965L37.6992 41.8965L37.6992 47.0332L40.9043 47.0332L40.9043 47.5488L37.0938 47.5488L37.0938 41.8906L37.0938 41.8965Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M46.6504 45.1328L46.6504 41.8906L47.2559 41.8906L47.2559 45.1055C47.2559 46.4453 47.8926 47.0625 49.0078 47.0625C50.123 47.0625 50.7637 46.4512 50.7637 45.1055L50.7637 41.8906L51.3535 41.8906L51.3535 45.1328C51.3535 46.7559 50.4727 47.5996 49.0078 47.5996C47.543 47.5996 46.6562 46.7559 46.6562 45.1328L46.6504 45.1328Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M59.0781 42.4062L57.0703 42.4062L57.0703 41.8906L61.6934 41.8906L61.6934 42.4062L59.6855 42.4062L59.6855 47.543L59.0781 47.543L59.0781 42.4062Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M67.5605 41.8906L68.166 41.8906L68.166 47.5488L67.5605 47.5488L67.5605 41.8906Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M74.4258 44.7656C74.4258 43.1191 75.7012 41.8906 77.4355 41.8906C79.168 41.8906 80.4316 43.1133 80.4316 44.7656C80.4316 46.418 79.1504 47.6387 77.4355 47.6387C75.7188 47.6387 74.4258 46.4121 74.4258 44.7656ZM79.8262 44.7656C79.8262 43.418 78.8027 42.4219 77.4355 42.4219C76.0684 42.4219 75.0273 43.418 75.0273 44.7656C75.0273 46.1113 76.0566 47.1074 77.4355 47.1074C78.8145 47.1074 79.8262 46.1113 79.8262 44.7656Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M91.4668 41.8906L91.4668 47.5488L90.9688 47.5488L87.2891 42.9609L87.2891 47.5488L86.6836 47.5488L86.6836 41.8906L87.1816 41.8906L90.8652 46.4805L90.8652 41.8906L91.4609 41.8906L91.4668 41.8906Z"
            fill="#373737"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M0 0.916016L23.7246 0.916016L23.7246 10.1445L12.8438 10.1445L12.8438 13.166L23.7246 13.166L23.7246 22.0723L12.8438 22.0723L12.8438 33.5312L0 33.5312L0 0.916016Z"
            fill="#7656F5"
            fillOpacity="1.000000"
            fillRule="nonzero"
            className={`${s.Logo__F}`}
          />
          <path
            id="Vector"
            d="M25.457 33.5371L41.8535 2.57422C42.418 1.4707 43.4551 0.734375 44.9707 0.367188C45.4102 0.259766 45.9551 0.203125 46.6016 0.203125C47.248 0.203125 47.9512 0.384766 48.7168 0.746094C49.4844 1.10938 50.084 1.67383 50.5254 2.44922L68.1172 33.5371L51.3711 33.5371L50.0723 30.3105L41.1543 30.3105L40.0391 33.5371L25.4629 33.5371L25.457 33.5371ZM42.1621 23.832L48.832 23.832L45.6738 15.0117L42.1621 23.832Z"
            fill="#7656F5"
            fillOpacity="1.000000"
            fillRule="nonzero"
            className={`${s.Logo__A}`}
          />
          <path
            id="Vector"
            d="M106.92 25.2031C106.977 27.2734 107 30.2715 107 34.2109C106.365 34.2891 105.734 34.334 105.1 34.334C102.182 34.334 99.2422 33.3848 96.2852 31.4766C93.1602 33.3848 89.6094 34.334 85.6328 34.334C82.4922 34.334 79.5234 33.6172 76.7188 32.1797C73.916 30.7422 71.6504 28.7168 69.9238 26.0898C68.1953 23.4707 67.332 20.4824 67.332 17.1211C67.332 13.7617 68.1562 10.7969 69.8086 8.20508C71.4629 5.61914 73.6758 3.60352 76.457 2.16211C79.2363 0.71875 82.291 -0.00585938 85.627 -0.00585938C90.9707 -0.00585938 95.3984 1.52148 98.9277 4.57227C102.531 7.70117 104.34 12.1152 104.34 17.8066C104.34 19.9844 103.824 22.1758 102.789 24.3809C104.441 24.9258 105.814 25.1973 106.92 25.1973L106.92 25.2031ZM89.8652 18.2754C90.8555 16.3125 91.3535 14.582 91.3652 13.0703C91.3711 11.5605 90.7695 10.5703 89.5566 10.1113C89.1445 9.94727 88.6582 9.86719 88.1035 9.86719C87.5488 9.86719 86.9883 10.0312 86.4336 10.3594C85.8789 10.6875 85.3301 11.125 84.791 11.668C83.6934 12.7812 82.7441 14.1738 81.9434 15.8438C81.1426 17.5117 80.748 19.0059 80.748 20.3242C80.748 22.582 81.9023 23.7148 84.2129 23.7148C84.9395 23.7148 85.7422 23.3398 86.6113 22.5938C86.1016 22.0215 85.5977 21.4453 85.1055 20.8574C84.6094 20.2734 84.1172 19.6855 83.6191 19.1016L85.8672 15.7754C86.9941 16.5391 88.332 17.377 89.8711 18.2871L89.8652 18.2754Z"
            fill="#7656F5"
            fillOpacity="1.000000"
            fillRule="nonzero"
            className={`${s.Logo__Q}`}
          />
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
