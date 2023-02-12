import { FC } from "react";
import cx from "classnames";

type AvatarProps = {
  src: string;
  height: number;
  width: number;
  className?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, className, height, width }) => {
  return (
    <div className={cx(className, "rounded-full object-cover")}>
      <img src={src} alt="avatar" height={height} width={width} />
    </div>
  );
};

export default Avatar;
