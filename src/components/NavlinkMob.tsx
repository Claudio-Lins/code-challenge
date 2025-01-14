"use client";
import React, { useState } from "react";
import Image from "next/image";
import english from "@/data/en.json";
import spanish from "@/data/es.json";
import portuguese from "@/data/pt.json";
import { List, X } from "phosphor-react";
import flagPt from "../../public/flags/pt.svg";
import flagEs from "../../public/flags/es.svg";
import flagEn from "../../public/flags/gb.svg";

interface NavigationTypes {
  id: number;
  title: string;
}

interface ItemTypes {
  id: number;
  title: string;
}

export function NavlinkMob() {
  const [lang, setLang] = useState(portuguese);
  const [selectedPt, setSelectedPt] = useState(true);
  const [selectedEn, setSelectedEn] = useState(false);
  const [selectedEs, setSelectedEs] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(true);
  const [indexMenu, setIndexMenu] = useState(0);

  const selectLang = (lang: string) => {
    switch (lang) {
      case "english":
        setLang(english);
        setSelectedEn(true);
        setSelectedEs(false);
        setSelectedPt(false);
        break;
      case "spanish":
        setLang(spanish);
        setSelectedEs(true);
        setSelectedEn(false);
        setSelectedPt(false);
        break;
      case "portuguese":
        setLang(portuguese);
        setSelectedPt(true);
        setSelectedEn(false);
        setSelectedEs(false);
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
      await new Promise((resolve) => setTimeout(resolve, 400));
      setIndexMenu(index);
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="flex w-full flex-col p-4 relative bg-zinc-950 sm:hidden">
      <div className="flex justify-between items-center bg-zinc-950 z-10">
        <Image
          src="/lgs/affinity_symbol_branco.png"
          alt="Affinity"
          width={75}
          height={45}
          className="md:hidden"
        />
        <div
          onClick={() => setIsMenuOpen2(!isMenuOpen2)}
          className="cursor-pointer mr-4"
        >
          {isMenuOpen2 ? (
            <List size={24} color="#fff" />
          ) : (
            <X size={24} color="#fff" />
          )}
        </div>
      </div>
      <div
        className={`
        md:hidden bg-zinc-950 w-full flex justify-start mt-20 transition-all duration-500  h-screen flex-col pl-4 gap-12
        ${isMenuOpen2 ? "-ml-96" : "ml-0"}
        `}
      >
        <div className="w-full">
          <div className=" flex items-center gap-4">
            <button onClick={() => selectLang("portuguese")}>
              <Image
                src={flagPt}
                alt="Portuguese"
                className={`
                w-6 h-6 rounded-full overflow-hidden
                ${!selectedPt && "grayscale"}
                `}
              />
            </button>
            <button onClick={() => selectLang("spanish")}>
              <Image
                src={flagEs}
                alt="Spanish"
                className={`
                w-6 h-6 rounded-full overflow-hidden
                ${!selectedEs && "grayscale"}
                `}
              />
            </button>
            <button onClick={() => selectLang("english")}>
              <Image
                src={flagEn}
                alt="English"
                className={`
                w-6 h-6 rounded-full overflow-hidden
                ${!selectedEn && "grayscale"}
                `}
              />
            </button>
          </div>
        </div>
        {lang.pageProps.navigation.map((navLink: NavigationTypes, index) => (
          <div
            className={`
                cursor-pointer navLink  font-bold hover:text-cyan-400
                ${
                  indexMenu === index && isMenuOpen
                    ? "text-cyan-400"
                    : "text-white"
                }  
              `}
            onClick={() => handleToggleLang(index)}
            key={navLink.id}
          >
            <span className="uppercase">{navLink.title}</span>
          </div>
        ))}
        <div
          className={`
        absolute rounded-l-md text-zinc-950 w-full h-screen p-8 bg-cyan-400 transition-all duration-500
        ${isMenuOpen ? "right-0" : "-right-full"}
        `}
        >
          <div className="flex items-center justify-between">
            <h2 className="w-full text-2xl font-bold">
              {lang.pageProps.navigation[indexMenu]?.title}
            </h2>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <X size={24} />
            </button>
          </div>
          <hr className="border-zinc-950 mt-2 mb-6" />
          {lang.pageProps.navigation[indexMenu]?.items.map(
            (items: ItemTypes) => (
              <div key={items.id} className="mt-6">
                <strong className="text-lg">{items.title}</strong>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
