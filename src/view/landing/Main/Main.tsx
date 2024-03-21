import React from 'react';
import s from './Main.module.scss';
import {
  Advantages,
  Categories,
  Header,
  HowWorks,
  HowWorks2,
  Questions,
  TypesOfJobs,
} from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      {/* <Header />
      <Advantages />
      <TypesOfJobs /> */}
      <Categories />
      {/* <HowWorks /> */}
      <HowWorks2 />
      <Questions />
    </div>
  );
};

export default Main;
