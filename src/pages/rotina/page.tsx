import { MagnifyingGlass, Plus, Eye, Pencil, Trash } from "@phosphor-icons/react";
import CustomSelect from "../../components/shared/CustomSelect";
import TableCustom from "../../components/shared/TableCustom";
import {useRef } from "react";
import ModalBlank, { ModalHandles } from "../../components/shared/Modal.tsx";


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

      <div className="inline-flex">
        <div className="">
        <button className="bg-green-500 cursor-pointer rounded text-white px-2"   onClick={visualizarModalRef.current?.openModal()}>
          <Eye size={25}/>
        </button>
        </div>
        <div className="">
        <button className="bg-orange-400 cursor-pointer rounded text-white px-2"   onClick={() => alert(`${item.id}`)}>
          <Pencil size={25}/>
        </button>
        </div>
      <div className="">
        <button className="bg-red-500 cursor-pointer rounded text-white px-2"  onClick={() => alert(`Deletando ${item.id}`)}>
          <Trash size={25}/>
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
    )
  }
  return item[column];
};


export default function RotinaPage() {
  const visualizarModalRef = useRef<ModalHandles>(null);
  const editarModalRef = useRef<ModalHandles>(null);

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

      <div>
        <button onClick={() => visualizarModalRef.current?.openModal()} className="border-1 rounded-[100%]">Visualizar</button>
        <ModalBlank
        ref={visualizarModalRef}
        width="428"
        height="534"
        layoutButton={2}
        modalTitle="Visualizar Rotina"
        modalElement={
          <div></div>
        }
      />
      
  


        <button onClick={() => editarModalRef.current?.openModal()} className="border-1 rounded-[100%] m-5">Editar</button>
        <ModalBlank 
          ref={editarModalRef}
          width="428"
          height="554"
          layoutButton={2}
          modalTitle={`Editar Rotina [nome da rotina]`}
          modalElement={<form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 mt-[5px]">
              
              <input type="text" className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 text-[15px] focus:ring-[#a8a3a3] w-full" placeholder="Texto/Nome Rotina"></input>
              <select className="mt-1 p-1.5 border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">Nomes e Tipo Template
              <option>HTML</option>
              <option>Text</option>
              </select>
            </div>
            <div className="mt-2 text-[12px]">
              <h3 className="font-semibold text-[18px]">Horários</h3>

              <div className="mt-3">
              <p className="inline font-semibold">Repetição: </p>
              <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
              <option>diariamente</option>
              <option>semanalmente</option>
              <option>mensalmente</option>
              </select>
              </div>
              
              <div className="mt-4">
                <p className="inline  font-semibold ">Repete em: </p>
                <input type="checkbox" value="Domingo" className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">D </label>
                <input type="checkbox" value="Segunda" className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">S </label>
                <input type="checkbox" value="Terca"   className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">T </label>
                <input type="checkbox" value="Quarta"  className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">Q </label>
                <input type="checkbox" value="Quinta"  className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">Q </label>
                <input type="checkbox" value="Sexta"   className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">S </label>
                <input type="checkbox" value="Sabado"  className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> <label className="text-[#929292">S </label>
              </div>

              <div className="mt-4">
                <p className="font-semibold inline">Repete a cada:  </p>
                  <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
                    <option>1</option>
                  </select> 
                  <span>
                  semanas
                  </span>
              </div>
              <div className="mt-4">
                <p className="font-semibold inline">Começa em: </p>
                <input type="date" className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"></input>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Termina em: </p>
                <input type="checkbox" className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> 
                <label className="font-medium ">Nunca</label> <br/>
                <input type="checkbox" className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"></input> 
                <label className="font-medium">Depois de  
                  <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
                    <option>1</option>
                  </select>
                  Ocorrências
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-4">
                <p className="text-sm font-medium">Status</p>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#D9D9D9] rounded-full peer-checked:after:translate-x-5 peer-checked:bg-[#93ff85] after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffff] after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
            </form>
            } 
          />

      </div>
    </div>
  );
}

