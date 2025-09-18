import { useState } from "react";
import confetti from 'canvas-confetti';
import Breadcrumb from "../../components/Breadcrumb";
import PasosRegistro from "./components/PasosRegistro";
import StepButtons from "../../components/StepButtons";
import { AiFillHome } from "react-icons/ai";
import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoPricetagSharp } from "react-icons/io5";

import PasoVehiculo from "./components/pasos/PasoVehiculo";
import PasoContratante from "./components/pasos/PasoContratante";
import PasoAseguradora from "./components/pasos/PasoAseguradora";
import PasoResumen from "./components/pasos/PasoResumen";

//Mapfre
import { cotizaModelMapfre } from "../../util/mapfre/MapfreCotiza";
import { emitirSoatMapfre } from "../../api/mapfreservice";
// import { cotizarMapfre } from "../../api/mapfreservice";
import { enviarMapfre } from "../../util/mapfre/MapfreEmitirSoat";
import { modelMapfrePol } from "../../util/mapfre/MapfreRecibirSoat";


//Veransa
import { actPoliModel, savePoliModel } from "../../util/Veransa/enviarDatosVenta";
import { almacenarPolizaPrevEmision, actualizarPolizaPostEmision } from "../../api/polizas";
import { obtenerCotizaciones } from "../../api/cotizaciones";
import { useAuth } from "../Login/AuthContext";
import { cotizaModelPositiva } from "../../util/positiva/PositivaCotiza";
import { enviarPositiva } from "../../util/positiva/PositivaEmitirSoat";
import { emitirSoatPositiva } from "../../api/positivaservice";
import { modelPositivaPol } from "../../util/positiva/PositivaRecibirSoat";
import LogoSolo from "../../assets/LogoSolo";
import PasoFecha from "./components/pasos/PasoFechaCotiza";
import Loading from "../../layout/Loading";
// import { cotizarPositiva } from "../../api/positivaservice";


const fromUTCString = (utcString) => {
  const d = new Date(utcString);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const year = d.getUTCFullYear();

  return `${day}/${month}/${year}`;
};


export default function PolizaGenerar() {
  
}