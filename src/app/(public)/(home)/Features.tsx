'use client';
import HashLink from "@/components/HashLink";
import { Url } from "next/dist/shared/lib/router/router";
import { IoIosArrowForward } from "react-icons/io";
import { InView } from "react-intersection-observer";

const Features = () =>
  <section id="features" className="w-full flex justify-center items-center px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="w-full h-full grid auto-rows-fr gap-1">
      <div className="relative">
        <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
          onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>

        <div className="target w-full h-full flex flex-col items-start justify-start p-8 gap-7 bg-gray-900 bg-opacity-65">
          <h3>Unique features.</h3>
          <small>Here's a summary of what Zenify provides you with, and what we stand for.</small>
          <HashLink href={""} className="gap-1.5 mt-auto">
            <h6 className="text-secondary brightness-90 hover:text-primary hover:brightness-150"><b>SEE ALL FEATURES</b></h6>
          </HashLink>
        </div>
      </div>

      <Card icon={<></>} title="Test" href={""}>
        TestTestTestTestTestTestTest
      </Card>
      <Card icon={<></>} title="Test" href={""}>
        TestTestTestTestTestTestTest
      </Card>
      <Card icon={<></>} title="Test" href={""}>
        TestTestTestTestTestTestTest
      </Card>
      <Card icon={<></>} title="Test" href={""}>
        TestTestTestTestTestTestTest
      </Card>
      <Card icon={<></>} title="Test" href={""}>
        TestTestTestTestTestTestTest
      </Card>
    </div>
  </section>;
export default Features;

const Card = (props: { icon: JSX.Element; title: string; children: any; href: Url }) => (
  <div className="relative">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="target w-full h-full flex flex-col items-start justify-start p-8 gap-7 bg-gray-900 bg-opacity-65">
      {props.icon}
      <h4>{props.title}</h4>
      <small>{props.children}</small>
      <HashLink href={props.href} className="flex flex-row items-center justify-center mt-auto gap-1.5">
        <b>Learn more</b>
        <IoIosArrowForward />
      </HashLink>
    </div>
  </div>
);