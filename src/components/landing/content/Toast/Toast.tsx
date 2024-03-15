import React from 'react';
import s from './Toast.module.scss';

interface Props {
  title?: string;
  text?: string;
}

const Toast: React.FC<Props> = ({
  title = 'Request has been sent',
  text = 'We will reach you as soon as possible.',
}) => {
  return (
    <div className={s.Toast}>
      <p className={s.Toast_Title}>{title}</p>
      <p className={s.Toast_Text}>{text}</p>
    </div>
  );
};

export default Toast;
