import React from 'react';
import s from './Main.module.scss';
import {
  Advantages,
  Categories,
  Header,
  HowWorks,
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
      <HowWorks />
      <Questions />
    </div>
  );
};

export default Main;
