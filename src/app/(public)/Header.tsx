'use client';
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import useHash from "@/hooks/useHash";
import { usePathname } from "next/navigation";
import { InView } from 'react-intersection-observer';
import { IoDownloadOutline } from "react-icons/io5";

const Header = () => {
  const currRoute = usePathname() + useHash();
  const getLink = (route: string, text: string) =>
    <Link key={route} href={`/${route}`} className={currRoute == `/${route}` ? "active" : ""}
      onClick={() => window.location.hash = (!route.length || route.charAt(0) !== '#' ? '' : route.substring(1))}
    ><h5>{text}</h5></Link>;

  const header = useRef<HTMLElement>(null);
  return <>
    <InView as="div" threshold={1} rootMargin="1.5px 0px 0px 0px" initialInView={true} fallbackInView={true}
      onChange={(inView, _) => header.current?.classList.toggle('popped-up', !inView)}></InView>  

    <header ref={header}>
      <div className="inner flex items-center justify-center">
        <Link href="/">
          <Image 
            src="/img/zenify-logo.png" 
            width={298} height={62}
            className="img"
            alt="Zenify Logo"
          />
        </Link>

        {[
          getLink('', "Home"),
          getLink("store", "Store"),
          getLink("partners", "Partners"),
          getLink("#faq", "FAQ"),
        ]}

        <button className="ml-auto btn btn-outline btn-primary flex flex-row items-center">
          <IoDownloadOutline />
          <span>Download</span>  
        </button>
      </div>
    </header>
  </>;
};
export default Header;