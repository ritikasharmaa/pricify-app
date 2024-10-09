import * as React from "react";
import Sidebar from "../SideBar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="w-[calc(100vh - 52rem)] xl:w-([calc(100vh - 60rem)]) ml-52 xl:ml-60">
        {children}
      </div>
    </>
  );
};

export default Layout;
