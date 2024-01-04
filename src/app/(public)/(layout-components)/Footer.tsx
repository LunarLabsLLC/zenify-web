import Logo from "@/components/Logo";
import { FaDiscord, FaDownload, FaHeart, FaTelegram, FaTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full flex flex-col bg-gray-900 bg-opacity-45">
    <div className="flex flex-row flex-wrap justify-center w-full gap-12 md:gap-x-16 lg:gap-x-28 xl:gap-x-40 p-12">
      <Logo href="/" linkClass="my-auto" className="max-w-36" />

      <div className="flex flex-row flex-wrap justify-center gap-12 md:gap-16 lg:gap-28 xl:gap-40">
        <div className="links flex flex-col">
          <h6><b>Links</b></h6>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>

        <div className="links flex flex-col">
          <h6><b>Support</b></h6>
          <a href="">Ticket Portal</a>
          <a href="">Service Status</a>
        </div>

        <div className="links flex flex-col">
          <h6><b>Community</b></h6>
          <a className="flex flex-row items-end justify-start gap-2" href="https://discord.gg/"><FaDiscord className="h-4 w-4 mb-1"/> Discord</a>
          <a className="flex flex-row items-end justify-start gap-2" href="https://twitter.com/"><FaTwitter className="h-4 w-4 mb-1"/> Twitter</a>
          <a className="flex flex-row items-end justify-start gap-2" href="https://t.me/"><FaTelegram className="h-4 w-4 mb-1"/> Telegram</a>
        </div>

        <button className="my-auto btn btn-primary flex flex-row items-center">
          <FaDownload className="h-5 w-5 mb-1.5"/>
          <span>Download</span>  
        </button>
      </div>
    </div>

    <div className="flex flex-col w-full px-4 py-3 items-start bg-black gap-2">
      <small className="flex flex-row flex-wrap">Made with<FaHeart className="text-secondary mb-0.5 mx-1.5 min-h-3.5 min-w-3.5"/>by Elaina and Emily. &copy; Copyright {`${new Date().getFullYear()}`}, PinkCloud Studios.</small>
    </div>
  </footer>
);
export default Footer;