import Image from "next/image";
import Tick from "@/assets/svg/tick.svg";

type Props = {
  iconSrc: string;
  title: string;
  isSelected: boolean;
  className?: string;
};

function OptionButton({
  iconSrc,
  title,
  isSelected = false,
  className,
}: Props) {
  return (
    // TODO: change hex value
    <div
      className={`flex justify-between items-center gap-3 p-3 rounded-[20px] bg-themeBlue-50 ${
        isSelected &&
        "border-2 border-[#2A70F9] shadow-[0_0_10px_0_rgba(0,0,0,0.15)]"
      } ${className}`}
    >
      <div className="flex justify-between items-center gap-3">
        <Image src={iconSrc} alt={`${title} - icon`} width={78} height={78} />
        <span className="title-large text-themeBlack-100">{title}</span>
      </div>
      {isSelected && (
        <div className="py-2 px-1.5 mr-4 bg-themeBlue-300 rounded-[50px]">
          <Image
            src={Tick}
            alt="tick icon"
            width={12}
            height={9}
            className="text-white"
          />
        </div>
      )}
    </div>
  );
}

export default OptionButton;
