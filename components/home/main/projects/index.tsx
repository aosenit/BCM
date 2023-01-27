import React from "react";
import ProjectMobile from "./ProjectMobile";
import { contain } from "../../../../pages/home";
import Title from "../Title";
import ProjectLarge from "./ProjectLarge";

const Projects = () => {
  return (
    <div className="my-10">
      <div className={`${contain} h-[400px] lg:h-fit`}>
        <div className="text-center mb-5 grid justify-center">
          <Title title={"Recent Work"} subTitle={"Our Latest Project"} />
        </div>
        <ProjectMobile />
        <ProjectLarge />
      </div>
    </div>
  );
};

export default Projects;
