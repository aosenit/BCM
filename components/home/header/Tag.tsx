import React from "react";

const Tag = ({ text, icon, title, size = "14px" }: any) => {
  return (
    <div className="flex items-center gap-3">
      <i className={`p-2 bg-[var(--secondaryColor)] text-white text-[${size}]`}>
        {icon}
      </i>
      <div className={" text-[14px]"}>
        <h5 className="text-[var(--secondaryColor)] text-[13px]">{title}</h5>
        <h6>{text}</h6>
      </div>
    </div>
  );
};

export default Tag;
