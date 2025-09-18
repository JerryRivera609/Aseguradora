import { Link } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useAuth } from "../../pages/Login/AuthContext";
import { RouteRoles, hasAny } from "../../data/roles";

export default function MenuOperaciones({ isOpen, onToggle }) {
  const {user}= useAuth();
  const roles = user?.roles ?? [];
  const rp= RouteRoles.operaciones;

  const OP_LINKS = [
    { to: '/operaciones/lista',       text: "Lista de SOAT",              required: rp.listapolizas },
    { to: '/operaciones/cobros',      text: "Cobro de SOAT",              required: rp.listapolizas },
    { to: '/operaciones/remesas',     text: "Remesas",                    required: rp.listapolizas },
    { to: '/operaciones/generador',   text: "Generador de planllas",      required: rp.planillas },
    { to: '/operaciones/control',     text: "Control de Vencimiento",     required: rp.vencimiento },
    { to: '/operaciones/csv',         text: "Actualizar SOAT (CSV)",      required: rp.cargacsv },
    { to: '/operaciones/verificar',   text: "Verificar SOAT (CSV)",       required: rp.cargacsv },
    { to: '/operaciones/siniestros',  text: "Seguimientoe de Sinistros",  required: rp.siniestros },
    { to: '/operaciones/graficos',    text: "Grafico",                    required: rp.graficos },
  ];
  return (
    <li>
      <div 
        className={`flex justify-between items-center p-3 hover:cursor-pointer duration-200 hover:text-disabled hover:bg-primary-hover ${isOpen ? "bg-primary-hover" : ""}`} 
        onClick={onToggle}
      >
        <span className="font-semibold">Operaciones</span>
        {isOpen ? (
          <RiArrowUpSLine className="text-2xl"/>
        ) : (
          <RiArrowDownSLine className="text-2xl"/>
        )}
      </div>
      <div className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${isOpen ? "max-h-full" : "max-h-0"} bg-primary-hover`}>
        <ul className="pl-4 py-2 space-y-2 text-sm">
          {OP_LINKS.map(r =>
            hasAny(roles, r.required) ? (
              <li key={r.to} >
                <Link className="hover:text-disabled block"to={r.to}>{r.text}</Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </li>
  );
}