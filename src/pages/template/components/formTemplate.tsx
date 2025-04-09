import Input from "../../../components/shared/Input.tsx";
import Button from "../../../components/shared/Button.tsx";  


export default function FormTemplate({onCancel}) {

    return (
        <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 mt-[5px]">
              <label className="text-[#929292] text-[12px]">
                Nome Template
              </label>
            <Input></Input>
            </div>

            <div className="flex flex-col gap-1.5 mt-[2.5px]">
              <label className="text-[#929292] text-[12px]">
                Tipo Template
              </label>
              <select className="cursor-pointer border border-[#D9D9D9] p-2.25 rounded-md text-[11px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-[380px] max-w-full">
                <option>Text</option>
                <option>HTML</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mt-[2.5px]">
              <label className="text-[#929292] text-[12px]">
                Conteúdo do Template
              </label>
              <textarea className="resize-none w-[380px] max-w-full h-[170px] text-[11px] text-[#929292] border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"></textarea>
            </div>
            <div className="mt-2 flex justify-end space-x-3">
              <Button
                variant="orange"
                onClick={onCancel}
                type="button"
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
