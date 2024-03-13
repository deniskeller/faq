import React from 'react';
import s from './ContactForm.module.scss';
import { BaseContainer, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface IFormData {
  fullname: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialState = {
    fullname: '',
    phone: '',
    email: '',
    topic: '',
    message: '',
  };

  const [value, setValue] = React.useState<IFormData>(initialState);

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

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
            />

            <BaseInput
              type="phone"
              name="phone"
              placeholder="Phone number"
              label="Phone number"
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
            />

            <BaseInput
              type="email"
              name="email"
              placeholder="Email adress"
              label="Email adress"
              value={value.email}
              onChange={(val: string) => setNewValue(val, 'email')}
            />

            <BaseInput
              name="topic"
              placeholder="Topic"
              label="Topic"
              value={value.topic}
              onChange={(val: string) => setNewValue(val, 'topic')}
            />

            <BaseInput
              name="message"
              placeholder="Message"
              label="Message"
              value={value.message}
              onChange={(val: string) => setNewValue(val, 'message')}
              className={s.Message}
            />
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default ContactForm;
