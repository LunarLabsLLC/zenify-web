'use client';
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { InView } from 'react-intersection-observer';
import { FaBars, FaDownload } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Header = () => {
  const header = useRef<HTMLElement>(null);
  return <>
    <InView as="div" className="absolute top-0 left-0" threshold={1} initialInView={true} fallbackInView={true}
      onChange={(inView, _) => header.current?.classList.toggle('popped-up', !inView)}></InView>  

    <header ref={header}>
      <div className="py-10 px-5 lg:px-24 gap-7 inner flex items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <label htmlFor="sidebar" tabIndex={0} className="flex md:hidden expand-btn btn btn-ghost btn-circle">
            <FaBars />
          </label>
          <Link href="/">
            <Image 
              src="/img/zenify-logo.png" 
              width={298} height={62}
              className="img"
              alt="Zenify Logo"
            />
          </Link>
        </div>

        <NavLinks />

        <button className="ml-auto btn btn-outline btn-primary flex flex-row items-center">
          <FaDownload />
          <span>Download</span>  
        </button>
      </div>
    </header>
  </>;
};
export default Header;