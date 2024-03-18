import React, { useState } from 'react';
import s from './PersonalDetails.module.scss';
import {
  BaseButton,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseInputPhone,
} from '@base/index';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

interface IFormData {
  fullName: string;
  email: string;
  phone: string;
}

const PersonalDetails: React.FC = () => {
  //ФОРМА
  const [value, setValue] = useState<IFormData>({
    fullName: 'Quentin Tarantino',
    email: 'Quentin@gmail.com',
    phone: '',
  });

  const [error, setError] = useState('');

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.fullName != '') {
    } else {
    }
  };

  // изменение данных
  const [fullNameEdit, setfullNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);

  return (
    <section className={s.PersonalDetails}>
      <BaseContainer className={s.PersonalDetails_Container}>
        <div className={s.PersonalDetails_Content}>
          <div className={s.PersonalDetails_Title}>
            <h2>Personal details</h2>
          </div>

          <div className={s.PersonalDetails_Subtitle}>
            <p>Wiev and edit your data</p>
          </div>

          <form className={s.PersonalDetails_Form} autoComplete="off">
            <div className={s.Fields}>
              <div className={s.Fields_Input}>
                <BaseInput
                  name="fullName"
                  placeholder="Full name"
                  label="Full name"
                  value={value.fullName}
                  onChange={(val: string) => setNewValue(val, 'fullName')}
                  error={error}
                  disabled={!fullNameEdit}
                  withIcon
                />

                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.EDIT}
                  className={s.IconEdit}
                  onClick={() => setfullNameEdit(!fullNameEdit)}
                />
              </div>

              <div className={s.Fields_Input}>
                <BaseInput
                  name="email"
                  placeholder="Email address"
                  label="Email address"
                  value={value.email}
                  onChange={(val: string) => setNewValue(val, 'email')}
                  error={error}
                  disabled={!emailEdit}
                  withIcon
                />

                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.EDIT}
                  className={s.IconEdit}
                  onClick={() => setEmailEdit(!emailEdit)}
                />
              </div>

              <div className={s.Fields_Input}>
                <BaseInputPhone
                  country="us"
                  value={value.phone}
                  onChange={(val: string) => setNewValue(val, 'phone')}
                />
              </div>
            </div>

            <BaseButton
              type="submit"
              className={s.Button}
              onClick={submitHandler}
            >
              Save data
            </BaseButton>
          </form>

          <Image
            src="/pictures/images/personal-profile-details.webp"
            width={908}
            height={756}
            alt=""
            className={s.PersonalDetails_Image}
          />
        </div>
      </BaseContainer>
    </section>
  );
};

export default PersonalDetails;
