import { useState } from "react";
import { List, File, CalendarDots, At, Envelope, User } from "@phosphor-icons/react";
import logo from "../assets/public/logo.webp";
import { Link } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex z-10 fixed">
      <div
        className={`flex top-0 h-screen border-r-1 border-[#C6C6C6] bg-[#E2E8F0] transition-all duration-100 ease-in-out ${
          isOpen ? "w-[237px]" : "w-[65px]"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-white">
          <div className="flex ml-2 flex-shrink-0 mt-2 z-1 ">
            <img src={logo} alt="Logo" />
            {isOpen && (
              <span className="ml-2 mt-1 font-bold text-3xl text-[#3D3D3D] z-1">
                Seygo
              </span>
            )}
          </div>
          <nav className="flex ml-4 flex-col mt-4 gap-4 text-[#6B7280]">
            <Link
              className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1"
              to="/template"
            >
              <List className="flex-shrink-0" size={27} />
              {isOpen && (
                <span
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  Menu&nbsp;Principal
                </span>
              )}
            </Link>
            <Link
              className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1"
              to="/template"
            >
              <File size={27} />
              {isOpen && <span>Template</span>}
            </Link>
            <Link
              className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1"
              to="/rotina"
            >
              <CalendarDots size={27} />
              {isOpen && <span>Rotina</span>}
            </Link>
            <Link
              className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1"
              to="/rotina"
            >
              <Envelope size={27} />
              {isOpen && <span>Emails</span>}
            </Link>
            <Link
              className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1"
              to="/connection"
            >
              <At size={27} />
              {isOpen && <span>Conexões</span>}
            </Link>
            <Link
              className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1"
              to="/rotina"
            >
              <User size={27} />
              {isOpen && <span>Usuários</span>}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
