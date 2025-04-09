import React, { useState } from "react";

export interface FormTemplateData {
  template_name: string;
  template_type: string;
  template_content: string;
}

interface FormTemplateProps {
  onSubmit?: (data: FormTemplateData) => void;
  onCancel: () => void;
  initialData?: Partial<FormTemplateData>;
}

const FormTemplate: React.FC<FormTemplateProps> = ({
  onSubmit,
  onCancel,
  initialData = {},
}) => {
  const [formData, setFormData] = useState<FormTemplateData>({
    template_name: initialData.template_name || "",
    template_type: initialData.template_type || "Text",
    template_content: initialData.template_content || "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData)
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5 mt-[5px]">
          <label className="text-[#929292] text-[12px]">Nome Template</label>
          <input
            type="text"
            name="template_name"
            value={formData.template_name}
            onChange={handleChange}
            className="border border-[#D9D9D9] p-2.25 rounded-md text-[11px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-[380px] max-w-full"
          />
        </div>

        <div className="flex flex-col gap-1.5 mt-[2.5px]">
          <label className="text-[#929292] text-[12px]">Tipo Template</label>
          <select
            name="template_type"
            value={formData.template_type}
            onChange={handleChange}
            className="cursor-pointer border border-[#D9D9D9] p-2.25 rounded-md text-[11px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-[380px] max-w-full"
          >
            <option value="Text">Text</option>
            <option value="HTML">HTML</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5 mt-[2.5px]">
          <label className="text-[#929292] text-[12px]">
            Conteúdo do Template
          </label>
          <textarea
            name="template_content"
            value={formData.template_content}
            onChange={handleChange}
            className="resize-none w-[380px] max-w-full h-[170px] text-[11px] text-[#929292] border border-[#D9D9D9] p-1.25 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="w-25 h-10 border rounded-md bg-white text-[#ED6F2A] hover:text-[#9E4616]"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-25 h-10 bg-[#46B7BA] text-white rounded-md hover:bg-[#107E81]"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTemplate;
