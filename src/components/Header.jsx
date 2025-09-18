import Logo from "../assets/Logo";
import { PiUserCircleFill } from "react-icons/pi";
import { IoLogOutSharp } from "react-icons/io5";
import { useAuth } from "../pages/Login/AuthContext";
import DarkModeToggle from "./DarkMode";

export default function Header({isDashboard}){
  const {user,logout}= useAuth();
     return (
<header className="hidden md:block h-20 w-full bg-[#0C3F5E] z-10 top-0 left-0 shadow-md">
  <div className="flex w-full py-4 px-30 border-primary justify-between">
    {/* <img src="/" alt="asd" className="w-30"/> */}
    <div className="flex items-center space-x-2 pr-6 text-white text-lg">
      <PiUserCircleFill className="text-3xl"/>
      <h3>{user ? user.nombre : ""}</h3>
      <DarkModeToggle/>
      <IoLogOutSharp className="ml-2 text-3xl hover:cursor-pointer" onClick={logout}/>
    </div>
  </div>
</header>


    );
}