import React from 'react';
import s from './ContactForm.module.scss';
import {
  BaseButton,
  BaseCheckbox,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseTextarea,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';

interface IFormData {
  fullname: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialState = {
    fullname: 'Quentin Tarantino',
    phone: '',
    email: '',
    topic: '',
    message: 'sdfdsfsdfsdfs',
  };

  const [value, setValue] = React.useState<IFormData>(initialState);

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  //checkbox
  const [checked, setChecked] = React.useState<any>(false);

  return (
    <section>
      <BaseContainer className={s.ContactForm_Container}>
        <div className={s.ContactForm}>
          <div className={s.Header}>
            <h2>Contact Us</h2>
          </div>

          <div className={s.ContactForm_Info}>
            <div className={s.Description}>
              <p>
                We are more than happy to help you with anything you need, so
                feel free to contact us right now!
              </p>
            </div>

            <div className={s.Contacts}>
              <div className={s.Contacts_Phone}>
                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.PHONE}
                  className={s.Icon}
                />

                <div className={s.Value}>+442045772593</div>
              </div>

              <div className={s.Contacts_Email}>
                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.EMAIL}
                  className={s.Icon}
                />

                <div className={s.Value}>support@faqsolution.uk</div>
              </div>

              <div className={s.Contacts_Address}>
                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.MAP_MARKER}
                  className={s.Icon}
                />

                <div className={s.Value}>
                  86-90 Paul Street, London, England, EC2A 4NE
                </div>
              </div>
            </div>
          </div>

          <form className={s.ContactForm_Form}>
            <BaseInput
              name="fullname"
              placeholder="Full name"
              label="Full name"
              value={value.fullname}
              onChange={(val: string) => setNewValue(val, 'fullname')}
              disabled
            />

            <BaseInput
              type="phone"
              name="phone"
              placeholder="Phone number"
              label="Phone number"
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              // error="Some text"
            />

            <BaseInput
              type="email"
              name="email"
              placeholder="Email adress"
              label="Email adress"
              value={value.email}
              onChange={(val: string) => setNewValue(val, 'email')}
              required={false}
            />

            <BaseInput
              name="topic"
              placeholder="Topic"
              label="Topic"
              value={value.topic}
              onChange={(val: string) => setNewValue(val, 'topic')}
              required={false}
              disabled
            />

            <BaseTextarea
              name="message"
              placeholder="Message"
              label="Message"
              value={value.message}
              onChange={(val: string) => setNewValue(val, 'message')}
              className={s.Message}
            />

            <BaseCheckbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              className={s.Checkbox}
              // error
            >
              I have read and agree with the&nbsp;
              <Link href={'/terms-and-conditions'}>terms and conditions</Link>
              &nbsp; and&nbsp;
              <Link href={'/privacy-policy'}>privacy policy</Link>
            </BaseCheckbox>

            <BaseButton as="button" className={s.Button}>
              Submit
            </BaseButton>
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default ContactForm;
