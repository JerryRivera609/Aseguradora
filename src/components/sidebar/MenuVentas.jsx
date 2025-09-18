import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useAuth } from "../../pages/Login/AuthContext";
import { RouteRoles, hasAny } from "../../data/roles";

export default function MenuVentas({ isOpen, onToggle }) {
  const {user}= useAuth();
  const roles = user?.roles ?? [];
  const rv= RouteRoles.ventas;
  const rc= RouteRoles.colab;
  const VENTAS_LINKS = [
    { to: '/ventas/generar',      text: "Generar SOAT",     required: rv.generar },
    { to: '/ventas/generar',      text: "Generar SOAT",     required: rc.colab },
    { to: '/ventas/listaPolizas', text: "Lista de SOAT",    required: rv.versoats },
    { to: '/ventas/listaPolizas', text: "Lista de SOAT",    required: rc.colab },
    { to: '/ventas/graficos',     text: "Grafico",          required: rv.graficos },
    { to: '/ventas/graficos',     text: "Grafico",          required: rc.colab },
  ];
  return (
    <li>
      <div 
        className={`flex justify-between items-center p-3 hover:cursor-pointer duration-200 hover:text-disabled hover:bg-primary-hover ${isOpen ? "bg-primary-hover" : ""}`} 
        onClick={onToggle}
      >
        <span className="font-semibold">Ventas</span>
        {isOpen ? (
          <RiArrowUpSLine className="text-2xl"/>
        ) : (
          <RiArrowDownSLine className="text-2xl"/>
        )}
      </div>
      <div className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"} bg-primary-hover`}>
        <ul className="pl-4 py-2 space-y-2 text-sm">
          {VENTAS_LINKS.map(r =>
            hasAny(roles, r.required) ? (
              <li key={r.to}>
                <Link className="hover:text-disabled block" to={r.to}>{r.text}</Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </li>
  );
}