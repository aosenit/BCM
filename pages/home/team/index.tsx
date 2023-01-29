import React from "react";
import { contain } from "..";
import Title from "../../../components/home/main/Title";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="py-10 my-6" id="team">
      <div className={`${contain}  lg:h-fit`}>
        <div
          className="lg:text-center mb-5 grid lg:justify-center"
          data-aos="fade-down"
        >
          <Title title={"Expert Team"} subTitle={"Creative Team Member"} />
        </div>
        <div
          className="flex flex-col lg:flex-row justify-center gap-3"
          data-aos="flip-right"
        >
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default Team;
