import React from "react";
import Title from "../Title";
import { contain } from "../../../../pages/home";

const Guildlines = () => {
  return (
    <div
      className="bg-[var(--primaryColor)] text-white lg:min-h-[70vh] lg:grid lg:place-content-center"
      id="guildlines"
    >
      <div className={`${contain} py-10 lg:grid grid-cols-2 gap-5`}>
        {" "}
        <div className="max-w-[90%]">
          <Title
            title={"Design Guildline"}
            subTitle={"Our Print Design Guildline"}
          />
          <div className="text-[14px]  grid gap-3 my-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam magni labore et ratione aperiam necessitatibus, quibusdam
              quos nihil vitae? Id nobis delectus reprehenderit vitae aperiam
              perferendis, itaque dicta ipsa sapiente fugiat quo corrupti
              quibusdam voluptas accusamus assumenda consequuntur ut.
            </p>
            <p className="text-[var(--secondaryColor)]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam magni labore et ratione aperiam necessitatibus, quibusdam
              quos nihil
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam magni labore et ratione aperiam necessitatibus, quibusdam
              quos nihil vitae? Id nobis delectus reprehenderit vitae aperiam
              perferendis, itaque dicta ipsa sapiente fugiat quo corrupti
              quibusdam voluptas accusamus assumenda consequuntur ut.
            </p>
          </div>
        </div>
        <div className="flex flex-col  lg:grid grid-rows-3 grid-flow-col gap-4 lg:h-[40vh]">
          <div className="row-span-2 col-span-2 bg-slate-300 p-2">
            {<GuildImage />}
          </div>

          <div className="col-span-4 bg-red-300 p-2">{<GuildImage />}</div>
          <div className="row-span-1 col-span-2 hidden lg:grid grid-cols-3 gap-2">
            <div className="bg-blue-500 p-1">
              {" "}
              {<GuildImage height={"h-full"} />}
            </div>
            <div className="bg-red-500 p-1">
              {<GuildImage height={"h-full"} />}
            </div>
            <div className="bg-orange-500 p-1">
              {<GuildImage height={"h-full"} />}
            </div>
          </div>
          <div className="row-span-1 col-span-2 bg-yellow-300 p-2">
            {<GuildImage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guildlines;

export const GuildImage = ({ src, height }: any) => {
  return (
    <img
      src={
        src ||
        "https://images.pexels.com/photos/5473927/pexels-photo-5473927.jpeg?auto=compress&cs=tinysrgb&w=1600"
      }
      alt=""
      className={`w-full ${
        height || "h-[300px]"
      } lg:h-full object-cover object-top`}
    />
  );
};
