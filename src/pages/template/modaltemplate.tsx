import { X } from "@phosphor-icons/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#333333]/58 min-h-screen px-4 sm:px-0" onClick={onClose}>
      <div className="bg-[#FFFFFF] p-6 rounded-[10px] w-full max-w-[428px]" onClick={(e) => e.stopPropagation()}>
        <h2 className="flex justify-between items-center font-semibold text-[20px] text-[#2E2E34]"> Criar novo template
          <button onClick={onClose} className="text-[#5D5D6C] cursor-pointer"> <X size={24} /></button>
        </h2>

        <div className="flex flex-col gap-1.5 mt-[20px]">
          <label className="text-[#929292] text-[12px]">Nome Template</label>
          <input type="text" className="border border-[#D9D9D9] p-2.25 rounded-md text-[11px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-[380px] max-w-full"/>
        </div>

        <div className="flex flex-col gap-1.5 mt-[12px]">
          <label className="text-[#929292] text-[12px]">Tipo Template</label>
          <select className="cursor-pointer border border-[#D9D9D9] p-2.25 rounded-md text-[11px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-[380px] max-w-full">
            <option>Template1</option>
            <option>Template2</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5 mt-[12px]">
          <label className="text-[#929292] text-[12px]">Conteúdo do Template</label>
          <textarea className="resize-none w-[380px] max-w-full h-[170px] text-[11px] text-[#929292] border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"></textarea>
        </div>

        <div className="flex justify-end mt-[40px] gap-2">
          <button onClick={onClose} className="w-[79px] h-[30px] cursor-pointer border border-[#46B7BA] text-[#46B7BA] text-[12px] font-bold bg-white rounded-[4px] hover:bg-[#f1f1f1] transition">
            Cancelar
          </button>
          <button className="w-[79px] h-[30px] cursor-pointer bg-[#46B7BA] text-white border border-[#46B7BA] font-bold text-[12px] rounded-[4px] hover:bg-[#1096DE] transition">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
