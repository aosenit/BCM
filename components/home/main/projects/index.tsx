import React from "react";
import ProjectMobile from "./ProjectMobile";
import { contain } from "../../../../pages/home";
import Title from "../Title";
import ProjectLarge from "./ProjectLarge";

const Projects = () => {
  return (
    <div className="py-10" id="project">
      <div className={`${contain} h-[400px] lg:h-fit`}>
        <div className="lg:text-center mb-5 grid lg:justify-center">
          <Title title={"Recent Work"} subTitle={"Our Latest Project"} />
        </div>
        <ProjectMobile />
        <ProjectLarge />
      </div>
    </div>
  );
};

export default Projects;
