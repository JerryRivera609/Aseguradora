import { Link } from "react-router-dom";


import { RiArrowRightSLine } from "react-icons/ri";

import { BsCashCoin } from "react-icons/bs";
import { BsBuildingGear } from "react-icons/bs";
import { PiUserCircleGear } from "react-icons/pi";
import { useAuth } from '../pages/Login/AuthContext'
import { AllRoles, hasAny } from '../data/roles'
function MenuMain(){
    const {user}= useAuth();
    const roles = user?.roles ?? [];
    const mostrarCards =[
        hasAny(roles, AllRoles.ventas),
        hasAny(roles, AllRoles.operaciones),
        hasAny(roles, AllRoles.administrativo)
    ].filter(Boolean).length;
    // console.log("md:grid-cols-"+mostrarCards)
    const cols = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
    }[mostrarCards] || "md:grid-cols-1";
    
    return(
        <main className="h-[calc(100vh-5rem)] w-full flex justify-center items-center mt-[-6rem] text-foreground">
            <div className={`grid gap-14 ${cols} md:gap-8`}>
                {(hasAny(roles, AllRoles.ventas)||hasAny(roles, AllRoles.colab)) && (
                    <Link to="/ventas">
                        <div className="border-foreground opacity-85 rounded-xl bg-container p-8 text-center  shadow-xl  flex flex-col items-center transition-all duration-500 group hover:text-container hover:bg-veransa hover:shadow-[-10px_10px_15px_rgba(0,0,0,0.4)] hover:scale-103">
                            <div className="flex flex-col justify-start items-center text-center w-full mb-4 ">
                                <BsCashCoin className="text-7xl  transition-all duration-500 group-hover:text-container mb-4" />
                                <h2 className="text-2xl font-inter font-bold">Ventas De <br /> SOAT</h2>
                            </div>
                            <button className="flex justify-center items-center gap-1 bg-disabled/60 rounded-full py-3 w-3/4 font-bold  hover:cursor-pointer">
                                Ingresar
                                <RiArrowRightSLine className="text-2xl"/>
                            </button>
                        </div>
                    </Link>
                )}
                {hasAny(roles, AllRoles.operaciones) && (
                        <Link to="/operaciones">
                            <div className="border-foreground opacity-85 rounded-xl bg-container p-8 text-center  shadow-xl flex flex-col items-center transition-all duration-500 group hover:text-container hover:bg-veransa hover:shadow-[0px_10px_15px_rgba(0,0,0,0.4)] hover:scale-103">
                                <div className="flex flex-col  justify-start items-center text-center w-full mb-4">
                                    <BsBuildingGear className="text-7xl  transition-all duration-500 group-hover:text-container mb-4" />
                                    <h2 className="text-2xl font-inter font-bold">Control de <br />Operaciones</h2>
                                </div>
                                
                                <button className="flex justify-center items-center gap-1 bg-disabled/60 rounded-full py-3 w-3/4 font-bold  hover:cursor-pointer">
                                    Ingresar
                                    <RiArrowRightSLine className="text-2xl"/>
                                </button>
                            </div>
                        </Link>
                )}
                    
                {hasAny(roles, AllRoles.administrativo) && (
                        <Link to="/administrativo">
                            <div className="border-foreground opacity-85 rounded-xl bg-container p-8 text-center  shadow-xl flex flex-col items-center transition-all duration-500 group hover:text-container hover:bg-veransa hover:shadow-[10px_10px_15px_rgba(0,0,0,0.4)] hover:scale-103">
                                <div className="flex flex-col justify-start items-center text-center w-full mb-4">
                                    <PiUserCircleGear className="text-7xl  transition-all duration-500 group-hover:text-container mb-4" />
                                    <h2 className="text-2xl font-inter font-bold">Zona <br />Administrativa</h2>
                                </div>
                                <button className="flex justify-center items-center gap-1 bg-disabled/60 rounded-full py-3 w-3/4 font-bold  hover:cursor-pointer">
                                    Ingresar
                                    <RiArrowRightSLine className="text-2xl"/>
                                </button>
                            </div>
                        </Link>
                )}
            </div>
        </main>
    )
}

export default MenuMain;