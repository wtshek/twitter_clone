import { FC, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookmark,
  faList,
  faTh,
  faWrench,
  faQuestionCircle,
  faSignOutAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { ThemedText, ThemedTextSpan } from "##/components/Text/Text";

interface MenuItem {
  name: string;
  icon: any;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Profile",
    icon: faUser,
    href: "#",
  },
  {
    name: "Topics",
    icon: faBookmark,
    href: "#",
  },
  {
    name: "Bookmarks",
    icon: faList,
    href: "#",
  },
  {
    name: "Lists",
    icon: faTh,
    href: "#",
  },
  {
    name: "Twitter Circle",
    icon: faTh,
    href: "#",
  },
];

const expandableMenuItems: MenuItem[][] = [
  [
    {
      name: "Analytics",
      icon: faTh,
      href: "#",
    },
  ],
  [
    { name: "Twitter for Professionals", icon: faWrench, href: "#" },
    { name: "Twitter Ads", icon: faWrench, href: "#" },
    { name: "Monetization", icon: faWrench, href: "#" },
  ],
  [
    { name: "Settings and privacy", icon: faWrench, href: "#" },
    { name: "Help Center", icon: faQuestionCircle, href: "#" },
    { name: "Data saver", icon: faWrench, href: "#" },
    { name: "Display", icon: faWrench, href: "#" },
    { name: "Log out", icon: faSignOutAlt, href: "#" },
  ],
];

type SideMenuProps = {
  handleCloseSideMenu?: () => void;
  containerClassName?: string;
  overlayClassName?: string;
};

const SideMenu: FC<SideMenuProps> = ({
  handleCloseSideMenu,
  containerClassName,
  overlayClassName,
}) => {
  const [selectedExpandableSection, setSelectedExpandableSection] = useState<
    boolean[]
  >(Array(expandableMenuItems.length).fill(false));

  const onExpendableMenuButtonClick = (index: number) => () => {
    setSelectedExpandableSection((prev) => {
      const result = [...prev];
      result[index] = !result[index];
      return result;
    });
  };

  return (
    <div
      className={cx(
        `fixed top-0 left-0 bg-dark-overlay w-full opacity-1`,
        overlayClassName
      )}
    >
      <div
        className={cx(
          `w-3/4 h-screen overflow-y-auto bg-dark-background`,
          containerClassName
        )}
      >
        <div className="flex justify-between px-4 pb-8 mt-3">
          <ThemedTextSpan className="font-bold">Account Info</ThemedTextSpan>
          <button onClick={handleCloseSideMenu}>
            <FontAwesomeIcon icon={faTimes} inverse />
          </button>
        </div>
        <div className="flex flex-col">
          <div className="px-4">
            <img
              src="https://via.placeholder.com/100x100"
              className="w-10 h-10 rounded-full"
              alt="Avatar"
            />
            <div>
              <ThemedText className="text-lg font-medium">John Doe</ThemedText>
              <div className="text-sm text-dark-grey">@JDoe</div>
              <div className="flex mt-3">
                <div className="text-dark-grey mr-5 text-sm">
                  <ThemedText className="font-medium">0</ThemedText>
                  &nbsp;Followings
                </div>
                <div className="text-dark-grey text-sm">
                  <ThemedText className="font-medium">0</ThemedText>
                  &nbsp;Followers
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            {menuItems.map((menuItem, index) => (
              <button key={index} className="flex items-center p-4">
                <FontAwesomeIcon
                  icon={menuItem.icon}
                  className="mr-6"
                  inverse
                />
                <ThemedTextSpan className="text-xl font-bold">
                  {menuItem.name}
                </ThemedTextSpan>
              </button>
            ))}
          </div>
          <hr className="border-dark-border w-[89%] ml-4 mb-1" />
          {expandableMenuItems.map((expandableMenuItem, index) => (
            <div key={index}>
              <button
                onClick={onExpendableMenuButtonClick(index)}
                className={cx(`flex items-start w-full p-4`, {
                  "bg-dark-light-grey": selectedExpandableSection[index],
                })}
              >
                <ThemedTextSpan className="text-lg font-bold text-[15px]">
                  {index === 0
                    ? "Creator Studio"
                    : index === 1
                    ? "Professional Tools"
                    : "Settings and Support"}
                </ThemedTextSpan>
              </button>
              <div
                className={`${
                  selectedExpandableSection[index] ? "block" : "hidden"
                }`}
              >
                {expandableMenuItem.map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center p-3">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mr-3"
                      inverse
                    />
                    <ThemedTextSpan className="text-[15px]">
                      {item.name}
                    </ThemedTextSpan>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
