import { useRouter } from 'next/router';
import React from 'react';
import s from './Landing.module.scss';
import { Header } from 'components/landing/header';
import { Footer } from 'components/landing/footer';
import { BaseToast } from '@base/index';

const pages = [
  {
    name: 'Order',
    href: '/order',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'How we work',
    href: '/how-we-work',
  },
  {
    name: 'About & Contacts',
    href: '/about-and-contacts',
  },
];

interface Props {
  children: JSX.Element;
  footer?: boolean;
}

const Landing: React.FC<Props> = ({ children, footer = true }) => {
  const router = useRouter();

  return (
    <>
      <div className={s.Landing}>
        <Header pages={pages} />

        <div className={s.Content}>{children}</div>

        {footer ? <Footer /> : null}
      </div>

      <BaseToast />
    </>
  );
};

export default Landing;
