import { Plus } from "@phosphor-icons/react";
import { useRef } from "react";
import ModalBlank, { ModalHandles } from "../../components/shared/Modal";
import SMTPConnectionForm from "./components/formSMTP.tsx";
import {SMTPFormData} from "../../types/responseTypes.ts"

export default function ConnectionPage() {
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = (formData:SMTPFormData) => {
    console.log('Dados para salvar:', formData);
    modalRef.current?.closeModal();
  };

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <div className="bg-[#EDF1F5] min-h-screen w-full">
      <h2 className="text-xl py-6 font-semibold pl-4">
        Minhas conexões de e-mail
      </h2>

      <div className="flex flex-wrap md:flex-nowrap items-center justify-end gap-4 border border-[#D1D5DB] p-6 w-full">
        <button
          onClick={handleOpenModal}
          className="bg-[#46B7BA] text-[#FFFFFF] px-4 py-1.5 rounded-sm flex items-center gap-0.5 cursor-pointer hover:bg-[#46b6baf3] active:bg-[#1096DE] transition delay-60 duration-40 ease-in-out"
        >
          <Plus size={20} weight="bold"/>
          Nova conexão
        </button>
      </div>

      <ModalBlank
        ref={modalRef}
        width="480"
        height="640"
        modalTitle="Criar conexão"
        modalElement={<SMTPConnectionForm
          onSubmit={handleSubmit}
          onCancel={() => modalRef.current?.closeModal()}
        />
      }
        
      />
    </div>

  );
}
