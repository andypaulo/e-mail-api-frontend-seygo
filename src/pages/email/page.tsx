import { Plus } from "@phosphor-icons/react";
import Button from "../../components/shared/Button";

export default function EmailPage() {

    return(
    <div className="bg-[#EDF1F5] min-h-screen w-full">
        <h2 className="text-xl py-6 font-semibold pl-4">Enviar E-Mail</h2>
        <div className="flex flex-row-reverse flex-wrap md:flex-nowrap items-end gap-6 border border-[#D1D5DB] p-8 w-full">
            <Button variant = "teal-alternative-solid" > <Plus size ={20} /> Adicionar envio de e-mail</Button>
            <Button variant = "green-solid" > Adicionar e-mails por Excel</Button>
        </div>
        
        <div className="mt-5.5 flex flex-col items-center">
            <div className="bg-[#FFFFFF] gap-4 w-full max-w-450 h-111 rounded-lg mx-4">
            </div>
            <div className="w-full max-w-450 mx-4 flex justify-end mt-4">
                <Button variant="orange-solid" className="mt-10.25 "> Enviar </Button>
            </div>
        </div>
    </div>
    );
}