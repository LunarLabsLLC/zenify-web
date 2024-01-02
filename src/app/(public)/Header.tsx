import Image from "next/image";
import Link from "next/link";
import HeaderLinks from "./HeaderLinks";

const Header = () =>
  <header className="w-full position-absolute sticky top-0 left-0 z-[1] backdrop-blur-sm border-b border-slate-600 bg-black bg-opacity-10">
    <div className="w-10/12 mx-auto flex flex-row items-center py-10 gap-7">
      <Link href="/">
        <Image 
          src="/img/zenify-logo.png" 
          width={298} height={62}
          className="max-w-24"
          alt="Zenify Logo"
        />
      </Link>

      <div className="flex w-full items-center justify-center gap-7">
        <HeaderLinks />

        <button className="ml-auto btn btn-outline btn-secondary">Download</button>
      </div>
    </div>
  </header>;
export default Header;