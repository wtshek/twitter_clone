import { createElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { Path } from "##/constants";
import { Search, Notification, Home, Message } from "##/icons";
import { Theme } from "##/types";

// TODO: create theme toggle

export const BottomNavBar = () => {
  const location = useLocation();

  const menuItem = [
    { path: Path.HOME, label: "Home", icon: Home },
    { path: Path.SEARCH, label: "Search", icon: Search },
    { path: Path.NOTIFICATION, label: "Notifications", icon: Notification },
    { path: Path.MESSAGE, label: "Messages", icon: Message },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 flex items-center justify-around border-t-[1px] border-dark-border bg-dark-background">
      {menuItem.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`relative p-3 flex items-center`}
        >
          {location.pathname === item.path && (
            <div className="absolute top-2 right-0 w-[7px] h-[7px] rounded-full bg-main"></div>
          )}
          {createElement(item.icon, {
            theme: Theme.DARK,
          })}
        </Link>
      ))}
    </div>
  );
};

export default BottomNavBar;
