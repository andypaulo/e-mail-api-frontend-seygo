import { div, span } from "framer-motion/client";
import { useState, useEffect } from "react";
import Button from "../../../components/shared/Button.tsx";
import Input from "../../../components/shared/Input.tsx";

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



export default function CronGenerator({ rotina, onCancel, onSubmit }: FormRotinaProps ) {
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

  const [repeatType, setRepeatType] = useState("diariamente");
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endType, setEndType] = useState("nunca");
  const [occurrences, setOccurrences] = useState(1);
  const [repeatCondition, setRepeatCondition] = useState(1);

  const handleDayChange = (day) => {
    setDaysOfWeek((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const generateCronExpression = () => {
    let cronMinute = "0";
    let cronHour = "0";
    let cronDayOfMonth = "*";
    let cronMonth = "*";
    let cronDayOfWeek= "*";

    if (repeatType === "diariamente") {
      cronDayOfWeek = "*";
    } else if (repeatType === "semanalmente" || "mensalmente") {
      cronDayOfWeek = daysOfWeek.length > 0 ? daysOfWeek.join(",") : "*";
    } else if (repeatType === "mensalmente" && startDate) {
      cronDayOfMonth = new Date(startDate).getDate();
    }

    if (repeatCondition >= 1){
      
    }

    if (startDate) {
      const date = new Date(startDate);
      cronDayOfMonth = date.getDate() +1;
      cronMonth = date.getMonth() +1;
    }
   

    return `${cronMinute} ${cronHour} ${cronDayOfMonth} ${cronMonth} ${cronDayOfWeek}`;
  };

  console.log(generateCronExpression())

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
    <div className="flex flex-col gap-1 mt-[5px]">
      <Input
      label="Nome da Rotina"           
      name="routine_name"
      value={formData.routine_name || ""}
      onChange={handleChange}>
      </Input>
      <label className="mt-1 text-[#929292] text-[13px]">Selecione o template</label>
      <select 
        className="p-1.75 border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
        name="template_type"
        value={formData.template_type}
        onChange={handleChange}>
          <option>HTML</option>
          <option>Text</option>
        </select>
      <div>
        <h1 className="text-xl font-semibold mt-4">Horários</h1>
      </div>
      <div className="flex items-center w-40 mt-2">
        <label className="font-semibold mr-2">Repetição:</label>
        <select
          value={repeatType}
          onChange={(e) => setRepeatType(e.target.value)}
          className="flex-box items-center  border h-9 rounded p-2 text-sm text-[#929292] border-[#D9D9D9] flex-1"
        >
          <option value="diariamente">Diariamente</option>
          <option value="semanalmente">Semanalmente</option>
          <option value="mensalmente">Mensalmente</option>
        </select>
      </div>

      {repeatType === "semanalmente" && (
        <div className="mt-4">
          <label className="flex font-semibold">Repete em:</label>
          <div className="flex gap-2">
            {["D", "S", "T", "Q", "Q", "S", "S"].map((label, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  value={index}
                  onChange={() => handleDayChange(index)}
                  checked={daysOfWeek.includes(index)}
                  className="mr-1 h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      )}

  <div className="mt-4">
          <label className="flex-box font-semibold mr-2">Começa em:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded border-[#D9D9D9] text-sm text-[#929292] h-9 p-2 "
          />
        </div>
        {repeatType === "diariamente" && (
          <div className="mt-4 ">
            <label className="font-semibold">Repete a cada: </label>
            <select
            value={repeatCondition}
            className="border rounded p-x-1"
            onChange={(e) => setRepeatCondition(e.target.value)}
            >
            {[...Array(6).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
           </select>
           <label className="ml-2">
           {repeatType === "diariamente" &&( <span>dia(s)</span> )}
              </label>

          </div>
        )}

        {repeatType === "semanalmente" && (
          <div className="mt-4 ">
            <label className="font-semibold">Repete a cada: </label>
            <select
            value={repeatCondition}
            className="border rounded p-x-1"
            onChange={(e) => setRepeatCondition(e.target.value)}
            >
            {[...Array(4).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
           </select>
           <label className="ml-2">
           {repeatType === "semanalmente" &&( <span>semana(s)</span> )}
              </label>

          </div>
        )}

        

        {repeatType === "mensalmente" && (
          <div className="mt-4 ">
            <label className="font-semibold">Repete a cada: </label>
            <select
            value={repeatCondition}
            className="border rounded p-x-1"
            onChange={(e) => setRepeatCondition(e.target.value)}
            >
            {[...Array(12).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
           </select>
           <label className="ml-2">
           {repeatType === "mensalmente" &&( <span>mes(ses)</span> )}
              </label>

          </div>
        )}


        <div className="mt-4">
        <label className="block font-semibold">Termina em:</label>
        <div className="flex items-center gap-2 ">
          <input
            type="checkbox"
            checked={endType === "nunca"}
            onChange={() => setEndType("nunca")}
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          />
          <label>Nunca</label>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={endType === "depois"}
            onChange={() => setEndType("depois")}
            className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
          />
          <label>Depois de</label>
          {endType === "depois" && (
            <input
              
              value={occurrences}
              onChange={(e) => setOccurrences(e.target.value)}
              className="border rounded w-10 pl-1"
              type="number"
              min={1}
            >
            </input>
          )}
          {endType === "depois" && <span>Ocorrência(s)</span>}
        </div>
      </div>
      <div className="flex items-center mt-3">
          <p className="text-base font-medium mr-1">Status</p>
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
      <div className="flex justify-end space-x-3">
        <Button
        variant="orange"
        onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button
        variant="teal-solid"
        >
          Salvar
        </Button>
      </div>
    </div>
    </form>
  );

}