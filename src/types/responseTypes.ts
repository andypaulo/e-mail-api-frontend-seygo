export interface IDropdownResponse {
  id: number;
  label: string;
  data?: Record<any, null>
}

export interface IDropdownApiResponse {
  data: IDropdownResponse[];
}
