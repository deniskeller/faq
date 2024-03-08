import React from 'react';
import s from './Main.module.scss';
import { Header } from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
    </div>
  );
};

export default Main;
