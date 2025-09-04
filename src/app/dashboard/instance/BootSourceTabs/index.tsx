"use client";

import React, { useState } from "react";
import { bootOptions } from "../constants";
import OptionButton from "@/components/ui/OptionButton";
import OsTab from "./OsTab";
import SnapshotTab from "./SnapShotTab";
import VolumeTab from "./VolumeTab";
import CustomImageTab from "./CustomImageTab";

const BootSourceTabs = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const handleSelect = (id: number) => {
    setSelectedOption(id);
  };
  return (
    <div>
      <div className="flex gap-3 cursor-pointer my-4">
        {bootOptions.map((option, index) => (
          <OptionButton
            key={index}
            {...option}
            isSelected={selectedOption === option.id}
            onClick={() => handleSelect(option.id)}
          />
        ))}
      </div>
      {selectedOption === 1 && <OsTab />}
      {selectedOption === 2 && <SnapshotTab />}
      {selectedOption === 3 && <VolumeTab />}
      {selectedOption === 4 && <CustomImageTab />}
    </div>
  );
};

export default BootSourceTabs;
