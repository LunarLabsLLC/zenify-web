import Logo from "@/components/Logo";
import { FaDownload } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full flex flex-col bg-gray-900 bg-opacity-45">
    <div className="flex flex-row flex-wrap justify-center w-full gap-12 md:gap-x-16 lg:gap-x-28 xl:gap-x-40 p-12">
      <Logo href="/" linkClass="my-auto" className="max-w-36" />

      <div className="flex flex-row flex-wrap justify-center gap-12 md:gap-16 lg:gap-28 xl:gap-40">
        <div className="links flex flex-col">
          <h6><b>Links</b></h6>
          <a href="">Our Partners</a>
          <a href="">FAQ</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>

        <div className="links flex flex-col">
          <h6><b>Support</b></h6>
          <a href="">Ticket Portal</a>
          <a href="">Knowledge Base</a>
          <a href="">Service Status</a>
        </div>

        <div className="links flex flex-col">
          <h6><b>Community</b></h6>
          <a href="https://discord.gg/">Discord</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://t.me/">Telegram</a>
        </div>

        <button className="my-auto btn btn-outline btn-primary flex flex-row items-center">
          <FaDownload className="h-5 w-5 mb-1.5"/>
          <span>Download</span>  
        </button>
      </div>
    </div>

    <div className="flex w-full px-4 py-3 items-start justify-start bg-slate-900">
      <small>Made with 💙 by Elaina and Emily. &copy; Copyright {`${new Date().getFullYear()}`}, PinkCloud Studios.</small>
    </div>
  </footer>
);
export default Footer;