import useDropdown from "../../hooks/useDropdown";
import { IDropdownResponse } from "../../types/responseTypes";

interface IProps {
  endpoint: string;
  label: string;
  className: string;
}

const CustomSelect = ({ endpoint, label, className }: IProps) => {
  const { data }: { data: IDropdownResponse[] } = useDropdown(endpoint);
  
  return (
    <div className={className}>
      {label && <label className="text-[#929292] text-[11px]">{label}</label>}
      <select className="border border-[#D9D9D9] p-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#a8a3a3] w-full">
        {data.map((item: IDropdownResponse) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
