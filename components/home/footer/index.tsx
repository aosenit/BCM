import { Box, Group, Text } from "@mantine/core";
import React from "react";
import { contain } from "../../../pages/home";
import { FaLocationArrow } from "react-icons/fa";
import { footerData } from "./footerData";

const Footer = () => {
  const list = footerData.map((f: any, index: number) => {
    return <Card key={index} {...f} />;
  });

  console.log(list);

  return (
    <footer className="bg-[var(--primaryColor)] text-white ">
      <div className={`${contain} py-5`}>
        <Group className="py-2">
          <Box>
            <Text className="text-[var(--secondaryColor)]">MERCI BRANDI</Text>
            <Text size={"sm"} className="mb-5 mt-2 text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              minus molestiae tempora ab impedit optio exercitationem reiciendis
              dolores distinctio inventore.
            </Text>
            {list}
          </Box>
        </Group>

        <Group className="border-t-[1px] border-slate-200 py-3">
          <nav className="text-[11px] list-none hover:underline cursor-pointer hover:text-[var(--secondaryColor)]">
            <Group>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </Group>
          </nav>
          <Box>
            <Text className="text-[11px]">
              Copyright © Merci Brandin Concept 2023, All rights reserved.
            </Text>
            <Text className="text-[11px] ">
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
      <Text className="text-[12px]">{text}</Text>
    </Group>
  );
};
