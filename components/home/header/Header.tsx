import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";
import Hero from "./Hero";
import HeaderMobileNav from "./HeaderMobileNav";

const Header = () => {
  const [opened, setOpened] = useState<any>(false);
  return (
    <header className={``}>
      <div className={`flex justify-between items-center flex-col w-full`}>
        <HeaderTop setOpened={setOpened} />
        <div className="bg-[var(--primaryColor)] text-white w-full lg:h-[calc(100vh_-_80px)]">
          <HeaderNav />
          <HeaderMobileNav opened={opened} setOpened={setOpened} />
          <Hero />
        </div>
      </div>
    </header>
  );
};

export default Header;
