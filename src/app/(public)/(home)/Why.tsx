'use client';
import { IoSpeedometer } from "react-icons/io5";
import { FaDownload, FaInfinity } from "react-icons/fa6";
import { InView } from "react-intersection-observer";

const Why = () =>
  <section id="why" className="relative w-full flex flex-col items-center justify-center gap-7 text-center pt-20 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <h3 className="text-primary font-bold mb-7">Why should you <br/> choose <span className="text-gradient">Zenify Client</span>? </h3>
    <div className="flex flex-row flex-wrap items-start justify-center gap-7">
      <Card icon={<IoSpeedometer />} title="FPS BOOSTING">
        Zenify Client provides a <i>crazy</i> <b>FPS Boost</b> by leveraging cutting-edge rendering technology and numerous enhancements. Experience wonderful performance with no interruptions or dropped frames.
      </Card>
      <Card icon={<FaInfinity />} title="UNLIMITED FEATURES">
        The Zenify Client boasts an extensive selection of mods at your disposal. Fully adaptable, you have the freedom to personalize the client's appearance and ambiance according to your preferences. Bid farewell to concerns about mod updates.
      </Card>
      <Card icon={<FaDownload />} title="QUICK INSTALL">
        Experience the seamless installation process of Zenify Client through our installer! Set up, configure, and initiate the client with a user-friendly interface, all achieved within moments. It's <i>that</i> straightforward.
      </Card>
    </div>
  </section>;
export default Why;

const Card = (props: { icon: JSX.Element; title: string; children: any; }) => (
  <div className="relative">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={false} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="target">
      {props.icon}
      <h4>{props.title}</h4>
      <small>{props.children}</small>
    </div>
  </div>
);