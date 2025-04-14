import { Plus } from "@phosphor-icons/react";
import Button from "../../components/shared/Button";
import {useRef} from "react";
import ModalBlank, { ModalHandles } from "../../components/shared/Modal";
import FormEmail from "./components/formEmail";

export default function EmailPage() {
    const envioEmailModalRef = useRef<ModalHandles>(null);

    return(
    <div className="bg-[#EDF1F5] min-h-screen w-full">
        <h2 className="text-xl py-6 font-semibold pl-4">Enviar E-Mail</h2>
        <div className="flex flex-row-reverse flex-wrap md:flex-nowrap items-end gap-6 border border-[#D1D5DB] p-8 w-full">
            <Button 
            variant = "teal-alternative-solid"
            type = "submit"
            onClick = {() => envioEmailModalRef.current?.openModal()} 
            > 
            <Plus size ={20} /> 
            Adicionar envio de e-mail
            </Button>
            <Button 
            type = "submit"
            variant = "green-solid" >
            Adicionar e-mails por Excel
            </Button>
        </div>
        
        <div className="mt-5.5 flex flex-col items-center">
            <div className="bg-[#FFFFFF] gap-4 w-full max-w-450 h-111 rounded-lg mx-4">
            </div>
            <div className="w-full max-w-450 mx-4 flex justify-end mt-4">
                <Button variant="orange-solid" className="mt-10.25 "> Enviar </Button>
            </div>
        </div>
        <ModalBlank
            ref={envioEmailModalRef}
            width="428"
            height="564"
            modalTitle="Criar Envio de E-Mail"
            modalElement={
            <FormEmail
            onCancel={() => envioEmailModalRef.current?.closeModal()}
            />
            }
        />
    </div>
    );
}