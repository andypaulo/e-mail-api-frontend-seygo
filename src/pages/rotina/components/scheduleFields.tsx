import { Controller } from "react-hook-form";

export const ScheduleFields = ({ control, watch }: { 
  control: any, 
  watch: any 
}) => {
  const repeatType = watch("schedule.repeatType");

  return (
    <div className="space-y-4">
      <div className="flex items-center w-40">
        <label className="font-semibold mr-2">Repetição:</label>
        <Controller
          name="schedule.repeatType"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="flex-box items-center border h-9 rounded p-2 text-sm text-[#929292] border-[#D9D9D9] flex-1"
            >
              <option value="diariamente">Diariamente</option>
              <option value="semanalmente">Semanalmente</option>
              <option value="mensalmente">Mensalmente</option>
            </select>
          )}
        />
      </div>

      {repeatType === "semanalmente" && (
        <div>
          <label className="flex font-semibold">Repete em:</label>
          <Controller
            name="schedule.daysOfWeek"
            control={control}
            render={({ field }) => (
              <div className="flex gap-2">
                {["D", "S", "T", "Q", "Q", "S", "S"].map((label, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={field.value?.includes(index) || false}
                      onChange={(e) => {
                        const newValue = e.target.checked
                          ? [...(field.value || []), index]
                          : field.value?.filter((day: number) => day !== index) || [];
                        field.onChange(newValue);
                      }}
                      className="mr-1 h-3 w-3 appearance-none cursor-pointer border border-[#D9D9D9] checked:bg-[#2E2E34] checked:border-[#2E2E34] rounded-[2px]"
                    />
                    {label}
                  </label>
                ))}
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
};