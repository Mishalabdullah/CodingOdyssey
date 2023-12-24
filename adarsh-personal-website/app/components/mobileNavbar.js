"use client";
import { useState } from "react";
import PageComponent from "./pagecard";
export default function MobileNabar() {
  const [isOpen, setIsOpen] = useState(false);
  const ButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:hidden  inline-block p-2 z-50  w-10 h-8 fixed bottom-4 right-4">
      <button onClick={ButtonClick}>
        <img src="./mobileNavbar.png"></img>
      </button>
      {isOpen && (
        <div className="fixed inset-0  bg-[#000] opacity-90 items-center justify-center">
          <PageComponent pageName="Home" pageLink="/" />
          <PageComponent pageName="Works" pageLink="/works" />
          <PageComponent pageName="About Me" pageLink="/about-me" />
          <PageComponent pageName="Contact" pageLink="/contact" />
          <div className="md:hidden inline-block p-2 z-50  w-12 h-12 fixed bottom-4 right-4">
            <button onClick={ButtonClick}>
              <img src="./mobileNavbar.png"></img>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
