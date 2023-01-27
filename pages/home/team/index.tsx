import React from "react";
import { contain } from "..";
import Title from "../../../components/home/main/Title";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="py-10 my-6">
      <div className={`${contain}  lg:h-fit`}>
        <div className="text-center mb-5 grid justify-center">
          <Title title={"Expert Team"} subTitle={"Creative Team Member"} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-3">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default Team;
