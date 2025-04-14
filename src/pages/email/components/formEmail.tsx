import Input from "../../../components/shared/Input";
import Button from "../../../components/shared/Button";

interface FormEmailProps {
    onCancel: () => void;
}

export default function FormEmail({onCancel}: FormEmailProps) {
    

    return (
        <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 mt-[5px]">
                <Input label="Destinatário"></Input>
            </div>
            <div className="flex flex-col gap-1.5 mt-[2.5px]">
                <Input label="Remetente" className="text-[13px]"></Input>
            </div>
            <div className="flex flex-col gap-1.5 mt-[2.5px]">
            <label className="text-[#929292] text-[12px]">
                Corpo do E-Mail
            </label>
            <textarea 
                className="resize-none w-[380px] max-w-full h-[170px] text-[14px] border border-[#D9D9D9] p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
            >
            </textarea>
            </div>
            <div className="mt-8 flex justify-end space-x-3">
                <Button
                variant="orange"
                type="button"
                onClick={onCancel}
            >
            Cancelar
            </Button>
            <Button
                variant="teal-solid"
                type="submit"
            > 
            Salvar
            </Button>
            </div>
        </form>
    )
}