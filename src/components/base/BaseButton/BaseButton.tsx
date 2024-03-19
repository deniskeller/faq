import React, {
  ComponentProps,
  ElementType,
  MutableRefObject,
  ReactNode,
  forwardRef,
} from 'react';
import s from './BaseButton.module.scss';

type OwnProps<E extends ElementType = ElementType> = {
  children: string | ReactNode | ReactNode[];
  design?: string;
  // ref?: MutableRefObject<null>;
  disabled?: boolean;
  className?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  as?: E;
};

type Props<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>;

const defaultElement = 'button';

function BaseButton<E extends ElementType = typeof defaultElement>(
  {
    children,
    disabled = false,
    design = 'primary',
    className = '',
    // ref,
    onClick,
    as,
    ...otherProps
  }: Props<E>,
  ref: React.ForwardedRef<MutableRefObject<null>>
) {
  const TagName = as || defaultElement;

  return (
    <TagName
      onClick={onClick}
      disabled={disabled}
      className={`${s.Button} ${s['Button_' + design]} ${className}`}
      ref={ref}
      {...otherProps}
    >
      <span>{children}</span>
    </TagName>
  );
}
export default forwardRef(BaseButton);
