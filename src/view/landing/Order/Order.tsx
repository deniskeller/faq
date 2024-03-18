import React, { useState } from 'react';
import s from './Order.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import Link from 'next/link';
import { ToMainPage } from '@content/landing/index';
import Image from 'next/image';

interface IFormData {
  email: string;
  password: string;
}

const Order: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    email: '',
    password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState(false);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.email != '') {
      router.push('/');
    } else {
      setError(true);
    }
  };

  return (
    <section className={s.Order}>
      <BaseContainer className={s.Order_Container}>
        <BaseText className={s.Order_Title}>
          Place an&nbsp;
          <span>order</span>
        </BaseText>

        <BaseText as="p" className={s.Order_Subtitle}>
          Complete the form below, and our Coursepal managers will reach out to
          you via email to confirm the order and provide an invoice. If you need
          any additional services, please leave a comment in the message field.
        </BaseText>

        <div className={s.Order_Content}>
          {/* <form className={s.Form} autoComplete="off">
            <div className={s.Form_Fields}>
              <BaseInput
                name="email"
                placeholder="Email address"
                label="Email address"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                error={error}
              />

              <BaseInput
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                value={value.password}
                onChange={(val: string) => setNewValue(val, 'password')}
                withIcon
                error={error}
                autocomplete="new-password"
              />
            </div>

            <BaseButton
              type="submit"
              className={s.Form_Button}
              onClick={submitHandler}
            >
              Proceed to checkout
            </BaseButton>
          </form> */}
        </div>
      </BaseContainer>
    </section>
  );
};

export default Order;
