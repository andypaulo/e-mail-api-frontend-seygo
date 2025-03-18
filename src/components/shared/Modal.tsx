import { ReactElement, useState, forwardRef, useImperativeHandle } from "react";
import { X } from "@phosphor-icons/react";


interface IModal {
  width: string;
  height: string;
  layoutButton: number;
  modalTitle: string;
  modalElement: ReactElement;
}

export interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

const ModalBlank = forwardRef<ModalHandles, IModal>(
  ({ width, height, layoutButton, modalTitle, modalElement }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    const modalStyle = { width: `${width}px`, height: `${height}px` };
    let cancelButtonClass: string =
      "w-25 h-10 bg-white rounded-md border-2 cursor-pointer ease-in duration-100";
    if (layoutButton == 1)
      cancelButtonClass +=
        "border-[#ED6F2A] text-[#ED6F2A] hover:text-[#9E4616] hover:border-[#9E4616]";
    if (layoutButton == 2)
      cancelButtonClass +=
        "border-[#46B7BA] text-[#46B7BA] hover:text-[#107E81] hover:border-[#107E81]";

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-[#00000070] z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white flex flex-col p-7 rounded-lg shadow-lg relative justify-between"
              style={modalStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">{modalTitle}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-black cursor-pointer"
                >
                  <X size={30} />
                </button>
              </div>

              <div>{modalElement}</div>

              <div className="flex justify-end space-x-3">
                <button onClick={closeModal} className={cancelButtonClass}>
                  Cancelar
                </button>
                <button className="w-25 h-10 bg-[#46B7BA] text-white rounded-md cursor-pointer hover:bg-[#107E81] hover:text-[#EDF1F5]  ease-in duration-100 ">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ModalBlank;
