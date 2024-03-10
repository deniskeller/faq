import React, { ReactNode } from 'react';
import s from './BaseContainer.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  large?: boolean;
}

const BaseContainer: React.FC<Props> = ({
  children,
  className = '',
  large = false,
}) => {
  return (
    <div
      className={`${s.BaseContainer} ${
        large ? s.BaseContainer__Large : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default BaseContainer;
