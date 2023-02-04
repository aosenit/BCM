import React from "react";
import { contain } from "../../../pages/home";
import { headerTag } from "../../../data/headerTag";
import Tag from "./Tag";
import { CgMenuGridO } from "react-icons/cg";
import { Anchor } from "@mantine/core";
import Image from "next/image";

const HeaderTop = ({ setOpened }: any) => {
  return (
    <div className={`  bg-white w-full z-10 fixed lg:static top-0 left-0`}>
      <div className={`${contain} flex justify-between items-center h-[80px]`}>
        <Anchor href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/merciLogo.png"
            alt="mbc logo"
            width={35}
            height={35}
          />
          <span className="hidden md:block text-[var(--primaryColor)] text-2xl font-extrabold">
            M <span className="text-[var(--secondaryColor)]">B</span> C
          </span>
        </Anchor>
        <CgMenuGridO
          className="text-[30px] lg:hidden"
          onClick={() => setOpened(true)}
        />
        <div className="hidden lg:flex items-center gap-3">
          {headerTag.map((h) => {
            return (
              <div className="" key={h.title}>
                {h.href ? (
                  <Anchor href={h.href}>
                    <Tag {...h} />
                  </Anchor>
                ) : (
                  <div>
                    {" "}
                    <Tag {...h} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
