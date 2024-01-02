'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useHash from "../../hooks/useHash";

const HeaderLinks = () => {
  const currRoute = usePathname() + useHash();

  const getLink = (route: string, text: string) =>
    <Link key={route} href={`/${route}`} className={currRoute == `/${route}` ? "active" : ""}
      onClick={() => window.location.hash = !route.length || route.charAt(0) !== '#' ? '' : route.substring(1)}
    >
        <h5>{text}</h5>
    </Link>;

  return [
    getLink('', "Home"),
    getLink("store", "Store"),
    getLink("partners", "Partners"),
    getLink("#faq", "FAQ"),
  ];
}
export default HeaderLinks;