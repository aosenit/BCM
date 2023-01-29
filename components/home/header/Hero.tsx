import React from "react";
import { contain } from "../../../pages/home";
import { Anchor } from "@mantine/core";

const Hero = () => {
  return (
    <div
      className="w-full pt-[120px] lg:grid items-center h-fit lg:h-[calc(100%_-_80px)] text-[14px] lg:text-[14px] py-[3rem] lg:py-0 px-2 lg:px-0"
      id="home"
    >
      <div
        className={`${contain} flex  items-center gap-10 lg:gap-20 w-full flex-col lg:flex-row`}
      >
        <div
          className="h-full lg:flex-1 flex flex-col gap-5 "
          data-aos="fade-right"
        >
          <h3 className="text-[20px] lg:text-[28px] text-[var(--secondaryColor)] uppercase">
            Stand out from the crowd with Merci Brandi Concept (MBC)
          </h3>
          <h1 className="leading-[40px] text-[35px] lg:text-[42px] lg:leading-[50px] capitalize">
            Your one-stop shop for custom branding solutions
          </h1>
          <p className="text-[16px]">
            From clothing, flags, POSM to signage, we will help you create a
            cohesive and consistent brand identity that reflects your unique
            style and values. Let us help you elevate your brand and make a
            lasting impression on your customers.
          </p>
          <div className="flex items-center gap-10">
            <Anchor
              href="#project"
              className="px-8 text-inherit py-3 bg-[var(--secondaryColor)] hover:bg-white hover:text-[var(--secondaryColor)]"
            >
              PROJECTS
            </Anchor>
            <Anchor
              href="#project"
              className="hidden lg:block px-8 py-3 bg-white text-[var(--secondaryColor)] hover:bg-[var(--secondaryColor)] hover:text-white"
            >
              CONTACT
            </Anchor>
          </div>
        </div>

        <div
          className="lg:flex-1 relative w-full  h-[40vh] lg:h-[50vh] lg:w-[40vw] overflow-hidden "
          // data-aos="fade-left"
        >
          <div
            className="absolute w-[53%] h-[80%] bg-yellow-400 top-0 left-0 flex justify-center items-center "
            data-aos="fade-up-left"
          >
            <img
              src="https://images.pexels.com/photos/8171898/pexels-photo-8171898.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[80%] h-[85%] object-cover object-center "
            />
          </div>

          <div
            className="absolute w-[40%] h-[40%] bg-purple-700 top-0 right-0 flex justify-center items-center "
            data-aos="fade-down-left"
          >
            <img
              src="https://images.pexels.com/photos/291536/pexels-photo-291536.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[80%] h-[80%] object-cover object-center "
            />
          </div>

          <div
            className="absolute w-[70%] h-[50%] lg:h-[52%] bg-[var(--secondaryColor)] bottom-4 right-0 flex justify-center items-center "
            data-aos="fade-left"
          >
            <img
              src="https://images.pexels.com/photos/2587175/pexels-photo-2587175.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[85%] h-[80%] object-cover object-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
