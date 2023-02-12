import { FC } from "react";
import cx from "classnames";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export const ThemedText: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cx("text-white", className)} {...rest}>
      {children}
    </div>
  );
};

export const ThemedTextSpan: FC<TextProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span className={cx("text-white", className)} {...rest}>
      {children}
    </span>
  );
};

export const GreyText: FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cx("text-dark-grey", className)} {...rest}>
      {children}
    </div>
  );
};

export const GreyTextSpan: FC<TextProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span className={cx("text-dark-grey", className)} {...rest}>
      {children}
    </span>
  );
};
