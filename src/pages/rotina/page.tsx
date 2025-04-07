import { MagnifyingGlass, Plus, Eye, Pencil, Trash, } from "@phosphor-icons/react";
import { useState, useRef } from "react";
import CustomSelect from "../../components/shared/CustomSelect";
import TableCustom from "../../components/shared/TableCustom";
import ModalBlank, { ModalHandles } from "../../components/shared/Modal.tsx";
import FormRotina from "./components/formRotina.tsx";
import { Rotina } from "./types.tsx";
import { API_CONFIG } from '../../config/auth';

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
  const novaRotinaModalRef = useRef<ModalHandles>(null);
  const [rotinaEditando, setRotinaEditando] = useState<Rotina | null>(null);
  const [cacheBuster, setCacheBuster] = useState(0);

  const handleSalvar = async (dados: Rotina) => {
    console.log("Dados recebidos para salvar:", dados);
    
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/routines`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_CONFIG.TOKEN}`
        },
        body: JSON.stringify(dados),
      });
  
      console.log("Status da resposta:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro detalhado:", errorData);
        throw new Error(errorData.message || "Erro ao salvar rotina");
      }
  
      const result = await response.json();
      console.log("Resposta da API:", result);
      
      setCacheBuster(Date.now());
      return result;
    } catch (error) {
      console.error("Erro completo:", error);
      throw error;
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta rotina?")) {
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/routines/${id}`, {
          method: "DELETE",
        });
        
        if (!response.ok) throw new Error("Erro ao excluir rotina");
        setCacheBuster(Date.now());
      } catch (error) {
        console.error("Falha ao excluir:", error);
      }
    }
  };

  const handleNovaRotina = () => {
    setRotinaEditando(null);
    novaRotinaModalRef.current?.openModal();
  };

  
const renderCell = (item: any, column: string | number | symbol) => {
  if (column === "acoes") {
    return (
      <div>
        <div>
          <button
            className="bg-green-500 cursor-pointer rounded text-white px-2"
            onClick={() => {
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
  return item[column as keyof Rotina];
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
          <button 
          onClick={handleNovaRotina} 
          className="bg-[#46B7BA] text-white px-4 py-1.5 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-[#46b6baf3] active:bg-[#1096DE] transition w-full md:w-auto">
            <Plus size={20} weight="bold" /> Nova Rotina
          </button>
        </div>
      </div>

      <div className="flex">
        <TableCustom
          renderCell={renderCell}
          columns={columns}
          fetchEndpoint={`${API_CONFIG.BASE_URL}/routines?cache=${cacheBuster}`}
          numberRolls={40}
        />
      </div>

      <div>
        <ModalBlank
          ref={visualizarModalRef}
          width="428"
          height="534"
          modalTitle={`Detalhes da Rotina ${rotinaEditando?.routine_name || ""}`}
          modalElement={
            <div className="p-4">
              {rotinaEditando && (
                <div className="space-y-2">
                  <p><strong>Nome:</strong> {rotinaEditando.routine_name}</p>
                  <p><strong>Template:</strong> {rotinaEditando.template_name}</p>
                  <p><strong>Tipo:</strong> {rotinaEditando.template_type}</p>
                  <p><strong>Status:</strong> {rotinaEditando.status ? "Ativo" : "Inativo"}</p>
                  )
                </div>
              )}
            </div>
          }
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
        <ModalBlank
          ref={novaRotinaModalRef}
          width="448"
          height="614"
          modalTitle="Nova Rotina"
          modalElement={
          <FormRotina
          onCancel={() => novaRotinaModalRef.current?.closeModal()}
          onSubmit={async (formData) => { 
            try {
              await handleSalvar(formData);
              novaRotinaModalRef.current?.closeModal();
            } catch (error) {
              console.error("Erro ao salvar:", error);
            }
          }}
        />
          }
        />
      </div>
    </div>
  );
}

