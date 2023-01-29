import { Box, Group, Text } from "@mantine/core";
import React from "react";
import { contain } from "../../../pages/home";
import { FaLocationArrow } from "react-icons/fa";
import { footerData } from "./footerData";

const Footer = () => {
  const list = footerData.map((f: any, index: number) => {
    return <Card key={index} {...f} />;
  });

  return (
    <footer className="bg-[var(--primaryColor)] text-white " id={"contact"}>
      <div className={`${contain} py-5  `} data-aos="fade">
        <Group className="py-2 max-w-md">
          <Box>
            <Text className="text-[var(--secondaryColor)] text-[24px]">
              MERCI BRANDI CONCEPT
            </Text>
            <Text size={"sm"} className="mb-5 mt-2 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              minus molestiae tempora ab impedit optio exercitationem reiciendis
              dolores distinctio inventore.
            </Text>
            {list}
          </Box>
        </Group>

        <Group className="border-t-[1px] border-slate-200  py-3 md:justify-between">
          <nav className="text-[12px] list-none  cursor-pointer ">
            <Group>
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
                <a href="#project">Portfolio</a>
              </li>
            </Group>
          </nav>
          <Box className="md:flex items-center gap-2">
            <Text className="text-[12px]">
              Copyright © Merci Brandin Concept 2023, All rights reserved.
            </Text>
            <Text className="text-[12px] ">
              Designed by{" "}
              <a href="#" className="text-[var(--secondaryColor)]">
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

const Card = ({ icon, text }: any) => {
  return (
    <Group className="my-2 gap-1">
      <Box className="text-[var(--secondaryColor)]">{icon}</Box>
      <Text className="text-[14px]">{text}</Text>
    </Group>
  );
};
