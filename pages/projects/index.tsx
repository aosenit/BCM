import React, { useEffect, useState } from "react";
import { contain } from "../home";
import { Anchor, Box, Card, Group, Image } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import Title from "../../components/home/main/Title";
import Footer from "../../components/home/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const flag = [
  {
    src: "https://www.expandasign.co.uk/wp-content/uploads/2019/07/categories-flag-banners.png",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl_fNSxg4cJSAn98xf_0c0DnAiXLmjulSp91oYAAh6knObuQfGdCBLEwBcbxlmsyAT-M&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoRBoDGY7O3M1m_ML8ocC-QarTVGFhhg2p0iVWHFAUJ6YsZ7i9sK12M25IdfGgH7FiIU&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ap2cTKld_mPA7gPLjSasZLGbuvFGT0G7VDe1Nqumvd5U_fQvnvn1eYzOIRHdBunRduM&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyExaEyaqdUTFWAQ9zeSShAOE-gDAvEbPyfDHnyQTMV_eTdfnHn2cG773siqVOEBSAXIU&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];
const posm = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojsT3NGDSxs21qS6Z7xH1DFtL-0z0ZZJC6w&usqp=CAU",
    title: "American Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbW5f-NvWCyvfF_3TKfkJnPnAzFDlXEYREFR60BwyD77pgVcrMAM6w155uToDxRLio08&usqp=CAU",
    title: "Guinea Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYEe4WiqDwL0GBVCcQ2gqq76TR3fJbRdOenS9AXM0igMXPUwklfoeyaWDJWuUeiiZXNc&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const signage = [
  {
    src: "https://abbakin.com/wp-content/uploads/2020/07/Office-Indoor-Outdoor-Signage-Company-1024x1024.jpg",
    title: "American Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9el320fKo0bQyeHJ2_YheF1OrHBvceeEedMaTtgv2YduAXEsXHyB8uOypN700e3Wb-Y&usqp=CAU",
    title: "Guinea Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QLIjRrvCFe9-rfvmw_Kh-cIDKdbd8M_qiHNUzf1OPgqLOO4DbDUa1WpnPb0t6e8wkls&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCbgyk--Vl9P3JKD2tMFDVi5YXq44mOQu0cUv7XuPgChQ62ywptKWfvvUeHu9aRprj_s&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const branding = [
  {
    src: "https://hazken.com/assets/images/bg/branded_screen_printing_shirt.jpg",
    title: "American Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaYZwFvJ_DJvO9FwLFYVLNRh1LMvvG_PwpkcGZJ8_Ol_KC47H8fwxD0LuTtXf2UwgEio&usqp=CAU",
    title: "Guinea Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://quikprint.ng/wp-content/uploads/2019/07/embroidered-cap.jpg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHVHMSBeABjiwPg8gip8cuAjTtOzpn7Dr0p64W2ZXM17yLLOelQPm7mm4MYmYC_pNjkE&usqp=CAU",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const AllProduct = () => {
  useEffect(() => {
    AOS.init({
      delay: 100 || "100", // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "linear", // default easing for AOS animations
    });
  }, []);
  const items = (d: any) =>
    d.map(({ src, title, desc }: any, index: number) => {
      return (
        <Card
          key={index}
          className="mt-3 max-w-sm"
          data-aos="fade-up"
          data-aos-delay={index * 30}
        >
          <Image src={src} alt={title} fit="contain" />
          <Box className="pt-5">
            <h3>{title}</h3>
            <p className="">{desc}</p>
          </Box>
        </Card>
      );
    });
  return (
    <div>
      <div
        className={`bg-white h-[80px] flex items-center fixed w-full top-0 left-0 z-10`}
      >
        <Group className={`${contain} `}>
          <Anchor
            href="/#services"
            className="flex items-center text-[var(--primaryColor)]"
          >
            {" "}
            <span className="mr-2">
              <FaArrowLeft />
            </span>{" "}
            Go Back
          </Anchor>
        </Group>
      </div>
      <div className={`${contain} py-[80px]`}>
        <div
          className="py-10 lg:text-center lg:flex lg:justify-center"
          data-aos="fade"
        >
          <Title title="Projects" subTitle="View Our Amazing Projects" />
        </div>
        <div className="">
          <div className="min-h-[50vh] my-5 " id="flag">
            <h2 className="text-[30px] font-bold lg:flex justify-center mb-2">
              Flag
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(flag)}
            </div>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center"></div>
          </div>
          <div className="min-h-[50vh] my-5" id="posm">
            <h2 className="text-[30px] font-bold  lg:flex justify-center mb-2">
              POSM
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(posm)}
            </div>
          </div>
          <div className="min-h-[50vh] my-5" id="signage">
            <h2 className="text-[30px] font-bold  lg:flex justify-center mb-2">
              Signage
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(signage)}
            </div>
          </div>
          <div className="min-h-[50vh] mb-5" id="branding">
            <h2 className="text-[30px] font-bold  lg:flex justify-center mb-2">
              Branding
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(branding)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;
