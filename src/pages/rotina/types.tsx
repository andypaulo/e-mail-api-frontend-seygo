export interface Schedule {
  repeatType: 'diariamente' | 'semanalmente' | 'mensalmente';
  daysOfWeek?: number[];
  startDate: string;
  endType: 'nunca' | 'depois';
  occurrences?: number;
  repeatCondition: number;
}

export interface Rotina {
  id?: number;
  routine_name: string;
  template_name: string;
  template_type: "HTML" | "Text";
  status: boolean;
  schedule: Schedule;
  cron_expression?: string;
}

export interface FormRotinaProps {
  rotina?: Rotina;
  onCancel: () => void;
  onSubmit: (data: Rotina) => Promise<void>;
}