import React from "react";
import { contain } from "../../../../pages/home";
import Title from "../Title";
import { useRouter } from "next/router";
import { Anchor } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    image: "https://www.mercibrandin.com/assets/newImage/flagService.jpeg",
    title: "Custom Flags",
    content: "Flying Banner, Flagpole, Telescope, Pop flag, Street flag",
    bg: "bg-red-500",
    link: "flag",
  },
  {
    image: "https://www.mercibrandin.com/assets/newImage/capOne.jpeg",
    title: "Branding ",
    content:
      "Interior and Exterior, Promotional & Corperate Gifts, Merchandizing",
    bg: "bg-yellow-500",
    link: "branding",
  },
  {
    image: "https://www.mercibrandin.com/assets/newImage/signageService.jpeg",
    title: "Signage",
    content: "Pylon (freestanding), Fascia (wall sign), Flange (hanging sign)",
    bg: "bg-red-100",
    link: "signage",
  },
  {
    image: "https://www.mercibrandin.com/assets/newImage/posmService.jpeg",
    title: "POSM",
    content: "Tents, Boards, Banners, Frames",
    bg: "bg-yellow-500",
    link: "posm",
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <section
      className="bg-gray-200 py-12 lg:h-[100vh] lg:grid place-content-center "
      id="services"
    >
      <div className={`${contain} flex flex-col lg:items-center `}>
        <div
          className="text-3xl font-medium lg:text-center mb-8"
          data-aos="fade-down"
        >
          <Title title={"Our Services"} subTitle={"Explore what we render"} />
        </div>
        <div className="flex flex-wrap lg:grid grid-cols-4 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full cursor-pointer "
              data-aos="fade-up"
              data-aos-delay={`${index * 30}`}
              onClick={() => router.push(`projects#${service.link}`)}
            >
              <div className=" mb-8 h-[300px] bg-gray-100 flex flex-col mx-2 max-w-sm p-6 relative">
                <div
                  className={`flex-[.6] grid place-content-center  ${service.bg} `}
                >
                  <img
                    className="w-full object-contain object-center h-[100px] "
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <div className="flex-[.5]  flex flex-col justify-center lg:text-center">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-700 text-[16px]">{service.content}</p>
                  <Anchor
                    href={`projects#${service.link}`}
                    className="text-[14px] absolute bottom-2 right-2 flex text-[var(--primaryColor)] gap-2 items-center"
                  >
                    See more <FaArrowRight />
                  </Anchor>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
