import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderNav from "./HeaderNav";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className={``}>
      <div className={`flex justify-between items-center flex-col w-full`}>
        <HeaderTop />
        <div className="bg-[var(--primaryColor)] text-white w-full lg:h-[calc(100vh_-_80px)]">
          <HeaderNav />
          <Hero />
        </div>
      </div>
    </header>
  );
};

export default Header;
