import { MagnifyingGlass, Plus, Eye, Pencil, Trash, } from "@phosphor-icons/react";
import { useState, useRef } from "react";
import CustomSelect from "../../components/shared/CustomSelect";
import TableCustom from "../../components/shared/TableCustom";
import ModalBlank, { ModalHandles } from "../../components/shared/Modal.tsx";
import FormRotina, { Rotina } from "./components/formRotina.tsx";



const columns = [
  { header: "ID", body: "id" },
  { header: "Nome da rotina", body: "routine_name" },
  { header: "Nome do template", body: "template_name" },
  { header: "Tipo do template", body: "template_type" },
  { header: "Status", body: "status" },
  { header: "Ações", body: "acoes" },
];
export default function RotinaPage() {
  const visualizarModalRef = useRef<ModalHandles>(null);
  const editarModalRef = useRef<ModalHandles>(null);
  const [rotinaEditando, setRotinaEditando] = useState<Rotina | null>(null);
  const [cacheBuster, setCacheBuster] = useState(0);

  const handleSalvar = async (dados: Rotina) => {
    const id = Number(dados.id);
    if (!id) throw new Error("ID da rotina inválido");
  
    try {
      const payload = { ...dados, id };
      console.log("Enviando dados:", payload);
  
      const response = await fetch(`http://localhost:3000/api/routines/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Erro HTTP: ${response.status}`
        );
      }
      setCacheBuster(Date.now());
      return await response.json();
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Erro desconhecido ao salvar rotina";
      
      console.error("Falha ao salvar:", { error });
      alert(errorMessage);
      throw error;
    }
  };
  
const renderCell = (item: any, column: string | number | symbol) => {
  if (column === "acoes") {
    return (
      <div>
        <div>
          <button
            className="bg-green-500 cursor-pointer rounded text-white px-2"
            onClick={() => {
             //setRotinaVisualizando(item);
              visualizarModalRef.current?.openModal();
            }}
          >

            <Eye size={25} />
          </button>
        </div>
        <div className="">
          <button
            className="bg-orange-400 cursor-pointer rounded text-white px-2"
            onClick={() => {
              setRotinaEditando(item); 
              editarModalRef.current?.openModal(); 
            }}
          >
            <Pencil size={25} />
          </button>
        </div>

        <div>
          <button
            className="bg-red-500 cursor-pointer rounded text-white px-2"
            onClick={() => alert(`Deletando ${item.id}`)}
          >
            <Trash size={25} />
          </button>
        </div>
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
    );
  }
  return item[column];
};

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
            <Plus size={20} weight="bold" /> Nova Rotina
          </button>
        </div>
      </div>

      <div className="flex">
        <TableCustom
          renderCell={renderCell}
          columns={columns}
          fetchEndpoint={`http://localhost:3000/api/routines?cache=${cacheBuster}`}
          numberRolls={40}
        />
      </div>

      <div>
        <ModalBlank
          ref={visualizarModalRef}
          width="428"
          height="534"
          modalTitle={`Detalhes da Rotina`}
          modalElement={<div></div>}
          />
         <ModalBlank
          ref={editarModalRef}
          width="448"
          height="614"
          modalTitle={`${rotinaEditando?.routine_name || ""}`}
          modalElement={
            <FormRotina
            rotina={rotinaEditando || undefined}
            onCancel={() => editarModalRef.current?.closeModal()}
            onSubmit={async (dados) => {
              await handleSalvar(dados);
              editarModalRef.current?.closeModal();
            }}
          />
        }
        />
      </div>
    </div>
  );
}

