"use client";

import React from "react";
import IconAndText from "../../IconAndText";
import switchSvg from "@/assets/svg/switch.svg";
import switchStackSvg from "@/assets/svg/switchStack.svg";

const StorageAndFlavourCta = () => {
  const handleAddNewVolume = () => {};
  const handleExistingVolume = () => {};
  return (
    <div className="flex items-center gap-3">
      <IconAndText
        title="Add a new volume"
        onClick={() => handleAddNewVolume()}
        svgIconSrc={switchSvg}
      />
      <IconAndText
        title="Select from existing volume"
        onClick={() => handleExistingVolume()}
        svgIconSrc={switchStackSvg}
      />
    </div>
  );
};

export default StorageAndFlavourCta;
