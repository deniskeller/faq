import React from 'react';
import s from './PersonalProfile.module.scss';
import {
  Header,
  OrdersHistory,
  PersonalDetails,
} from 'components/landing/pages/personalProfile';

const PersonalProfile: React.FC = () => {
  return (
    <div className={s.PersonalProfile}>
      <Header />
      <OrdersHistory />
      <PersonalDetails />
    </div>
  );
};

export default PersonalProfile;
