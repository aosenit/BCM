import { Drawer, Button, Group, NavLink, Box, Anchor } from "@mantine/core";
import { useState } from "react";
import {
  MdBook,
  MdContacts,
  MdFeaturedPlayList,
  MdHome,
  MdInfo,
  MdPeople,
  MdRoomService,
  MdWork,
} from "react-icons/md";

const data = [
  { icon: <MdHome />, label: "Home", link: "#home" },
  { icon: <MdInfo />, label: "About Us", link: "#about" },
  { icon: <MdFeaturedPlayList />, label: "Features", link: "#features" },
  { icon: <MdBook />, label: "Guildlines", link: "#guildlines" },
  { icon: <MdRoomService />, label: "Services", link: "#services" },
  { icon: <MdWork />, label: "Project", link: "#project" },
  { icon: <MdPeople />, label: "Team", link: "#team" },
  { icon: <MdContacts />, label: "Contact", link: "#contact" },
];

export default function HeaderMobileNav({ opened, setOpened }: any) {
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => {
    return (
      <Anchor key={index} href={item.link} className="bg-green-200">
        <NavLink
          key={item.label}
          active={index === active}
          label={item.label}
          icon={item.icon}
          color={"red"}
          p={15}
          //   link={item.link}
          onClick={() => {
            setActive(index);
            setOpened(false);
          }}
          mt={10}
        />
      </Anchor>
    );
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        padding="xl"
        size="full"
      >
        <Box className="w-full lg:hidden ">{items}</Box>
      </Drawer>
    </>
  );
}
