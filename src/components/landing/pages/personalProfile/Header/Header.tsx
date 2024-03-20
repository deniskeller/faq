import React from 'react';
import s from './Header.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <BaseContainer className={s.Header_Container}>
        <BaseText className={s.Header_Title}>
          My&nbsp;<span>account</span>
        </BaseText>

        <BaseText className={s.Header_Description} as="p">
          From your account dashboard you can view your recent orders and edit
          some of your account details.
        </BaseText>

        <div className={s.Header_Orders}>
          <div className={s.OrderItem}>
            <div className={s.OrderItem_Value}>
              <span>5</span>
            </div>

            <div className={s.OrderItem_Label}>Active orders</div>
          </div>

          <div className={s.OrderItem}>
            <div className={s.OrderItem_Value}>
              <span>5</span>
            </div>

            <div className={s.OrderItem_Label}>Completed orders</div>
          </div>

          <div className={s.OrderItem}>
            <div className={s.OrderItem_Value}>
              <span>10</span>
            </div>

            <div className={s.OrderItem_Label}>Orders total</div>
          </div>
        </div>

        <Image
          src="/pictures/images/personal-profile-header.webp"
          width={961}
          height={722}
          alt=""
          priority
          quality={100}
          className={s.Header_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
