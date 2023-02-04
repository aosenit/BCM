import { Anchor, Box, Group, Text } from "@mantine/core";
import React from "react";
import { contain } from "../../../pages/home";
import { FaLocationArrow } from "react-icons/fa";
import { footerData } from "./footerData";

const Footer = () => {
  const list = footerData.map((f: any, index: number) => {
    return <Card key={index} {...f} />;
  });

  return (
    <footer
      className="bg-[var(--primaryColor)] text-white lg:py-5"
      id={"contact"}
    >
      <div className={`${contain} py-5  `} data-aos="fade">
        <Group className="py-2 max-w-lg">
          <Box>
            <Text className="text-[var(--secondaryColor)] text-[24px]">
              MERCI BRANDIN CONCEPT
            </Text>
            <Text size={"sm"} className="mb-5 mt-2 text-[16px]">
              At Merci Brandi Concept (MBC), our mission is to help businesses
              stand out and make an impact by providing them with custom
              branding solutions that align with their values and resonate with
              their target audience.
            </Text>
            <Text size={"sm"} className="mb-5 mt-2 text-[16px]">
              Our vision is to be recognized as the go-to agency for businesses
              looking to elevate their brand and make a lasting impression in
              the marketplace.
            </Text>
            <div className="my-2"> {list}</div>
          </Box>
        </Group>

        <Group className="border-t-[1px] border-slate-200  py-3 md:justify-between">
          <nav className="text-[14px] list-none  cursor-pointer ">
            <Group className="flex-col items-start lg:flex-row">
              <li className="hover:underline">
                <a href="#home">Home</a>
              </li>
              <li className="hover:underline">
                <a href="#about">About</a>
              </li>
              <li className="hover:underline">
                <a href="#services">Services</a>
              </li>
              <li className="hover:underline">
                <a href="#project">Projects</a>
              </li>
            </Group>
          </nav>
          <Box className="md:flex items-center gap-2">
            <Text className="text-[14px]">
              Copyright © Merci Brandin Concept 2023, All Rights Reserved.
            </Text>
            <Text className="text-[14px] ">
              Designed by{" "}
              <a
                href="tel:+2348068095923"
                className="text-[var(--secondaryColor)]"
              >
                TRAZ
              </a>
            </Text>
          </Box>
        </Group>
      </div>
    </footer>
  );
};

export default Footer;

const Card = ({ icon, text, link }: any) => {
  return (
    <Anchor href={link ? link : "#contact"}>
      <Group className="my-2 gap-2 ">
        <Box className="text-[var(--secondaryColor)]">{icon}</Box>
        <Text className="text-[14px] text-white">{text}</Text>
      </Group>
    </Anchor>
  );
};
