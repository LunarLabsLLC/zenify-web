'use client';
import HashLink from "@/components/HashLink";
import { Url } from "next/dist/shared/lib/router/router";
import { FaInfinity } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { InView } from "react-intersection-observer";

const Features = () =>
  <section id="features" className="w-full flex justify-center items-center py-10 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="w-full h-full grid auto-rows-fr gap-1">
      <div className="relative">
        <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
          onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>

        <div className="target w-full h-full flex flex-col items-start justify-start p-8 gap-7 bg-gray-900 bg-opacity-65 rounded-lg in-view">
          <h3 className="text-primary brightness-150">Unique features.</h3>
          <small>Here's a summary of what Zenify provides you with, and what we stand for.</small>
          <HashLink href={""} className="gap-1.5 mt-auto">
            <h6 className="text-primary see-link brightness-150"><b>SEE ALL FEATURES</b></h6>
          </HashLink>
        </div>
      </div>

      <Card icon={<FaInfinity></FaInfinity>} title="Feature Card" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Feature Card" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Feature Card" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Feature Card" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </Card>
      <Card icon={<FaInfinity></FaInfinity>} title="Feature Card" href={""}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
      </Card>
    </div>
  </section>;
export default Features;

const Card = (props: { icon: JSX.Element; title: string; children: any; href: Url }) => (
  <div className="relative">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="target w-full h-full flex flex-col items-start justify-start p-8 gap-7 bg-gray-900 bg-opacity-65 rounded-lg in-view">
      <h4 className="gap-3 flex flex-row justify-center items-center text-primary brightness-150">{props.icon} {props.title}</h4>
      <small>{props.children}</small>
      <HashLink href={props.href} className="flex flex-row items-center justify-center mt-auto gap-1.5">
        <b>Learn more</b>
        <IoIosArrowForward />
      </HashLink>
    </div>
  </div>
);