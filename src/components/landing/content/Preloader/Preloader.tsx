import React from 'react';
import s from './Preloader.module.scss';

interface Props {
  className?: string;
}

const Preloader: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${s.Preloader} ${className}`}>
      <div className={s.Preloader_Dot}></div>
      <div className={s.Preloader_Dot}></div>
      <div className={s.Preloader_Dot}></div>
      <div className={s.Preloader_Dot}></div>
      <div className={s.Preloader_Dot}></div>
    </div>
  );
};

export default Preloader;
