"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import english from "@/data/en.json";
import spanish from "@/data/es.json";
import portuguese from "@/data/pt.json";
import { X } from "phosphor-react";

interface NavigationTypes {
  id: number;
  title: string;
}

interface ItemTypes {
  id: number;
  title: string;
}

export function Navbar() {
  const [lang, setLang] = useState(portuguese);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indexMenu, setIndexMenu] = useState(0);

  const selectLang = (lang: string) => {
    switch (lang) {
      case "english":
        setLang(english);
        break;
      case "spanish":
        setLang(spanish);
        break;
      case "portuguese":
        setLang(portuguese);
        break;
      default:
        setLang(english);
        break;
    }
  };

  const handleToggleLang = async (index: number) => {
    if (isMenuOpen && indexMenu === index) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIndexMenu(index);
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="mb-8 relative">
      <div className="flex w-full px-4 items-center justify-between container mx-auto py-4 ">
        <div className="">
          <Image
            src="/lgs/affinity_branco.png"
            alt="Affinity"
            width={200}
            height={100}
            className="hidden md:flex -ml-4"
          />
          <Image
            src="/lgs/affinity_symbol_branco.png"
            alt="Affinity"
            width={75}
            height={45}
            className="md:hidden"
          />
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4">
          {lang.pageProps.navigation.map((navLink: NavigationTypes, index) => (
            <div
              className={`
                cursor-pointer navLink
                ${
                  indexMenu === index && isMenuOpen
                    ? "text-cyan-400 font-bold"
                    : "text-white"
                }  
              `}
              onClick={() => handleToggleLang(index)}
              key={navLink.id}
            >
              <span className="uppercase">{navLink.title}</span>
            </div>
          ))}
          <select
            onChange={(e) => selectLang(e.target.value)}
            className="bg-transparent border-none text-white"
          >
            <option value="portuguese">PT</option>
            <option value="english">EN</option>
            <option value="spanish">ES</option>
          </select>
        </div>
      </div>
      <div
        className={`
        absolute  rounded-l-md text-zinc-950 w-full max-w-sm h-auto p-8 bg-cyan-400 transition-all duration-500
        ${isMenuOpen ? "right-0" : "-right-full"}
        `}
      >
        <div className="flex items-center justify-between">
          <h2 className="w-full text-2xl font-bold">
            {lang.pageProps.navigation[indexMenu]?.title}
          </h2>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <X size={24}/>
          </button>
        </div>
        <hr className="border-zinc-950 mt-2 mb-6" />
        {lang.pageProps.navigation[indexMenu]?.items.map((items: ItemTypes) => (
          <div key={items.id} className="mt-6">
            <strong className="text-lg">{items.title}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
