import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";

export default function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const [imagenFondo, setImagenFondo] = useState("")

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark")
      const fondo = isDark
        ? "bg-[url('/pruebanoche.jpg')] bg-cover bg-center bg-no-repeat"
        : "bg-[url('/fondo2.png')] bg-cover bg-center bg-no-repeat"
      setImagenFondo(fondo)
    }
    checkDarkMode()
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])
  return (
    <div className={`flex flex-col min-h-screen ${isDashboard ? imagenFondo : "bg-background"}`}>
      <Header isDashboard={isDashboard} />
      {!isDashboard &&(
        <Sidebar/>
      )}
      <div className="grid place-items-center">
        <main className="flex-1 w-full max-w-screen-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
