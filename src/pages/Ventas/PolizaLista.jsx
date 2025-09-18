import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";

import { listarPolizasPorPV } from "../../api/polizas";
import { useAuth } from "../Login/AuthContext";
import Breadcrumb from "../../components/Breadcrumb";
import TablaPolizasPV from "./components/TableVent";

export default function PolizaLista() {
  const { user } = useAuth();

  const [polizas, setPolizas] = useState();
  const [page, setPage] = useState(0);
  const [pageMostrar, setPageMostrar] = useState(1);

  const [pdv, setPdv] = useState(user?.puntoDeVenta?.[0]?.id ?? "");
  const pdvs = user?.puntoDeVenta ?? [];
  const nombresPdv = pdvs.map((p) => ({ value: p.id, label: p.nombrePDV }));

  const breadcrumbItems = [
    { to: "/dashboard", icon: <AiFillHome />, label: "" },
    { to: "/dashboard", label: "Ventas de SOAT" },
    { to: "/ventas/listaPolizas", label: "SOAT Vendidos" },
  ];

  useEffect(() => {
    handleListarPolizas(pdv, page);
  }, [page, pdv]);

  const handleListarPolizas = async (pvId, pg = 0) => {
    try {
      const polizasdata = await listarPolizasPorPV(pvId, pg);
      const datos = polizasdata.data || polizasdata;
      setPolizas(datos);
    } catch (error) {
      console.error(error);
    }
  };

  const addPage = () => {
    setPage(page + 1);
    setPageMostrar(pageMostrar + 1);
  };

  const restPage = () => {
    setPage(page - 1);
    setPageMostrar(pageMostrar - 1);
  };

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-full pt-6 font-inter text-foreground">
      <div className="grid grid-cols-1 grid-rows-[6rem_1.5rem_4rem_1fr]">
        
        {/* Encabezado */}
        <div className="flex justify-between w-full bg-container md:px-4 rounded-lg border-1 border-border">
          <div className="text-4xl font-bold flex items-center gap-2">
            <IoPricetagSharp />
            <h1>SOAT Vendidos</h1>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1 font-inter">
              <FaBuilding />
              {user?.oficina}
            </div>
            <div className="flex items-center gap-1 font-inter mt-2">
              <FaStoreAlt />
              <div className="relative">
                <select
                  className="w-full p-1.5 rounded-2xl focus:outline-primary"
                  name="puntoDeVenta"
                  id="puntoDeVenta"
                  value={pdv}
                  onChange={(e) => setPdv(Number(e.target.value))}
                >
                  {nombresPdv.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Sub-header */}
        <div className="flex justify-between py-3 mb-4 items-center bg-container rounded-2xl p-2">
          <h3 className="text-xl font-semibold">
            Cotiza y Vende un SOAT al Mejor Precio
          </h3>
          <Link
            to="/ventas/generar"
            className="bg-primary text-container font-inter p-2 rounded-2xl transition-all duration-500 hover:shadow-[0px_2px_10px_rgba(0,0,0,0.3)] hover:bg-primary-hover"
          >
            Vender SOAT
          </Link>
        </div>

        {/* Tabla dinámica */}
        <TablaPolizasPV polizas={polizas} />

        {/* Paginación */}
        <div className="flex relative justify-end select-none mt-3">
          <div
            onClick={!polizas?.first ? () => restPage() : () => {}}
            className="grid place-items-center w-8 h-8 rounded-full transition-all duration-150 hover:cursor-pointer hover:text-foreground hover:bg-primary-light"
          >
            <MdOutlineNavigateBefore className="text-[20px]" />
          </div>
          <div className="border border-orange-300 grid place-items-center w-8 h-8 rounded-full select-none">
            <span className="text-[1.1rem] text-gray-700">{pageMostrar}</span>
          </div>
          <div
            onClick={!polizas?.last ? () => addPage() : () => {}}
            className="grid place-items-center w-8 h-8 rounded-full transition-all duration-150 hover:cursor-pointer hover:text-foreground hover:bg-primary-light"
          >
            <MdOutlineNavigateNext className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
