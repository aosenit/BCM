import React from "react";
import Title from "../Title";
import { contain } from "../../../../pages/home";
import { Card } from "@mantine/core";

const guildlines = [
  "Provide us with detailed information about your brand, including your mission, values, and target audience",
  " Share any existing branding materials, such as logos, color schemes, and fonts, that you would like us to use as a starting point",
  "Communicate your budget and timeline constraints so we can provide you with a proposal that aligns with your needs.",
  " Review and provide feedback on our design concepts and revisions in a timely manner to ensure that we stay on track.",
  "Approve the final design before we proceed with production.",
];

const Guildlines = () => {
  const items = guildlines.map((item, i) => (
    <Card
      key={i}
      className="w-full bg-gray-300 rounded-none"
      data-aos="fade-up"
      data-aos-delay={i * 30}
    >
      <p>{item}</p>
    </Card>
  ));
  return (
    <div
      className="w-full overflow-hidden bg-[var(--primaryColor)] text-white lg:h-[100vh] lg:grid lg:place-content-center "
      id="guildlines"
    >
      <div className={`${contain} py-10 lg:grid grid-cols-2 gap-5`}>
        {" "}
        <div className="max-w-[100%] lg:max-w-[90%]">
          <div data-aos="fade-down">
            {" "}
            <Title
              title={"Design Guildline"}
              subTitle={"Our Print Design Guildline"}
            />
          </div>

          <div className="text-[16px]  grid gap-3 my-5">
            <h3
              className="text-[var(--secondaryColor)] text-[22px]"
              data-aos="fade-down"
            >
              Guidelines for working with Merci Brandi Concept (MBC)
            </h3>
            {items}
          </div>
        </div>
        <div
          className="flex flex-col  lg:grid grid-rows-3 grid-flow-col gap-4 lg:h-[60vh]"
          data-aos="fade-left"
        >
          <div className="row-span-2 col-span-2 bg-slate-300 p-2">
            {<GuildImage src="/assets/gif/herogifTwo.gif" />}
          </div>

          <div className="hidden lg:block col-span-4 bg-red-300 p-2 ">
            {<GuildImage src="/assets/newImage/lumosBanner.jpeg" />}
          </div>
          <div className="row-span-1 col-span-2 hidden lg:grid grid-cols-3 gap-2">
            <div className="bg-blue-500 p-1">
              {" "}
              {<GuildImage height={"h-full"} src="/assets/newImage/kn.jpeg" />}
            </div>
            <div className="bg-red-500 p-1">
              {
                <GuildImage
                  height={"h-full"}
                  src="/assets/newImage/jersey.jpeg"
                />
              }
            </div>
            <div className="bg-orange-500 p-1">
              {
                <GuildImage
                  height={"h-full"}
                  src="/assets/newImage/stand.jpeg"
                />
              }
            </div>
          </div>
          <div className="hidden lg:block row-span-1 col-span-2 bg-yellow-300 p-2 mt-2">
            {<GuildImage src="/assets/feb/cupFeb.jpeg" />}
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
