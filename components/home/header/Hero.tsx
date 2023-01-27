import React from "react";
import { contain } from "../../../pages/home";

const Hero = () => {
  return (
    <div className="w-full pt-[160px] lg:grid items-center h-fit lg:h-[calc(100%_-_80px)] text-[12px] lg:text-[14px] py-[3rem] lg:py-0 px-2 lg:px-0">
      <div
        className={`${contain} flex  items-center gap-10 lg:gap-20 w-full flex-col lg:flex-row`}
      >
        <div className="h-full lg:flex-1 flex flex-col gap-5 ">
          <h3 className="text-[18px] lg:text-[28px] text-[var(--secondaryColor)]">
            We Bring you the best Designs with Technology
          </h3>
          <h1 className="leading-[40px] text-[30px] lg:text-[46px] lg:leading-[50px]">
            The Best Copying and Printing Center
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            vero officia odio, possimus cupiditate iste numquam rerum dolor.
          </p>
          <div className="flex items-center gap-10">
            <button className="px-8 py-3 bg-[var(--secondaryColor)] hover:bg-white hover:text-[var(--secondaryColor)]">
              READ MORE
            </button>
            <button className="hidden lg:block px-8 py-3 bg-white text-[var(--secondaryColor)] hover:bg-[var(--secondaryColor)] hover:text-white">
              ABOUT US
            </button>
          </div>
        </div>

        <div className="lg:flex-1 relative w-full  h-[40vh] lg:h-[50vh] lg:w-[40vw] overflow-hidden ">
          <div className="absolute w-[52%] h-[80%] bg-yellow-400 top-0 left-0 flex justify-center items-center ">
            <img
              src="https://images.pexels.com/photos/8171898/pexels-photo-8171898.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[70%] h-[70%] object-cover object-center "
            />
          </div>

          <div className="absolute w-[40%] h-[40%] bg-purple-700 top-0 right-0 flex justify-center items-center ">
            <img
              src="https://images.pexels.com/photos/291536/pexels-photo-291536.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[70%] h-[70%] object-cover object-center "
            />
          </div>

          <div className="absolute w-[70%] h-[50%] lg:h-[52%] bg-[var(--secondaryColor)] bottom-4 right-0 flex justify-center items-center ">
            <img
              src="https://images.pexels.com/photos/2587175/pexels-photo-2587175.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[70%] h-[70%] object-cover object-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
