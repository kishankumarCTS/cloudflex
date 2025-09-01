// components/ProgressBar.tsx
import React from "react";

// Define the props interface for the component
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  stepLabels,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      {Array.from({ length: totalSteps }, (_, index) => {
        const step = index + 1;
        const isCurrent = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <React.Fragment key={step}>
            {/* Step Circle and Line */}
            <div
              className={`relative flex-grow flex items-center ${
                step === totalSteps ? "flex-grow-0" : ""
              }`}
            >
              {/* Step Circle */}
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${isCompleted ? "bg-blue-600" : "bg-white border-2"}
                  ${isCurrent ? "border-blue-600" : "border-gray-300"}
                `}
              >
                {/* Inner Content */}
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300
                      ${isCurrent ? "bg-blue-600" : "bg-gray-400"}
                    `}
                  ></div>
                )}
              </div>

              {/* Connecting Line */}
              {step < totalSteps && (
                <div
                  className={`flex-grow h-1 transition-colors duration-300
                    ${isCompleted ? "bg-blue-600" : "bg-gray-300"}
                  `}
                ></div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
