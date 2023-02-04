import React from "react";
import { contain } from "../../../../pages/home";
import Tag from "../../header/Tag";
import { BsPerson } from "react-icons/bs";
import { GiPirateCannon } from "react-icons/gi";

const About = () => {
  return (
    <div className="py-14 pb-20" id="about">
      <div
        className={`${contain} flex flex-col-reverse  gap-10 lg:gap-20 lg:py-20  lg:flex-row `}
      >
        <div className="relative h-[40vh] flex-1">
          <img
            src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full object-cover object-center h-[90%]"
            data-aos="zoom-in"
          />

          <img
            src="https://media.istockphoto.com/id/1140385944/photo/books-of-advertising-and-branding-in-front-grey-wall.jpg?b=1&s=612x612&w=0&k=20&c=y-_jfqHXji9Vlyj8WmJprtN4xtzDig95xcVBxzUGHSE="
            alt=""
            className="w-[60%] absolute object-cover object-left right-0 bottom-[-40px] h-[50%]"
            data-aos="zoom-out"
          />
        </div>

        <div
          className=" lg:mt-0 text-[16px] flex flex-col gap-3 flex-1"
          data-aos="fade-up"
        >
          <h3 className="text-[25px] text-[var(--secondaryColor)]">About Us</h3>
          <div className="lg:w-[60ch]">
            <h2 className="leading-[40px] text-[35px] lg:text-[46px] lg:leading-[50px] mb-3">
              About Merci Brandin Concept (MBC)
            </h2>
            <p>
              Merci Brandin Concept (MBC) is a full-service branding agency that
              specializes in creating custom branding solutions for businesses
              of all sizes. Our services include Branding, POSM, Flags, and
              Signage. Whether you are looking to refresh your existing brand or
              create a new one from scratch, we have the expertise and
              experience to help you achieve your goals.
            </p>
          </div>
          <div className="flex flex-col w-[80%] gap-4 mt-5">
            <Tag
              text={
                "We have a team of experts who use the latest tools and technologies"
              }
              title={"Our Expert Staffs"}
              icon={<BsPerson />}
              size="30px"
            />
            <Tag
              text={
                "We have the best tools and technologies tailored for your every need"
              }
              title={"Best Tools"}
              icon={<GiPirateCannon />}
              size="30px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
