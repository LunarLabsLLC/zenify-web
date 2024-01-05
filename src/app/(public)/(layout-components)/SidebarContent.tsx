import NavLinks from './NavLinks';
import { FaDownload } from 'react-icons/fa6';
import Logo from '@/components/Logo';

const SidebarContent = () => <>
  <Logo href="/" className="max-w-32 sm:max-w-36 my-4" />

  <small>0 Players Online</small>

  <div className="flex flex-col w-full h-full mt-24 gap-7">
    <NavLinks />
  </div>  

  <button className="mx-auto btn btn-primary flex flex-row flex items-center">
    <FaDownload className="h-5 w-5 mb-1.5"/>
    <span>Download</span>  
  </button>
</>;
export default SidebarContent;