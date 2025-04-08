import { z } from "zod";

export const rotinaSchema = z.object({
  id: z.number().optional(),
  routine_name: z.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(50, "Nome não pode exceder 50 caracteres"),
  template_name: z.string().optional(),
  template_type: z.enum(["HTML", "Text"]),
  status: z.boolean(),
  schedule: z.object({
    repeatType: z.enum(["diariamente", "semanalmente", "mensalmente"]),
    daysOfWeek: z.array(z.number().min(0).max(6)).optional()
      .refine(val => val && val.length > 0, {
        message: "Selecione pelo menos um dia para repetição semanal",
        path: ["daysOfWeek"],
      }),
    startDate: z.string().refine(val => !isNaN(new Date(val).getTime()), {
        message: "Data inválida",
      }),
    endType: z.enum(["nunca", "depois"]),
    occurrences: z.number().min(1).optional(),
    repeatCondition: z.number().min(1, "O intervalo deve ser pelo menos 1"),
  }),
});

export type RotinaFormValues = z.infer<typeof rotinaSchema>;
