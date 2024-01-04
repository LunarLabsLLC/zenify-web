import Image from "next/image";
import { FaDiscord, FaDownload } from "react-icons/fa6";

const Hero = () => (
  <section id="hero" className="w-full h-screen flex flex-col lg:flex-row items-center justify-center gap-8 pt-20 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
    <Image 
      src="/img/placeholder.png" 
      width={1200} height={800}
      className="rounded-xl"
      alt="Client Showcase"
    />

    <div className="lg:w-full flex flex-col justify-start gap-6 text-primary font-bold">
      <h2 className="whitespace-nowrap">
        THE <span className="gradient">NEXT<br/>GENERATION</span> OF<br/>MINECRAFT CLIENTS.
      </h2>

      <div className="flex flex-row gap-4">
        <button className="btn btn-outline btn-primary flex flex-row items-center">
          <FaDownload className="h-5 w-5 mb-1.5"/>
          <span>Download Now!</span>
        </button>

        <button className="btn btn-outline btn-secondary flex flex-row items-center">
            <FaDiscord className="h-5 w-5 mb-0.5"/>
            <span>Discord</span>
        </button>
      </div>
    </div>
  </section>
);
export default Hero;