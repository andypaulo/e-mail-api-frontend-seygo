import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import TableComp from "../../components/shared/TableComp";
import CustomSelect from "../../components/shared/CustomSelect";

export default function RotinaPage() {

  return (
    <div className="bg-[#EDF1F5] min-h-screen ">
      <h2 className="text-xl py-6 font-semibold pl-4">Minhas Rotinas</h2>

      <div className="flex flex-wrap md:flex-nowrap items-end gap-4 border border-[#D1D5DB] py-6 px-4 w-full">
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-[#929292] text-[11px]">Nome Rotina</label>
          <input type="text" className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full" />
        </div>

        <CustomSelect endpoint="/templates/list/dropdown" label="Nome Template" className="flex flex-col w-full md:w-auto" />

        <div className="flex flex-col w-full md:w-auto">
          <label className="text-[#929292] text-[11px]">Tipo Template</label>
          <input className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full" />
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="text-[#929292] text-[11px]">Status</label>
          <select className="border border-[#D9D9D9] p-2 rounded-md text-[#929292] text-[11px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full">
            <option value="#" disabled hidden>Selecione</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-4 w-full md:w-auto justify-center md:justify-start">
          <button className="bg-[#ED6F2A] text-white px-4 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-[#ed6e2aee] active:bg-[#BA6F47] transition w-full md:w-auto">
            <MagnifyingGlass size={20} weight="bold" /> Pesquisar
          </button>
          <button className="bg-[#46B7BA] text-white px-4 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-[#46b6baf3] active:bg-[#1096DE] transition w-full md:w-auto">
            <Plus size={20} weight="bold" /> Novo Template
          </button>
        </div>
      </div>

      <TableComp />
    </div>
  );
}
