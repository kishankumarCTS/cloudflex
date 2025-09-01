import ProgressBar from "@/components/ui/ProgressBar";
import React from "react";

const page = () => {
  const totalSteps = 5;
  const currentStep = 2;
  const stepLabels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="w-full bg-red-100">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />
    </div>
  );
};

export default page;
