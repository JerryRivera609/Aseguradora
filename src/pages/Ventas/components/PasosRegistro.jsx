import { LuIdCard } from "react-icons/lu";
import { FaCarRear } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoShieldSharp } from "react-icons/io5";

const steps = [
  { label: "Datos del vehículo", icon: <FaCarRear /> },
  { label: "Registro de Datos", icon: <LuIdCard /> },
  { label: "Elegir aseguradora", icon: <IoShieldSharp /> },
  { label: "Finalizar", icon: <FaCheck /> },
];

export default function StepIndicator({ paso }) {
 
}
