import { useState } from "react";
import { motion } from "framer-motion";
import { List, X, Warehouse, Storefront, User, Ranking, PiggyBank, Gauge, CurrencyCircleDollar, Building } from "@phosphor-icons/react";
import logo from "../.././assets/public/logo.webp"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
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
        {isOpen && <span className="ml-2 mt-1 font-bold text-3xl text-[#3D3D3D] z-1">Seygo</span>}
        </div>
        <nav className="flex ml-4 flex-col mt-2 gap-4 text-[#6B7280]">
        <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <List className="flex-shrink-0" size={27} />
            {isOpen && <span
              className={`transition-opacity duration-300 ${
                isOpen ? "opacity-100 delay-200" : "opacity-0"}`}
            >
              Menu&nbsp;Principal
            </span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <Warehouse className="flex-shrink-0" size={27} />
            {isOpen && <span>Estoque</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <User className="flex-shrink-0" size={27} />
            {isOpen && <span>Vendedor</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <Storefront className="flex-shrink-0" size={27} />
            {isOpen && <span>Leads</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <Ranking className="flex-shrink-0" size={27} />
            {isOpen && <span>Comissões</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <PiggyBank  className="flex-shrink-0" size={27} />
            {isOpen && <span>Financeio</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <Gauge className="flex-shrink-0" size={27} />
            {isOpen && <span>Desempenho</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <CurrencyCircleDollar className="flex-shrink-0" size={27} />
            {isOpen && <span>Invoices</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8] z-1">
            <Building className="flex-shrink-0" size={27} />
            {isOpen && <span>Propostas</span>}
          </a>
        </nav>
      </div>
      </div>
       
      <div className={"flex-1 p-6"}>
        <h1 className="text-2xl font-bold">Título da pagina</h1>
      </div>
    </div>
  );
}

