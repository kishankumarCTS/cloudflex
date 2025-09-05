"use client";

import { useState } from "react";
import SecurityGroupModal from "@/components/Modals/SecurityGroup";
import { SecurityGroupFormData } from "@/components/pages/SecurityGroup/types";

export default function SecurityGroupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: SecurityGroupFormData) => {
    console.log("Security Group Form Data:", data);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Create Security Group
      </button>

      <SecurityGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
