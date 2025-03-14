import { useState } from "react";
import { X } from "@phosphor-icons/react";


export default function ModalBlank(){
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
  
    return (
      <>

        <button 
          onClick={() => setIsOpen(true)} 
          className="items-center justify-center px-4 py-3 bg-blue-600 text-white"
          
        >
          Abrir Modal
        </button>
  
        {isOpen && (

            

          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50" onClick={closeModal}>
            <div 
              className="bg-white w-130 p-7 rounded-lg shadow-lg relative w-96"
              onClick={(e) => e.stopPropagation()}
            >
  
              <h2 className="text-2xl font-semibold mb-4">Título do Modal</h2>
              <button 
                onClick={closeModal} 
                className="absolute top-7 right-7 text-gray-600 hover:text-black cursor-pointer"
              >
                <X size={30} />
              </button>
              <p className="text-gray-600 mb-6 font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi atque veniam, culpa itaque ipsam eum explicabo nobis ad impedit tempore optio nesciunt quisquam rerum alias corporis quas fuga 
              </p>
  
              <div className="flex justify-end space-x-3">
                <button 
                  onClick={closeModal} 
                  className=" w-25 h-10 bg-white rounded-md border-2 border-[#ED6F2A] text-[#ED6F2A] hover:text-[#9E4616] hover:border-[#9E4616] cursor-pointer ease-in duration-100"
                >
                  Cancelar
                </button>
                <button 
                  className="w-25 h-10 bg-[#46B7BA] text-white rounded-md cursor-pointer hover:bg-[#107E81] hover:text-[#EDF1F5]  ease-in duration-100 "
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
