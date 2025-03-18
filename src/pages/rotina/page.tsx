import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import CustomSelect from "../../components/shared/CustomSelect";
import TableCustom from "../../components/shared/TableCustom";

const columns = [
  { header: "ID", body: "id" },
  { header: "Nome da rotina", body: "routine_name" },
  { header: "Nome do template", body: "template_name" },
  { header: "Tipo do template", body: "template_type" },
  { header: "Status", body: "status" },
  { header: "Ações", body: "acoes" },
];

const renderCell = (item: any, column: string | number | symbol) => {
  if (column === "acoes") {
    return (
      <div>
        <button className="bg-red-500 cursor-pointer rounded text-white px-2"  onClick={() => alert(`Deletando ${item.id}`)}>
          Excluir
        </button>
      </div>
    );
  }

  if (column === "status") {
    if (item.status) {
      return (
        <div className="text-white bg-green-500 w-12 flex items-center justify-center rounded">
          Ativo
        </div>
      );
    }
    return (
        <div className="text-white bg-red-500 w-16 flex items-center justify-center rounded">
          Inativo
        </div>
    )
  }
  return item[column];
};

export default function RotinaPage() {
  return (
    <div className="bg-[#EDF1F5] min-h-screen w-full">
      <h2 className="text-xl py-6 font-semibold pl-4">Minhas Rotinas</h2>

      <div className="flex flex-wrap md:flex-nowrap items-end gap-4 border border-[#D1D5DB] py-6 px-4 w-full">
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-[#929292] text-[13px]">Nome Rotina</label>
          <input
            type="text"
            className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full"
          />
        </div>

        <CustomSelect
          endpoint="/routines/list/dropdown"
          label="Nome Template"
          className="flex flex-col w-full md:w-auto"
        />

        <div className="flex flex-col w-full md:w-auto">
          <label className="text-[#929292] text-[13px]">Tipo Template</label>
          <input className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full" />
        </div>

        <div className="flex flex-col w-full md:w-auto">
          <label className="text-[#929292] text-[13px]">Status</label>
          <select className="border border-[#D9D9D9] p-2 rounded-md text-[#929292] text-[11px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full">
            <option value="#" disabled hidden>
              Selecione
            </option>
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

      <div className="flex">
        <TableCustom
          renderCell={renderCell}
          columns={columns}
          fetchEndpoint="http://localhost:3000/api/routines"
          numberRolls={40}
        />
      </div>
    </div>
  );
}
