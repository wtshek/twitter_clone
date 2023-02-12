import { FC, useEffect, useState } from "react";
import cx from "classnames";
import { Avatar } from "##/components/Avatar";
import { TwitterLogo } from "##/icons/Twitter-logo";
import { DEFAULT_AVATAR_URL } from "##/constants";

const IMAGE_HEIGHT = 32;
const IMAGE_WIDTH = 32;

type HeaderTabProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const HeaderTab: FC<HeaderTabProps> = ({ label, onClick, isSelected }) => {
  return (
    <button
      className={cx(`relative text-base text-white font-bold w-1/2 h-[53px]`, {
        "text-dark-grey": !isSelected,
      })}
      onClick={onClick}
    >
      <div className="inline-flex flex-col justify-around h-full">
        <span>{label}</span>

        <span
          className={cx(`h-1 bg-main w-full rounded-full`, {
            "opacity-0": !isSelected,
          })}
        ></span>
      </div>
    </button>
  );
};

type HeaderProps = {
  handleOpenSideMenu: () => void;
  avatarSrc?: string;
  className?: string;
};

enum TABS {
  FOR_YOU = "for-you",
  FOLLOWING = "following",
}
const SCROLL_Y = 200;

export const Header: FC<HeaderProps> = ({
  avatarSrc,
  handleOpenSideMenu,
  className,
}) => {
  const [selectedTab, setSelectedTab] = useState<TABS>(TABS.FOR_YOU);
  const [shouldTransit, setShouldTransit] = useState(false);

  const tabs = [
    {
      label: "For You",
      onClick: () => {
        setSelectedTab(TABS.FOR_YOU);
      },
      id: "for-you",
    },
    {
      label: "Following",
      onClick: () => {
        setSelectedTab(TABS.FOLLOWING);
      },
      id: "following",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      if (window.scrollY > SCROLL_Y) {
        setShouldTransit(true);
      } else {
        setShouldTransit(false);
      }
    });
  }, []);

  return (
    <div
      className={cx(
        "fixed w-full pt-5 px-4 bg-transparent-background backdrop-blur-md duration-200 border-b-[1px] border-dark-border",
        shouldTransit ? "-translate-y-[46px]" : "translate-y-0"
      )}
    >
      <div className="relative flex justify-center items-center mb-4">
        <button className="absolute left-4" onClick={handleOpenSideMenu}>
          <Avatar
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            src={avatarSrc || DEFAULT_AVATAR_URL}
          />
        </button>
        <TwitterLogo className="w-23px" />
      </div>
      <div className="flex">
        {tabs.map(({ label, id, onClick }) => (
          <HeaderTab
            label={label}
            key={id}
            onClick={onClick}
            isSelected={id === selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
