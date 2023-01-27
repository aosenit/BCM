import React from "react";
import {
  FaPencilRuler,
  FaPaintBrush,
  FaStore,
  FaToolbox,
} from "react-icons/fa";

const FeatureCard = ({ icon, title, content }: any) => (
  <div className="max-w-sm min-h-[200px] rounded overflow-hidden shadow-lg my-2 w-full">
    <div className="px-6 py-4">
      <div className="flex items-center mb-2">
        {icon === "FaPencilRuler" && (
          <FaPencilRuler
            size={30}
            className="text-[var(--primaryColor)] mr-4"
          />
        )}
        {icon === "FaPaintBrush" && (
          <FaPaintBrush size={30} className="text-[var(--primaryColor)] mr-4" />
        )}
        {icon === "FaStore" && (
          <FaStore size={30} className="text-[var(--primaryColor)] mr-4" />
        )}
        {icon === "FaToolbox" && (
          <FaToolbox size={30} className="text-[var(--primaryColor)] mr-4" />
        )}
        <div className="font-medium text-lg text-[var(--primaryColor)]">
          {title}
        </div>
      </div>
      <p className="text-gray-700 text-[14px] mt-2">{content}</p>
    </div>
  </div>
);

export default FeatureCard;
