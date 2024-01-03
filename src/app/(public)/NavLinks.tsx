'use client';
import Link from "next/link";
import useHash from "@/hooks/useHash";
import { usePathname } from "next/navigation";
import { IoHome, IoPeople, IoStorefront } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";

const NavLinks = () => {
  const currRoute = usePathname() + useHash();
  const getLink = (route: string, text: string, icon: JSX.Element) =>
    <Link tabIndex={0} key={route} href={`/${route}`} className={"navlink " + (currRoute == `/${route}` ? "active" : "")}
      onClick={() => window.location.hash = (!route.length || route.charAt(0) !== '#' ? '' : route.substring(1))}
    >{icon} <h5>{text}</h5></Link>;

  return [
    getLink('', "Home", <IoHome className="w-5 h-5" />),
    getLink("store", "Store", <IoStorefront className="w-5 h-5" />),
    getLink("partners", "Partners", <IoPeople className="w-6 h-6" />),
    getLink("#faq", "FAQ", <FaQuestion className="w-4 h-4" />),
  ];
};
export default NavLinks;