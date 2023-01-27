import React from "react";
import { contain } from "../../../../pages/home";
import Tag from "../../header/Tag";
import { BsPerson } from "react-icons/bs";
import { GiPirateCannon } from "react-icons/gi";

const About = () => {
  return (
    <div className="py-10">
      <div className={`${contain} lg:flex gap-20 lg:py-40  `}>
        <div className="relative h-[40vh] flex-1">
          <img
            src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full object-cover object-center h-[90%]"
          />

          <img
            src="https://media.istockphoto.com/id/1140385944/photo/books-of-advertising-and-branding-in-front-grey-wall.jpg?b=1&s=612x612&w=0&k=20&c=y-_jfqHXji9Vlyj8WmJprtN4xtzDig95xcVBxzUGHSE="
            alt=""
            className="w-[60%] absolute object-cover object-left right-0 bottom-[-40px] h-[50%]"
          />
        </div>

        <div className="mt-20 lg:mt-0 text-[14px] flex flex-col gap-3 flex-1">
          <h3 className="text-[25px] text-[var(--secondaryColor)]">About Us</h3>
          <div className="lg:w-[60ch]">
            <h2 className="text-[28px] leading-8 mb-3">
              Realizing Your Art & Design Become Real Product
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga,
              nam ad similique iure reprehenderit iste dolor sint est labore.
            </p>
          </div>
          <div className="flex flex-col w-[80%] gap-4 mt-5">
            <Tag
              text={
                "nam ad similique iure reprehenderit iste dolor sint est labore"
              }
              title={"Our Expert Staffs"}
              icon={<BsPerson />}
              size="25px"
            />
            <Tag
              text={
                "nam ad similique iure reprehenderit iste dolor sint est labore"
              }
              title={"Our Expert Staffs"}
              icon={<GiPirateCannon />}
              size="25px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
