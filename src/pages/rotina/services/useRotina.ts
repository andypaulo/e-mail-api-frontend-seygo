import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rotinaSchema} from "../validationSchema.ts";
import { FormRotinaProps } from "../types.tsx";

export const useRotinaService = ({ rotina, onSubmit }: FormRotinaProps) => {
    const [repeatType, setRepeatType] = useState(rotina?.schedule?.repeatType || "diariamente");
    const [daysOfWeek, setDaysOfWeek] = useState<number[]>(rotina?.schedule?.daysOfWeek || []);
    const [startDate, setStartDate] = useState(rotina?.schedule?.startDate || "");
    const [endType, setEndType] = useState(rotina?.schedule?.endType || "nunca");
    const [occurrences, setOccurrences] = useState(rotina?.schedule?.occurrences || 1);
    const [repeatCondition, setRepeatCondition] = useState(rotina?.schedule?.repeatCondition || 1);
  
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    trigger
  } = useForm({
    resolver: zodResolver(rotinaSchema),
    defaultValues: {
      routine_name: rotina?.routine_name || "",
      template_name: rotina?.template_name || "",
      template_type: rotina?.template_type || "HTML",
      status: rotina?.status || false,
      schedule: {
        repeatType,
        daysOfWeek,
        startDate,
        endType,
        occurrences,
        repeatCondition,
      }
    }
  });
  
    useEffect(() => {
      if (rotina) {
        setRepeatType(rotina.schedule?.repeatType || "diariamente");
        setDaysOfWeek(rotina.schedule?.daysOfWeek || []);
        setStartDate(rotina.schedule?.startDate || "");
        setEndType(rotina.schedule?.endType || "nunca");
        setOccurrences(rotina.schedule?.occurrences || 1);
        setRepeatCondition(rotina.schedule?.repeatCondition || 1);
      }
    }, [rotina]);
  
    const handleDayChange = (day: number) => {
        const newDays = daysOfWeek.includes(day)
          ? daysOfWeek.filter(d => d !== day)
          : [...daysOfWeek, day];
        setDaysOfWeek(newDays);
      };

      const generateCronExpression = () => {
        let cronMinute = "0";
        let cronHour = "0";
        let cronDayOfMonth = "*";
        let cronMonth = "*";
        let cronDayOfWeek = "*";
    
        if (repeatType === "diariamente") {
          cronDayOfWeek = "*";
        } else if (repeatType === "semanalmente" || "mensalmente") {
          cronDayOfWeek = daysOfWeek.length > 0 ? daysOfWeek.join(",") : "*";
        } else if (repeatType === "mensalmente" && startDate) {
          cronDayOfMonth = new Date(startDate).getDate().toString();
          cronDayOfWeek = "*";
        }
    
        if (startDate) {
          const date = new Date(startDate);
          cronDayOfMonth = date.getDate().toString();
          cronMonth = (date.getMonth() +1).toString();
        }
  
        return `${cronMinute} ${cronHour} ${cronDayOfMonth} ${cronMonth} ${cronDayOfWeek}`;
    };

    console.log(generateCronExpression());
    
    const onSubmitHandler = handleSubmit(async (formData: any) => {
        const cronExpression = generateCronExpression();
        const payload = {
        ...formData,
        cron_expression: cronExpression,
        schedule: {
            repeatType,
            daysOfWeek,
            startDate,
            endType,
            occurrences,
            repeatCondition,
        }
    
    }
    
    
        console.log("Dados validados e enviados:", payload);
        await onSubmit(payload);
})
  
    return {
            register,
            handleSubmit: onSubmitHandler,
            control,
            handleDayChange,
            formState: { errors },
            setValue,
            trigger
      };
    };