export interface IDropdownResponse {
  id: number;
  label: string;
  data?: Record<any, null>
}

export interface IDropdownApiResponse {
  data: IDropdownResponse[];
}

export interface SMTPFormData {
  connection_name: string;
  host: string;
  port: number;
  secure: boolean;
  tls_enabled: boolean;
  reject_unauthorized: boolean;
  from_address: string;
  from_name: string;
  status: boolean;
}