import {MagnifyingGlass, Plus} from "@phosphor-icons/react";
import { useState } from "react";
import Modal from "./modaltemplate";

export default function TemplatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    
  <div className="bg-[#EDF1F5] min-h-screen">
    <h2 className="text-xl py-6 font-semibold pl-4">Meus Templates</h2>

    <div className='flex flex-wrap md:flex-nowrap items-end gap-4 border border-[#D1D5DB] p-6 w-full'>
    <div className="flex flex-col">
      <label className='text-[#929292] text-sm'>Nome Template</label>
      <input type="text" className='border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]'></input>
    </div>

    <div className="flex flex-col">
      <label className='text-[#929292] text-sm'>Tipo Template</label>
      <input className='border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]'></input>
    </div>


    <button className="bg-[#ED6F2A] text-[#FFFFFF] px-4 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-[#ed6e2aee] active:bg-[#BA6F47] transition delay-60 duration-40 ease-in-out"><MagnifyingGlass size={20} weight="bold" /> Pesquisar</button>
        <button onClick={() => setIsModalOpen(true)} className="bg-[#46B7BA] text-[#FFFFFF] px-4 py-1.5 rounded-sm flex items-center gap-0.5 cursor-pointer hover:bg-[#46b6baf3] active:bg-[#1096DE] transition delay-60 duration-40 ease-in-out"><Plus size={20} weight="bold"/>Novo Template</button>
        </div>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </div>
  );
}

