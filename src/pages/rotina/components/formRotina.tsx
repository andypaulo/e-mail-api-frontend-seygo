import { useState, useEffect } from "react";

export interface Rotina {
  id?: number;
  routine_name?: string;
  template_name?: string;
  template_type?: string;
  status?: boolean;

}

interface FormRotinaProps {
  rotina?: Rotina;
  onCancel: () => void;
  onSubmit: (data: Rotina) => void;
}


export default function FormRotina({ rotina, onCancel, onSubmit }: FormRotinaProps ) {
  const [formData, setFormData] = useState<Rotina>({
    routine_name: "",
    template_name: "",
    template_type: "",
    status: false,
  });

  useEffect(() => {
    if (rotina) {
      setFormData({
        id: rotina.id,
        routine_name: rotina.routine_name || "",
        template_name: rotina.template_name || "",
        template_type: rotina.template_type || "",
        status: rotina.status || false,
      });
    }
  }, [rotina]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 mt-[5px]">
        <input
          type="text"
          name="routine_name"
          value={formData.routine_name || ""}
          onChange={handleChange}
          className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 text-[15px] focus:ring-[#a8a3a3] w-full"
          placeholder="Nome Rotina"
        ></input>
        <select 
        className="mt-1 p-1.5 border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
        name="template_type"
        value={formData.template_type}
        onChange={handleChange}>
          <option>HTML</option>
          <option>Text</option>
        </select>
      </div>
      <div className="mt-2 text-[13px]">
        <h3 className="font-semibold text-[18px]">Horários</h3>

        <div className="mt-3">
          <p className="inline font-semibold">Repetição: </p>
          <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
            <option>diariamente</option>
            <option>semanalmente</option>
            <option>mensalmente</option>
          </select>
        </div>

        <div className="mt-4">
          <p className="inline  font-semibold ">Repete em: </p>
          <input
            type="checkbox"
            value="Domingo"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">D </label>
          <input
            type="checkbox"
            value="Segunda"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">S </label>
          <input
            type="checkbox"
            value="Terca"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">T </label>
          <input
            type="checkbox"
            value="Quarta"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">Q </label>
          <input
            type="checkbox"
            value="Quinta"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">Q </label>
          <input
            type="checkbox"
            value="Sexta"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">S </label>
          <input
            type="checkbox"
            value="Sabado"
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          ></input>{" "}
          <label className="text-[#929292">S </label>
        </div>

        <div className="mt-4">
          <p className="font-semibold inline">Repete a cada: </p>
          <select className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <span>semanas</span>
        </div>
        <div className="mt-4">
          <p className="font-semibold inline">Começa em: </p>
          <input
            type="date"
            className="border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
          ></input>
        </div>
        <div className="mt-4">
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Termina em:</p>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px] mr-1"
                  />
                  <label className="font-medium">Nunca</label>
                </div>
                <div className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px] mr-1"
                  />
                  <label className="font-medium flex items-center gap-1">
                    Depois de
                    <select className="border border-[#D9D9D9] rounded-[5px] text-[#929292] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    Ocorrências
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-4">
          <p className="text-sm font-medium mr-1">Status</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              name="status"
              className="sr-only peer"
              checked={formData.status || false}
              onChange={handleChange}
            />
            <div className="w-11 h-6 bg-[#D9D9D9] rounded-full peer-checked:after:translate-x-5 peer-checked:bg-green-500 after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffff] after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-3">
                <button onClick={onCancel} className="w-25 h-10 bg-white rounded-md border-2 cursor-pointer ease-in duration-100 border-[#ED6F2A] text-[#ED6F2A] hover:text-[#9E4616] hover:border-[#9E4616]">
                  Cancelar
                </button>
                <button type="submit" className="w-25 h-10 bg-[#46B7BA] text-white rounded-md cursor-pointer hover:bg-[#107E81] hover:text-[#EDF1F5]  ease-in duration-100 ">
                  Salvar
                </button>
              </div>
    </form>
  );
}
