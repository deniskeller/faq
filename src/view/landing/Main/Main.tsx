import React from 'react';
import s from './Main.module.scss';
import { Advantages, Header } from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
      <Advantages />
    </div>
  );
};

export default Main;
