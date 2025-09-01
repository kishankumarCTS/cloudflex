"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../CustomSelect";
import { FaFile } from "react-icons/fa";

const SelectServer = () => {
  const [selectedId, setSelectedId] = useState(0);
  const options = [
    { id: 1, label: "Noida" },
    { id: 2, label: "Bengaluru" },
    { id: 3, label: "Mumbai" },
  ];
  return (
    <div>
      <Select defaultValue="Mumbai">
        <SelectTrigger className="max-w-[180px] bg-themeWhite-900 border-none shadow-md">
          <SelectValue placeholder="Server" />
        </SelectTrigger>
        <SelectContent className="max-w-[180px] bg-themeWhite-900 border-none shadow-md">
          {options.map((item) => (
            <SelectItem key={item.id} value={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectServer;
