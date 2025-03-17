import { useState } from "react";
import { motion } from "framer-motion";
import { List, X, Warehouse, Storefront, User, Ranking, PiggyBank, Gauge, CurrencyCircleDollar, Building } from "@phosphor-icons/react";
import logo from "../login/logo.webp"


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <motion.div
        animate={{ width: isOpen ? 237 : 65 }}
        className="h-screen border-r border-[#C6C6C6] bg-[#E2E8F0] text-[#6B7280] p-4 flex flex-col fixed top-0 left-0 z-10"
      >
        <div className="flex flex-shrink-0 -ml-1 w-10 z-11 ">
        <img src={logo} alt="Logo" />
        {isOpen && <span className="ml-2 font-bold text-3xl text-[#3D3D3D]">Seygo</span>}
        </div>
        
        <button
          className="mt-2 mb-4 text-[#6B7280]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <List size={30} />}
        </button>

        <nav className="flex flex-col gap-4 ">
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <Warehouse className="flex-shrink-0" size={25} />
            {isOpen && <span>Estoque</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <User className="flex-shrink-0" size={25} />
            {isOpen && <span>Vendedor</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <Storefront className="flex-shrink-0" size={25} />
            {isOpen && <span>Leads</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <Ranking className="flex-shrink-0" size={25} />
            {isOpen && <span>Comissões</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <PiggyBank  className="flex-shrink-0" size={25} />
            {isOpen && <span>Financeio</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <Gauge className="flex-shrink-0" size={25} />
            {isOpen && <span>Desempenho</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <CurrencyCircleDollar className="flex-shrink-0" size={25} />
            {isOpen && <span>Invoices</span>}
          </a>
          <a href="#" className="flex items-center gap-2 rounded p-1 hover:text-[#EDF1F5] hover:bg-[#A5ADB8]">
            <Building className="flex-shrink-0" size={25} />
            {isOpen && <span>Propostas</span>}
          </a>
        </nav>
      </motion.div>

      <div className={`flex-1 p-6 transition-all ${isOpen ? "ml-[250px]" : "ml-[65px]"}`}>
        <h1 className="text-2xl font-bold">Título da pagina</h1>
  
      </div>
    </div>
  );
}