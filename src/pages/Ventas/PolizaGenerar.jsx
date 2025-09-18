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
    <div className="h-[calc(100vh-5rem)] grid grid-rows-[6rem_1.5rem_5rem_1fr] mx-auto w-full py-3 text-foreground">
      <div className="flex justify-between w-full bg-container md:px-4 rounded-lg border border-border">
        <div className="text-4xl font-bold flex items-center gap-2">
          <IoPricetagSharp />
          <h1>Cotización de SOAT</h1>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1 font-inter">
            <FaBuilding />
            <span>Oficina</span>
          </div>
          <div className="flex items-center gap-1 font-inter mt-2">
            <FaStoreAlt />
            <div className="relative">
              <select
                className="peer w-full appearance-none bg-transparent border-0 border-b-2 text-foreground border-border focus:outline-none focus:text-foreground"
                name="puntoDeVenta"
                id="puntoDeVenta"
              >
                <option>PDV 1</option>
                <option>PDV 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumb items={breadcrumbItems} />
      <PasosRegistro paso={1} />

      <div className="bg-container h-full border w-full border-border md:p-2 rounded-2xl grid grid-rows-[5rem_1fr_3rem]">
        <PasoVehiculo data={{}} onChange={() => {}} />
        <StepButtons
          onPrevious={() => {}}
          onNext={() => {}}
          isFirstStep={false}
          isLastStep={false}
        />
      </div>

      {showModal && (
        <div className="fixed grid place-items-center left-0 top-0 z-50 bg-[rgba(0,0,0,0.36)] h-full w-full select-none">
          <div className="w-[300px] h-[200px] bg-container grid place-items-center grid-rows-[125px_200px_75px] rounded-xl">
            <MdErrorOutline className="text-8xl" />
            <div className="border-t border-b border-disabled h-full w-full grid place-items-center px-3">
              <span>Mensaje de alerta</span>
            </div>
            <div
              className="w-full h-full rounded-b-xl bg-disabled grid place-items-center transition-all duration-300 ease-out hover:bg-primary text-primary hover:text-primary-light hover:cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <span>Cerrar</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
