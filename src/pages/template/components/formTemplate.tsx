import Input from "../../../components/shared/Input.tsx";
import Button from "../../../components/shared/Button.tsx";
import { FormTemplateProps, Template } from "../types.tsx";
import { useState } from "react";


export default function FormTemplate({onSubmit, onCancel, isLoading}: FormTemplateProps) {
  const [formData, setFormData] = useState<Omit<Template, 'id'>>({
    template_name: '',
    type: 'Text',
    element: '',
    created_by: '0b3f480a-8191-402f-bcbd-371190fc7097'
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

    const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5 mt-[5px]">
            <Input 
              label="Nome Template"
              value={formData.template_name}
              onChange={(e) => handleChange('template_name', e.target.value)}
            >
            </Input>
            </div>

            <div className="flex flex-col gap-1.5 mt-[2.5px]">
              <label className="text-[#929292] text-[12px]">
                Tipo Template
              </label>
              <select 
                className="cursor-pointer text-[13px] border border-[#D9D9D9] p-2 rounded-md text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-[380px] max-w-full"
                value={formData.type}
                onChange={(e) => handleChange('type', e.target.value as "Text" | "HTML")}
              >
                <option>Text</option>
                <option>HTML</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mt-[2.5px]">
              <label className="text-[#929292] text-[12px]">
                Conteúdo do Template
              </label>
              <textarea 
                className="resize-none w-[380px] max-w-full h-[170px] text-[13px] border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
                value={formData.element}
                onChange={(e) => handleChange('element', e.target.value)}
                >
                </textarea>
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
                disabled={isLoading}
              >
                {isLoading ? 'Salvando...' : 'Salvar'}
              </Button>
              </div>
          </form>
    )
}
