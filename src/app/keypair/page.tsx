"use client";

import { useState } from "react";
import KeyPair from "@/components/Modals/Keypair";
import { KeyPairFormData } from "@/components/pages/KeyPair/types";

export default function KeyPairPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: KeyPairFormData) => {
    console.log("Key Pair Form Data:", data);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Create Key Pair
      </button>

      <KeyPair
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
