import { ReactElement, useState, forwardRef, useImperativeHandle } from "react";
import { X } from "@phosphor-icons/react";



interface IModal {
  width: string;
  height: string;
  modalTitle: string;
  modalElement: ReactElement;
}

export interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

const ModalBlank = forwardRef<ModalHandles, IModal>(
  ({ width, height, modalTitle, modalElement }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    const modalStyle = { width: `${width}px`, height: `${height}px` };

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
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ModalBlank;
