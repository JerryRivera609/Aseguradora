import { RiArrowLeftSLine,RiArrowUpSLine } from "react-icons/ri";

export default function SidebarHeader({ onToggle }) {
  return (
    <div className="flex justify-between p-6 text-center items-center">
      <h2 className="text-2xl font-bold">Panel</h2>
      <RiArrowLeftSLine 
        className="hidden md:block text-white text-5xl hover:cursor-pointer" 
        onClick={onToggle}
      />
      <RiArrowUpSLine 
        className="block md:hidden text-white text-5xl hover:cursor-pointer" 
        onClick={onToggle}
      />
    </div>
  );
}