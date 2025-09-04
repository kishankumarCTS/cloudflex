import React from "react";
import { IconAndTextProps } from "./types";
import Image from "next/image";

const IconAndText = ({ onClick, svgIconSrc, title }: IconAndTextProps) => {
  return (
    <div
      className="flex gap-[18px] items-center px-[18px] py-4 rounded-2xl bg-themeBlue-50 w-full cursor-pointer"
      onClick={onClick}
    >
      <Image src={svgIconSrc} alt="switch icon" />
      <p className="title-large">{title}</p>
    </div>
  );
};

export default IconAndText;
