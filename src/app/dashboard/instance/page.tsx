import React from "react";
import { FaCheck } from "react-icons/fa6";

import InputField from "@/components/ui/FloatingInput";
import StepIndicator from "@/StepIndicator";

import { stepIndicators } from "./constants";
import BootSourceTabs from "./BootSourceTabs";
import StorageAndFlavour from "./StorageAndFlavour";

const Instance = () => {
  return (
    <div>
      <h2 className="headline-small font-[500]">Create Instance</h2>
      <div className="flex flex-col gap-[18px] mt-4">
        {stepIndicators.map((step, index) => (
          <StepIndicator key={index} {...step} />
        ))}
      </div>
      <div className="p-6 rounded-[30px] border-[3px] border-themeBlue-500 bg-themeWhite-900 mt-7 relative">
        <h3 className="headline-small">Give Instance a Name</h3>
        <InputField
          className="max-w-[544px] mt-4 placeholder:font-regular"
          placeholder="Instance name..."
        />
        <div className="text-themeBlue-900 flex items-center justify-center w-8 aspect-square rounded-full bg-success absolute top-6 right-6">
          <FaCheck />
        </div>
      </div>
      <div className="p-6 rounded-[30px] border-[3px] border-themeBlue-500 bg-themeWhite-900 mt-7">
        <h3 className="headline-small">Source</h3>
        <h3 className="headline-small">Boot Securely From</h3>
        <BootSourceTabs />
      </div>
      <StorageAndFlavour />
    </div>
  );
};

export default Instance;
