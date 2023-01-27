import React from "react";
import { contain } from "../../../pages/home";

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
    href: "#portfolio",
    title: "Portfolio",
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
            <li
              key={title}
              className={`${
                ind === 0 && "bg-[var(--secondaryColor)]"
              } w-fit h-[80px] px-3 grid place-content-center hover:bg-[var(--secondaryColor)] transition-all ease-linear cursor-pointer`}
            >
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
        <button className="px-4 py-3 bg-[var(--secondaryColor)]">
          SEE PRODUCTS
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav;
