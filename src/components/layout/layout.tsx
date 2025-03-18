// components/Layout.tsx
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <main className="flex w-full h-full overflow-hidden">
        <Sidebar />
        <div className="pl-[65px] flex w-full">
          {children || <Outlet />}
        </div>
      </main>
  );
};

export default Layout;

