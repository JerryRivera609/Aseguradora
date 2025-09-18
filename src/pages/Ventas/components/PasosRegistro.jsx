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
  return (
    <div className="grid grid-cols-4 mb-5">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = paso === stepNumber;
        const isCompleted = paso > stepNumber;
        const first = stepNumber === 1 ? true : false;
        const last = stepNumber === 4 ? true : false;
        return (
          <div
            key={index}
            className={`grid place-items-center font-bold p-2 transition-colors duration-100
              ${isActive ? "bg-primary text-white"
                : "bg-primary-light text-foreground"}
              ${first ? "rounded-l-lg" :""}
              ${last ? "rounded-r-lg" :""}
                `}
          >
            <div
              className={`p-2 rounded-full transition-all duration-100
                ${isCompleted ? "bg-success text-container"
                  : "bg-white text-primary"}`}
            >
              {step.icon}
            </div>
            <p>{step.label}</p>
          </div>
        );
      })}
    </div>
  );
}
