import { useEffect, useState } from "react";
import diaNoche from "/dianoche.png";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    const localDark = localStorage.getItem("darkMode");
    return localDark === "true";
  });
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkMode',true)
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkMode',false)
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`relative w-24 h-10 flex items-center rounded-full cursor-pointer p-2 transition-colors duration-500 overflow-hidden select-none
        ${dark ? "bg-gray-800 shadow-[inset_0px_0px_10px_black]" : "bg-sky-400 shadow-[inset_0px_0px_10px_black]"
        }`}
    >
      {/* Carrito */}
      <div
        className={`w-8 h-8 rounded-full transform transition-all duration-500 relative ${dark ? "translate-x-12" : "translate-x-0"
          }`}
      >
        <img
          src={diaNoche}
          alt="Carrito Día/Noche"
          className="w-full h-full object-cover relative z-20"
        />
      </div>


      {/* Estrellas en modo oscuro */}
      {dark && (
        <>
          <span className="absolute top-3 left-4 w-[4px] h-[4px] bg-yellow-300/80 rounded-full shadow-[0_0_6px_yellow] z-20"></span>
          <span className="absolute top-1 left-10 w-[4px] h-[4px] bg-yellow-300/80 rounded-full shadow-[0_0_6px_yellow] z-20"></span>
          <span className="absolute top-5 left-8 w-[4px] h-[4px] bg-yellow-300/80 rounded-full shadow-[0_0_6px_yellow] z-20"></span>
          <span className="absolute top-4 left-13 w-[4px] h-[4px] bg-yellow-300/80 rounded-full shadow-[0_0_6px_yellow] z-20"></span>
          {/* Luces del carro */}
          <span
            className={`absolute top-5 left-15 w-[7px] h-[6px] bg-yellow-200 rounded-full animate-pulse shadow-[0_0_5px_5px_yellow] transition-opacity duration-700 delay-1000 z-20 ${dark ? "opacity-100" : "opacity-0"
              }`}
          />
          <span
            className={`absolute top-5 left-19 w-[7px] h-[6px] bg-yellow-200 rounded-full animate-pulse shadow-[0_0_5px_5px_yellow] transition-opacity duration-700 delay-1000 z-20 ${dark ? "opacity-100" : "opacity-0"
              }`}
          />

          <span className="absolute top-9 left-6 w-1 h-1 bg-white rounded-full animate-ping z-20"></span>
          <span className="absolute bottom-0 left-0 w-30 h-[9px] bg-gray-400 rounded-full z-20"></span>
          <span className="absolute top-8 left-11 w-1 h-3 bg-white z-20 rounded-sm"></span>
        </>
      )}

      {/* Nubes en modo claro */}
      {!dark && (
        <>
          <span className="absolute bottom-0 left-0 w-30 h-[10px] bg-gray-400 rounded-full"></span>
          <span className="absolute bottom-6 left-13 w-3 h-3 bg-yellow-400 shadow-[0_0_15px_yellow] rounded-full"></span>
          <span className="absolute bottom-3 left-16 w-8 h-3 bg-white rounded-full"></span>
          <span className="absolute bottom-5 left-18 w-8 h-3 bg-white rounded-full"></span>
          <span className="absolute top-8 left-11 w-1 h-3 bg-white z-20 rounded-sm"></span>
        </>
      )}
    </button>
  );

}
