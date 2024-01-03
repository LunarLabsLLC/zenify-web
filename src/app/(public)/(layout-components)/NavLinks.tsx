'use client';
import useHash from "@/hooks/useHash";
import { usePathname } from "next/navigation";
import { IoHome, IoPeople, IoStorefront } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import HashLink from "@/components/HashLink";

const NavLinks = () => {
  const currRoute = usePathname() + useHash();
  const getLink = (route: string, text: string, icon: JSX.Element) =>
    <HashLink href={`/${route}`} className={"navlink" + (currRoute == `/${route}` ? " active" : "")}>
      {icon} <h5>{text}</h5>
    </HashLink>

  return <>
    {getLink('', "Home", <IoHome className="w-5 h-5" />)}
    {getLink("store", "Store", <IoStorefront className="w-5 h-5" />)}
    {getLink("partners", "Partners", <IoPeople className="w-6 h-6" />)}
    {getLink("#faq", "FAQ", <FaQuestion className="w-4 h-4" />)}
  </>;
};
export default NavLinks;