import { RiArrowRightSLine, RiArrowDownSLine  } from "react-icons/ri";
import LogoSolo from "../../assets/LogoSolo";
export default function SidebarCollapsed({ onToggle }) {
  return (
    <div 
      className="md:fixed md:grid md:grid-cols-1 md:grid-rows-4 bg-primary md:h-full md:px-3 z-11 text-white duration-100 hover:cursor-pointer hover:bg-primary-hover"
      onClick={onToggle}
    >
      <div className="md:w-15 w-10 hidden md:grid place-items-center">
        <LogoSolo className="fill-white" strokeWidth={1}/>
      </div>
      <div className="grid place-items-center">
        <RiArrowRightSLine className="hidden md:block md:text-5xl text-3xl hover:cursor-pointer" />
        <RiArrowDownSLine  className="block md:hidden text-3xl hover:cursor-pointer" />
      </div>
    </div>
  );
}