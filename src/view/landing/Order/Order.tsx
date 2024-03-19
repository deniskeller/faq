import React, { useState } from 'react';
import s from './Order.module.scss';
import { useRouter } from 'next/router';
import {
  BaseButton,
  BaseCheckbox,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseSelect,
  BaseText,
  BaseTextarea,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';

interface IFormData {
  fullname: string;
  email: string;
  service: ISelectItem[];
  deliveryTime: ISelectItem[];
  pages: string;
  coupon: string;
  level: string;
  files: File[];
  message: string;
}

interface ISelectItem {
  label: string;
  value: string;
}

const Order: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const initialState = {
    fullname: '',
    email: '',
    service: [],
    deliveryTime: [],
    pages: '',
    coupon: '',
    level: 'A level / O level',
    files: [],
    message: '',
  };

  const [value, setValue] = useState<IFormData>(initialState);

  const setNewValue = (
    value: ISelectItem | ISelectItem[] | string | number,
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState(false);
  //checkbox
  const [checked, setChecked] = useState<boolean>(false);

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
          <div className={s.Info}>
            <div className={s.Info_Title}>
              <h2>Contact Us</h2>
            </div>

            <div className={s.Info_Description}>
              <p>
                We are more than happy to help you with anything you need, so
                feel free to contact us right now!
              </p>
            </div>

            <div className={s.Info_Contacts}>
              <div className={s.ContactItem}>
                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.PHONE}
                  className={s.Icon}
                />

                <div className={s.Value}>+442045772593</div>
              </div>

              <div className={s.ContactItem}>
                <BaseIcon
                  viewBox="0 0 24 24"
                  icon={ALL_ICONS.EMAIL}
                  className={s.Icon}
                />

                <div className={s.Value}>support@faqsolution.uk</div>
              </div>

              <div className={s.ContactItem}>
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

            <div className={s.Info_PaperFormat}>
              <div className={s.Header}>
                <span>Paper format</span>
              </div>

              <div className={s.Body}>
                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>250 Words Per Page</p>

                  <div className={`${s.Tooltip} ${s.PaperFormatItem_Tooltip}`}>
                    <BaseIcon
                      viewBox="0 0 12 12"
                      icon={ALL_ICONS.TOOLTIP}
                      className={s.Tooltip_Icon}
                    />

                    <div className={s.Tooltip_Content}>
                      <p>Excluding references</p>
                    </div>
                  </div>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>MS Word Document</p>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>
                    Font Arial, Times New Roman
                  </p>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>Double Line Spacing</p>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>Font Size 12</p>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>Single Line Spacing</p>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>
                    1 Inch Margin Indent
                  </p>
                </div>

                <div className={s.PaperFormatItem}>
                  <BaseIcon
                    viewBox="0 0 20 24"
                    icon={ALL_ICONS.STAR}
                    className={s.PaperFormatItem_Icon}
                  />
                  <p className={s.PaperFormatItem_Value}>Properly Referenced</p>
                </div>
              </div>
            </div>
          </div>

          <form className={s.Form} autoComplete="off">
            <div className={s.Form_Fields}>
              <div className={s.Field}>
                <BaseInput
                  name="fullname"
                  placeholder="Full name"
                  label="Full name"
                  value={value.fullname}
                  onChange={(val: string) => setNewValue(val, 'fullname')}
                  error={error}
                />
              </div>

              <div className={s.Field}>
                <BaseInput
                  name="email"
                  placeholder="Email address"
                  label="Email address"
                  value={value.email}
                  onChange={(val: string) => setNewValue(val, 'email')}
                  error={error}
                />
              </div>

              <div className={s.Field}>
                <BaseSelect
                  name="service"
                  value={value.service}
                  placeholder="Service"
                  options={[
                    { value: 'Essay', label: 'Essay' },
                    { value: 'Assigment', label: 'Assigment' },
                    { value: 'Term paper', label: 'Term paper' },
                    { value: 'Lab report', label: 'Lab report' },
                    { value: 'Book review', label: 'Book review' },
                    { value: 'Editing', label: 'Editing' },
                    { value: 'Presentations', label: 'Presentations' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'service')
                  }
                  onClear={() => {}}
                  onBlur={() => {}}
                  withLabel
                  error={error}
                />
              </div>

              <div className={s.Field}>
                <BaseSelect
                  name="deliveryTime"
                  value={value.deliveryTime}
                  placeholder="Delivery time"
                  options={[
                    { value: '24 hours', label: '24 hours' },
                    { value: '2 days', label: '2 days' },
                    { value: '3 days', label: '3 days' },
                    { value: '4 to 5 days', label: '4 to 5 days' },
                    { value: '6-9 days', label: '6-9 days' },
                    { value: '11 to 15 days', label: '11 to 15 days' },
                    { value: '15+ days', label: '15+ days' },
                  ]}
                  onChange={(val: ISelectItem[] | ISelectItem) =>
                    setNewValue(val, 'deliveryTime')
                  }
                  onClear={() => {}}
                  onBlur={() => {}}
                  withLabel
                  error={error}
                />
              </div>

              <div className={s.Field}>
                <BaseInput
                  type="number"
                  name="email"
                  placeholder="Pages"
                  label="Pages"
                  value={value.pages}
                  onChange={(val: string) => setNewValue(val, 'pages')}
                  error={error}
                  withIcon
                />

                <div className={`${s.Tooltip} ${s.Field_Tooltip}`}>
                  <BaseIcon
                    viewBox="0 0 12 12"
                    icon={ALL_ICONS.TOOLTIP}
                    className={s.Tooltip_Icon}
                  />

                  <div className={s.Tooltip_Content}>
                    <p>min. 1 page</p>
                    <p>max. 100 pages</p>
                  </div>
                </div>
              </div>

              <div className={s.Field}>
                <BaseInput
                  name="coupon"
                  placeholder="Coupon"
                  label="Coupon"
                  value={value.coupon}
                  onChange={(val: string) => setNewValue(val, 'coupon')}
                  required={false}
                  error={error}
                />
              </div>

              <div className={s.Field}>
                <BaseInput
                  name="email"
                  placeholder="тут будут радиобатоны"
                  label="тут будут радиобатоны"
                  value={value.email}
                  onChange={(val: string) => setNewValue(val, 'email')}
                  error={error}
                />
              </div>

              <div className={s.Field}>
                <BaseInput
                  name="email"
                  placeholder="тут будет инпут файл"
                  label="тут будет инпут файл"
                  value={value.email}
                  onChange={(val: string) => setNewValue(val, 'email')}
                  error={error}
                />
              </div>

              <div className={`${s.Field} ${s.Field_Message}`}>
                <BaseTextarea
                  name="message"
                  placeholder="Message"
                  label="Message"
                  value={value.message}
                  onChange={(val: string) => setNewValue(val, 'message')}
                  className={s.Message}
                  error={error}
                  required={false}
                />
              </div>
            </div>

            <div className={s.Form_Price}>
              <div className={s.Price}>
                <div className={s.Price_Label}>
                  <span>Total price:</span>
                </div>

                <div className={s.Price_Value}>&nbsp;0&nbsp;USD</div>
              </div>

              <div className={s.Select}>Тут будет селект</div>
            </div>

            <BaseCheckbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              className={s.Form_Confirm}
              error={error}
            >
              I have read and agree with the&nbsp;
              <Link href={'/terms-and-conditions'}>terms and conditions</Link>
              &nbsp; and&nbsp;
              <Link href={'/privacy-policy'}>privacy policy</Link>
            </BaseCheckbox>

            <BaseButton
              type="submit"
              className={s.Form_Button}
              onClick={submitHandler}
            >
              Proceed to checkout
            </BaseButton>
          </form>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Order;
