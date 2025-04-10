import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { useState, useRef } from "react";
import Input from "../../components/shared/Input.tsx"
import Button from "../../components/shared/Button.tsx"
import ModalBlank, { ModalHandles } from "../../components/shared/Modal.tsx";
import TableCustom from "../../components/shared/TableCustom";
import FormTemplate from "./components/formTemplate.tsx";
import { api } from "../../api/api.ts";
import { Template } from './types.tsx'

const columns = [
  { header: "ID", body: "id" },
  { header: "Nome do template", body: "template_name" },
  { header: "Tipo do template", body: "type" },
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
  return item[column];
};

export default function TemplatePage() {
  const novoTemplateModalRef = useRef<ModalHandles>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [filters, setFilters] = useState<{ [key: string]: any }>({});

  const handleFilterChange = () => {
    setRefreshKey(prev => prev + 1);
  };
 
  const handleSalvar = async (dados: Omit<Template, 'id'>) => {
    try {
      setIsLoading(true);
      await api.post('/templates', {
        ...dados,
        created_by: "0b3f480a-8191-402f-bcbd-371190fc7097"
      });
      
      novoTemplateModalRef.current?.closeModal();
      setRefreshKey(prev => prev + 1); 
      
    } catch (error) {
      console.error("Erro ao criar template:", error);
      alert("Erro ao criar template. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="bg-[#EDF1F5] min-h-screen w-full">
      <h2 className="text-xl py-6 font-semibold pl-4">Meus Templates</h2>

      <div className="flex flex-wrap md:flex-nowrap items-end gap-4 border border-[#D1D5DB] p-6 w-full">
        <div className="flex flex-col">
        <Input 
          label="Nome Template" 
          value={filters.template_name || ''}
          onChange={(e) => setFilters({...filters, template_name: e.target.value})}
          >
          </Input>
        </div>

        <div className="flex flex-col">
          <label className="text-[#929292] text-sm">Tipo Template</label>
          <select 
          value={filters.type || ''}
          onChange={(e) => setFilters({...filters, type: e.target.value || undefined})}
            className="border border-[#D9D9D9] p-2 text-[13px] text-[#929292]  rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
            >
              <option value="">Exibir Todos</option>
              <option value="HTML">HTML</option>
              <option value="Text">Text</option>
          </select>
        </div>
        <Button  
          variant="orange-solid"
          type="submit"
          onClick={handleFilterChange}
        >
          <MagnifyingGlass size={20} weight="bold" /> 
          Pesquisar
        </Button>

        <Button
          onClick={() => novoTemplateModalRef.current?.openModal()}
          variant= "teal-alternative-solid"
          type= "submit"
          disabled={isLoading}
        >
          <Plus size={20} weight="bold" />
          {isLoading ? 'Salvando...' : 'Novo Template'}
        </Button>
      </div>

      <div className="flex">
        <TableCustom
          key={refreshKey}
          renderCell={renderCell}
          columns={columns}
          fetchEndpoint={`/templates`}
          initialItemsPerPage={10}
          filters={filters}
        />
      </div>

      <ModalBlank
        ref={novoTemplateModalRef}
        width="428"
        height="534"
        modalTitle="Criar Novo Template"
        modalElement={
          <FormTemplate
          onCancel={() => novoTemplateModalRef.current?.closeModal()}
          onSubmit={handleSalvar}
          isLoading={isLoading}
        />
      }
    />
  </div>    
  );
}
