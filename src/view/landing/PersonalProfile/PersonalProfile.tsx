import React from 'react';
import s from './PersonalProfile.module.scss';
import { Header } from 'components/landing/pages/personalProfile';

const PersonalProfile: React.FC = () => {
  return (
    <div className={s.PersonalProfile}>
      <Header />
    </div>
  );
};

export default PersonalProfile;
