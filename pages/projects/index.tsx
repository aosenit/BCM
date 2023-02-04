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
    src: "/assets/newImage/stand.jpeg",
    title: "American Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/newImage/spaghettiStand.jpeg",
    title: "Guinea Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/rubPOSMFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/comartPOSMFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/3xPOSMFeb.jpeg",
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
    src: "/assets/feb/apronFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/capFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/cupFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/kiaBagFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/topFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/feb/umbrellaFeb.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/newImage/Jersey.jpeg",
    title: "France Flag",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/assets/newImage/capOne.jpeg",
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
          className="mt-3 max-w-sm h-[400px] p-4"
          data-aos="fade-up"
          data-aos-delay={index * 30}
        >
          <Image src={src} alt={title} fit="contain" height={300} />
          <Box className="">
            {/* <h3>{title}</h3>
            <p className="">{desc}</p> */}
          </Box>
        </Card>
      );
    });
  return (
    <div>
      <div
        className={`bg-white h-[80px] flex items-center fixed w-full top-0 left-0 z-10 `}
      >
        <Group className={`${contain} `}>
          <Anchor
            href="/"
            className="flex items-center text-[var(--primaryColor)]"
          >
            <Image
              src="/assets/images/merciLogo.png"
              alt="mbc logo"
              width={30}
            />
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
          <div className="min-h-[100vh] my-5 " id="flag">
            <h2 className="text-[30px] font-bold lg:flex justify-center mb-2">
              Flag
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(flag)}
            </div>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center"></div>
          </div>
          <div className="min-h-[100vh] my-5" id="posm">
            <h2 className="text-[30px] font-bold  lg:flex justify-center mb-2">
              POSM
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(posm)}
            </div>
          </div>
          <div className="min-h-[100vh] my-5" id="signage">
            <h2 className="text-[30px] font-bold  lg:flex justify-center mb-2">
              Signage
            </h2>
            <div className="lg:flex gap-5 flex-wrap lg:justify-center">
              {items(signage)}
            </div>
          </div>
          <div className="min-h-[100vh] mb-5" id="branding">
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
