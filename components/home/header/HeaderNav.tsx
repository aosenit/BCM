import React from "react";
import { contain } from "../../../pages/home";
import { Anchor } from "@mantine/core";

const navDatas = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About Us",
  },

  {
    href: "#services",
    title: "Services",
  },
  {
    href: "#project",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const HeaderNav = () => {
  return (
    <nav
      className={`hidden  h-[80px] border-b-[1px] border-gray-700 lg:flex items-center w-full text-[14px]`}
    >
      <div className={`${contain} flex items-center justify-between `}>
        <ul className={` flex items-center gap-8 `}>
          {navDatas.map(({ href, title }, ind) => (
            <Anchor
              key={title}
              href={href}
              className={`${
                ind === 0 && "bg-[var(--secondaryColor)]"
              } w-fit h-[80px] px-3 grid place-content-center hover:bg-[var(--secondaryColor)] transition-all ease-linear cursor-pointer text-white`}
            >
              {title}
            </Anchor>
          ))}
        </ul>
        <Anchor
          href="/projects"
          className="px-4 py-3 bg-[var(--secondaryColor)] text-white hover:bg-white hover:text-[var(--secondaryColor)]"
        >
          VIEW PROJECTS
        </Anchor>
      </div>
    </nav>
  );
};

export default HeaderNav;
