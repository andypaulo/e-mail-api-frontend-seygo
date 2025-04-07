import Input from "../../../components/shared/Input.tsx";
import Button from "../../../components/shared/Button.tsx";
import { useRotinaService } from "../services/useRotina.ts";
import { FormRotinaProps } from "../types.tsx";
import { useWatch } from "react-hook-form";

export default function FormRotina({ rotina, onCancel, onSubmit }: FormRotinaProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useRotinaService({ rotina, onCancel, onSubmit });

  const repeatType = useWatch({ control, name: "schedule.repeatType" });
  const endType = useWatch({ control, name: "schedule.endType" });
  const daysOfWeek = useWatch({ control, name: "schedule.daysOfWeek" }) || [];

  const handleDayChange = (day: number) => {
    const newDays = daysOfWeek.includes(day)
      ? daysOfWeek.filter(d => d !== day)
      : [...daysOfWeek, day];
    setValue("schedule.daysOfWeek", newDays);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 mt-[5px]">
        <Input
          label="Nome da Rotina"
          {...register("routine_name")}
          error={errors.routine_name?.message}
        />
        
        <label className="mt-1 text-[#929292] text-[13px]">Selecione o template</label>
        <select
          className="p-1.75 border-1 border-[#D9D9D9] rounded-[5px] text-[#929292] text-[15px] focus:outline-none focus:ring-1 focus:ring-[#a8a3a3]"
          {...register("template_type")}
        >
        </select>

        <div>
          <h1 className="text-xl font-semibold mt-4">Horários</h1>
        </div>

        <div className="flex items-center w-40 mt-2">
          <label className="font-semibold mr-2">Repetição:</label>
          <select
            {...register("schedule.repeatType")}
            className="flex-box items-center border h-9 rounded p-2 text-sm text-[#929292] border-[#D9D9D9] flex-1"
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
                    checked={daysOfWeek.includes(index)}
                    onChange={() => handleDayChange(index)}
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
            {...register("schedule.startDate")}
            type="date"
            className="border rounded border-[#D9D9D9] text-sm text-[#929292] h-9 p-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold">Repete a cada: </label>
          <select
            {...register("schedule.repeatCondition", { valueAsNumber: true })}
            className="border rounded p-x-1"
          >
            {Array.from(
              { length: repeatType === "diariamente" ? 6 :
                repeatType === "semanalmente" ? 4 : 12 },
              (_, i) => i + 1
            ).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <label className="ml-2">
            {repeatType === "diariamente" && "dia(s)"}
            {repeatType === "semanalmente" && "semana(s)"}
            {repeatType === "mensalmente" && "mes(es)"}
          </label>
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Termina em:</label>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="never"
              value="nunca"
              {...register("schedule.endType")}
              className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
            />
            <label htmlFor="never">Nunca</label>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="radio"
              id="after"
              value="depois"
              {...register("schedule.endType")}
              className="h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
            />
            <label htmlFor="after">Depois de</label>
            {endType === "depois" && (
              <input
                {...register("schedule.occurrences", { valueAsNumber: true })}
                className="border rounded w-10 pl-1"
                type="number"
                min={1}
              />
            )}
            {endType === "depois" && <span>Ocorrência(s)</span>}
          </div>
        </div>

        <div className="flex items-center mt-3">
          <p className="text-base font-medium mr-1">Status</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              {...register("status")}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#D9D9D9] rounded-full peer peer-checked:after:translate-x-5 peer-checked:bg-green-500 after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffff] after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>

        <div className="flex justify-end space-x-3">
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
      </div>
    </form>
  );
}