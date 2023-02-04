import { Image } from "@mantine/core";
import React from "react";

interface IProjectData {
  className: string;
  src: string;
}
export const projectData: IProjectData[] = [
  {
    className: "bg-stone-700",
    src: "/assets/feb/cupFeb.jpeg",
  },
  {
    className: "bg-yellow-400 row-span-2",
    src: "/assets/feb/3xPOSMFeb.jpeg",
  },
  {
    className: "bg-yellow-500",
    src: "/assets/feb/busFeb.jpeg",
  },
  {
    className: "bg-orange-400 row-span-2",
    src: "/assets/feb/chivContainerFeb.jpeg",
  },
  {
    className: "bg-yellow-200 ",
    src: "/assets/feb/mtnStandFeb.jpeg",
  },
  {
    className: "bg-blue-100",
    src: "/assets/feb/febBanner.jpeg",
  },
  {
    className: "bg-red-500",
    src: "/assets/feb/umbrellaFeb.jpeg",
  },
  {
    className: "bg-stone-700 col-span-2",
    src: "/assets/feb/chiSideCarFeb.jpeg",
  },
  {
    className: "bg-yellow-500",
    src: "/assets/feb/topFeb.jpeg",
  },
];

const ProjectLarge = () => {
  const lists = projectData.map((data: IProjectData, index: number) => {
    return (
      <div
        className={`${data.className} grid place-content-center p-4 relative h-full overflow-hidden`}
        key={index}
      >
        <img
          alt="latest project image"
          className="object-contain absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[90%] w-[90%]"
          src={data.src}
        />
      </div>
    );
  });
  return (
    <div
      className="hidden lg:grid h-[80vh]  grid-cols-4 grid-rows-3 bg-yellow-300"
      data-aos="zoom-in"
    >
      {lists}
    </div>
  );
};

export default ProjectLarge;
