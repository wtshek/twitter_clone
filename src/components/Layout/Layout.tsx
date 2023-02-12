import { FC, ReactNode, useEffect, useState } from "react";
import cx from "classnames";
import { BottomNavBar } from "./BottomNavBar";
import { Header } from "./Header";
import SideMenu from "./SideMenu/SideMenu";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div>
      <Header handleOpenSideMenu={handleOpenSideMenu} />
      {children}
      <BottomNavBar />
      <SideMenu
        handleCloseSideMenu={handleCloseSideMenu}
        containerClassName={cx("duration-100", {
          "-translate-x-full": !isSideMenuOpen,
        })}
        overlayClassName={cx("duration-100", {
          "opacity-0 -translate-x-full": !isSideMenuOpen,
        })}
      />
    </div>
  );
};

export default Layout;
