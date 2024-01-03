import Image from "next/image";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import HashLink from "./HashLink";

const Logo = (props: { href: Url; linkClass?: string; className?: string; }) => (
  <HashLink href={props.href} className={props.linkClass}>
    <Image 
      src="/img/client-logo.png" 
      width={298} height={62}
      className={props.className}
      alt="Zenify Logo"
    />
  </HashLink>
);
export default Logo;