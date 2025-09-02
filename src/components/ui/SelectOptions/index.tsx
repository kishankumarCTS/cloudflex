import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../CustomSelect/index";
type Option = {
  id: number;
  label: string;
};

type Props = {
  options: Option[];
  defaultValue?: string;
  className?: string;
};

const SelectOptions = ({ options, defaultValue, className }: Props) => {
  return (
    <div className={`w-full cursor-pointer ${className}`}>
      <Select defaultValue={defaultValue ?? options?.[0].label}>
        {/* TODO: this had bg theme blue 50 but it is showing blue color instead of white that is in design */}
        <SelectTrigger className="w-[100%] py-1.5 px-3 title-small text-[#0E1726] text-opacity-80 bg-white rounded-[100px] border-none shadow-md truncate">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent className="w-full title-small text-[#0E1726] text-opacity-80 truncate bg-themeWhite-900 border-none shadow-md">
          {options.map((item) => (
            <SelectItem key={item.id} value={item.label} className="text-wrap">
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectOptions;
