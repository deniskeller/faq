import React from 'react';
import s from './About.module.scss';
import { Header } from 'components/landing/pages/about';

const About: React.FC = () => {
  return (
    <div className={s.About}>
      <Header />
    </div>
  );
};

export default About;
