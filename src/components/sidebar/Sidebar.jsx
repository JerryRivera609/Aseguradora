import { Link } from "react-router-dom";
import { useState } from "react";

import SidebarCollapsed from "./SidebarCollapsed";
import SidebarHeader from "./SidebarHeader";
import MenuVentas from "./MenuVentas";
import MenuOperaciones from "./MenuOperaciones";
import MenuAdministrativo from "./MenuAdministrativo";
import { useAuth } from "../../pages/Login/AuthContext";
import { AllRoles, hasAny } from "../../data/roles";
import Boton from "../Button";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState({
    ventas: false,
    operaciones: false,
    administrativo: false
  });

  const {logout,user}=useAuth();
  const roles = user?.roles ?? [];

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  function toggleMenu(menuKey) {
    setOpenMenu((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  }

  return (
    <>
      {/* Sidebar colapsado */}
      {!isSidebarOpen && (
        <SidebarCollapsed onToggle={toggleSidebar} />
      )}

      {/* Overlay cuando el sidebar está abierto */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.35)] z-11" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar expandido */}
      <aside className={`md:rounded-r-2xl fixed top-0 left-0 h-[80vh] md:h-screen md:w-64 w-full bg-primary z-50 flex flex-col justify-between transform transition-transform duration-300 overflow-hidden ${
        isSidebarOpen
          ? "md:translate-x-0 translate-y-0 md:translate-y-0 translate-x-0"
          : "md:-translate-x-full -translate-y-full md:translate-y-0 translate-x-0"
        }`}
      >

        <div className="text-white">
          {/* Header del sidebar */}
          <SidebarHeader onToggle={toggleSidebar} />
          
          {/* Navegación */}
          <nav className="flex">
            <ul className="w-full flex flex-col">
              {/* Enlace de Inicio */}
              <li className="w-full flex">
                <Link 
                  to="/dashboard" 
                  className="hover:cursor-pointer duration-200 hover:text-disabled hover:bg-primaryhover px-4 py-2 font-inter text-xl w-full"
                >
                  Inicio
                </Link>
              </li>
              
              {/* Menú Ventas */}
              
              {(hasAny(roles, AllRoles.ventas)||hasAny(roles, AllRoles.colab)) && ( 
                <MenuVentas
                  isOpen={openMenu.ventas} 
                  onToggle={() => toggleMenu("ventas")} 
                />
              )}
              
              {/* Menú Operaciones */}
              
              {hasAny(roles, AllRoles.operaciones) && (
                <MenuOperaciones 
                  isOpen={openMenu.operaciones} 
                  onToggle={() => toggleMenu("operaciones")} 
                />
              )}
              
              {/* Menú Administrativo */}
              {hasAny(roles, AllRoles.administrativo) && (
              <MenuAdministrativo 
                isOpen={openMenu.administrativo} 
                onToggle={() => toggleMenu("administrativo")} 
              />
              )}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col">
          {/* <span>{user.nombre}</span> */}
          <Boton className="py-3 text-container hover:bg-primary-hover"  onClick={logout} text="Cerrar sesion"/>
        </div>
      </aside>
    </>
  );
}