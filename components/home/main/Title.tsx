import React from "react";

const Title = ({ title, subTitle }: any) => {
  return (
    <div className="lg:w-[60ch]">
      <h3 className="text-[25px] text-[var(--secondaryColor)]">{title}</h3>
      <h2 className="text-[28px]">{subTitle}</h2>
    </div>
  );
};

export default Title;
