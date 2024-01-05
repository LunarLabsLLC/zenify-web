'use client';
import { IoSpeedometer } from "react-icons/io5";
import { FaInfinity, FaPenRuler } from "react-icons/fa6";
import { InView } from "react-intersection-observer";

const Why = () =>
  <section id="why" className="relative w-full flex flex-col items-center justify-center gap-7 text-center py-10 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <div className="absolute top-0 left-0 h-full w-full bg-grad" style={{zIndex: 0}}></div>
    
    <h3 className="text-primary font-bold mb-7">Why should you <br/> choose <span className="text-gradient">Zenify Client</span>? </h3>
    <div className="flex flex-row flex-wrap items-start justify-center gap-7">
      <Card icon={<FaPenRuler />} title="CUSTOMIZATION">
        Zenify Client provides a fully customizable system, allowing you to easily customize Zenify to suit your preferences. Personalize your experience effortlessly with our user friendly features, ensuring that Zenify aligns perfectly with your tastes.
      </Card>
      <Card icon={<IoSpeedometer />} title="PERFORMANCE">
        Zenify Client shines in performance, ensuring optimal performance for all users. Our client is finely tuned to deliver top notch performance, making it a standout feature for the entire user base.
      </Card>
      <Card icon={<FaInfinity />} title="FEATURES">
        Zenify Client stands out with its diverse features, providing a multitude of options for users to effortlessly select their favorite in game mods and features. 
      </Card>
    </div>
  </section>;
export default Why;

const Card = (props: { icon: JSX.Element; title: string; children: any; }) => (
  <div className="relative">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="target in-view">
      {props.icon}
      <h4>{props.title}</h4>
      <small>{props.children}</small>
    </div>
  </div>
);