import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import PasosRegistro from "./components/PasosRegistro";
import StepButtons from "../../components/StepButtons";
import { AiFillHome } from "react-icons/ai";
import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";
import PasoVehiculo from "./components/pasos/PasoVehiculo";

export default function PolizaGenerar() {
  const [showModal, setShowModal] = useState(false);

  const breadcrumbItems = [
    { to: "/dashboard", icon: <AiFillHome />, label: "" },
    { to: "/dashboard", label: "Ventas de SOAT" },
    { to: "/ventas/generar", label: "Cotización de SOAT" },
  ];

return (
  <div className="h-[calc(100vh-5rem)] mx-auto w-full py-4 px-2 md:px-6 text-foreground grid grid-rows-[auto_auto_auto_1fr] gap-4">
    {/* HEADER */}
    <div className="flex flex-col md:flex-row justify-between items-center bg-container border border-border rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-3 text-3xl font-bold">
        <IoPricetagSharp className="text-primary" />
        <h1 className="tracking-wide">Cotización de SOAT</h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3 md:mt-0">
        <div className="flex items-center gap-2 text-sm font-medium">
          <FaBuilding className="text-primary" />
          <span>Oficina</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <FaStoreAlt className="text-primary" />
          <select
            className="peer rounded-lg px-2 py-1 bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
            name="puntoDeVenta"
            id="puntoDeVenta"
          >
            <option>PDV 1</option>
            <option>PDV 2</option>
          </select>
        </div>
      </div>
    </div>

    {/* BREADCRUMB */}
    <Breadcrumb items={breadcrumbItems} />

    {/* PASOS */}
    <PasosRegistro paso={1} />

    {/* CONTENT */}
    <div className="bg-container h-full border border-border rounded-2xl shadow-sm grid grid-rows-[auto_1fr_auto] overflow-hidden">
      <PasoVehiculo data={{}} onChange={() => {}} />

      <div className="p-3 flex justify-end">
        <StepButtons
          onPrevious={() => {}}
          onNext={() => {}}
          isFirstStep={false}
          isLastStep={false}
        />
      </div>
    </div>

    {/* MODAL */}
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="w-[320px] bg-container rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center py-6">
            <MdErrorOutline className="text-7xl text-warning mb-2" />
            <span className="text-center px-4 text-base">Mensaje de alerta</span>
          </div>
          <div
            className="w-full py-3 text-center font-semibold bg-primary text-white hover:bg-primary-light cursor-pointer transition-colors"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </div>
        </div>
      </div>
    )}
  </div>
);

}
