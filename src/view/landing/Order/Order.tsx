import React, { useState } from 'react';
import s from './Order.module.scss';
import { useRouter } from 'next/router';
import {
  BaseButton,
  BaseCheckbox,
  BaseContainer,
  BaseIcon,
  BaseInput,
  BaseRadioButton,
  BaseSelect,
  BaseText,
  BaseTextarea,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import { UploadFile } from '@content/landing/index';

interface IFormData {
  fullname: string;
  email: string;
  service: ISelectItem[];
  deliveryTime: ISelectItem[];
  pages: string;
  coupon: string;
  files: File[];
  message: string;
  currency: ISelectItem[];
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
    files: [],
    message: '',
    currency: [
      {
        value: 'USD',
        label: 'USD',
      },
    ],
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

  //radio buttons
  const levels = [
    { id: '1', value: 'A level / O level' },
    { id: '2', value: 'Undergraduate' },
    { id: '3', value: 'Graduate/Masters' },
    { id: '4', value: 'PhD' },
  ];

  const [paymentMethod, setPaymentMethod] = React.useState<string>(
    levels[0].id
  );

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

                <div
                  className={`${s.Tooltip} ${s.Field_Tooltip}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
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
                />
              </div>

              <div className={`${s.Field} ${s.Field_Level}`}>
                <div className={s.Header}>
                  <p>Writer and Editor Level</p>
                </div>

                <div className={s.Body}>
                  {levels?.map((item, index) => {
                    return (
                      <BaseRadioButton
                        key={index}
                        name="bankTransfer"
                        id={item.id}
                        isActive={paymentMethod === item.id}
                        onClick={() => setPaymentMethod(item.id)}
                        className={s.RadionButton}
                      >
                        {item.value}
                      </BaseRadioButton>
                    );
                  })}
                </div>
              </div>

              <div className={s.Field}>
                <UploadFile
                  label="to upload your file (max 20 MB, 1 file)"
                  files={value.files}
                  onChange={(val: any[]) => setNewValue(val, 'files')}
                  className={s.Field_UploadFile}
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
                  required={false}
                />
              </div>
            </div>

            <div className={s.Form_PaperFormat}>
              <div className={s.Label}>Paper format</div>

              <div className={s.Tooltip}>
                <BaseIcon
                  viewBox="0 0 12 12"
                  icon={ALL_ICONS.TOOLTIP}
                  className={s.Tooltip_Icon}
                />

                <div className={s.Tooltip_Content}>
                  <div className={s.PaperFormatItem}>
                    <BaseIcon
                      viewBox="0 0 20 24"
                      icon={ALL_ICONS.STAR}
                      className={s.PaperFormatItem_Icon}
                    />
                    <p className={s.PaperFormatItem_Value}>
                      250 Words Per Page
                    </p>
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
                    <p className={s.PaperFormatItem_Value}>
                      Double Line Spacing
                    </p>
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
                    <p className={s.PaperFormatItem_Value}>
                      Single Line Spacing
                    </p>
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
                    <p className={s.PaperFormatItem_Value}>
                      Properly Referenced
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.Form_Price}>
              <div className={s.Price}>
                <div className={s.Price_Label}>
                  <span>Total price:</span>
                </div>

                <div className={s.Price_Value}>
                  &nbsp;0&nbsp;{value.currency[0].value}
                </div>
              </div>

              <BaseSelect
                name="currency"
                value={value.currency}
                placeholder="Currency"
                options={[
                  { value: 'USD', label: 'USD' },
                  { value: 'EUR', label: 'EUR' },
                  { value: 'RUB', label: 'RUB' },
                ]}
                onChange={(val: ISelectItem[] | ISelectItem) =>
                  setNewValue(val, 'currency')
                }
                onClear={() => {}}
                onBlur={() => {}}
                type="currency"
                className={s.Select}
              />
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

          <svg
            viewBox="0 0 992 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.Image}
          >
            <path
              d="M1 3.41157C57.36 42.6736 122.544 84.0653 194.849 81.2747C260.144 78.7546 331.771 48.1902 392.5 28.5669C467.688 4.27145 575.443 -27.3366 627 49.4632C660.924 109.514 630.882 219.687 550.862 200.144C520.013 192.61 504.072 156.846 517.736 132.035C532.495 105.237 576.615 92.3177 607.128 86.1352C689.074 69.531 743.668 136.191 817.819 147.899C887.096 158.837 938.541 131.888 991 95.4421"
              stroke="#424242"
              strokeLinecap="round"
              strokeDasharray="14 14"
            />
          </svg>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Order;
