import Image from "next/image";
import Link from "next/link";
import React from "react";
// Import gambar local
import logo from "/public/assets/onion.png";

// Import icons
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="w-full shadow-sm fixed top-0 z-99">
        <div className="contener py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src={logo} width={45} height={45} alt="logo" />
              <h1 className="text-3xl font-semibold">
                Movie<span className="text-accent">Nime</span>
              </h1>
            </div>
            <ul className="flex items-center gap-x-8 font-medium text-lg">
              <Link href={"/"}>
                <li className="hover:text-accent text-accent2">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="hover:text-accent text-accent2">
                  Anime Terbaru
                </li>
              </Link>
              <Link href={"/"}>
                <li className="hover:text-accent text-accent2">Rekomendasi</li>
              </Link>
              <Link href={"/"}>
                <li className="hover:text-accent text-accent2">Daftar Anime</li>
              </Link>
            </ul>
            <div className="border-accent2 border-2 relative rounded-lg py-[.15rem] px-2">
              <input
                type="text"
                className="w-[12rem] h-4 px-2 outline-none text-sm bg-bg"
                placeholder="Cari Anime"
              />
              <button>
                <BiSearchAlt className="absolute top-[.15rem] text-2xl text-accent2 right-[1rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
