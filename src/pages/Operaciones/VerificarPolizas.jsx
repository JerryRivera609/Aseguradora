import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaFileCsv } from "react-icons/fa";

// Simulación de "CSV cargado previamente" desde otra vista
const archivoCSVAnterior = [
  { numero: "28001234", placa: "ABC-123", estado: "Cobrado" },
  { numero: "28004321", placa: "XYZ-987", estado: "Reportado" },
];

// Simulación de lo que ya hay en el backend
const polizasEnBackend = [
  { numero: "28001234", placa: "ABC-123", estado: "Cobrado" },
  { numero: "28004321", placa: "XYZ-987", estado: "Vendido" },
  { numero: "28009999", placa: "TUV-000", estado: "Cobrado" },
];

export default function VerificacionCSV() {
  const [verificaciones, setVerificaciones] = useState([]);

  useEffect(() => {
    const resultados = archivoCSVAnterior.map((csvPoliza) => {
      const match = polizasEnBackend.find((p) => p.numero === csvPoliza.numero);

      if (!match) {
        return { ...csvPoliza, resultado: "No existe" };
      }

      if (match.estado !== csvPoliza.estado) {
        return { ...csvPoliza, resultado: "Estado diferente" };
      }

      return { ...csvPoliza, resultado: "Correcto" };
    });

    setVerificaciones(resultados);
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-11/12 max-w-[1400px] pt-6 font-inter">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Verificación de Actualización de CSV</h2>
        <p className="text-sm text-zinc-500 mt-1">
          Se están verificando las pólizas actualizadas previamente mediante CSV.
        </p>
      </div>

      <div className="mb-4 flex items-center gap-2 text-orange-500 text-sm font-semibold">
        <FaFileCsv className="text-xl" />
        <span>Archivo: polizas_actualizadas.csv</span>
      </div>

      <table className="w-full text-sm border-t border-zinc-300">
        <thead className="bg-background text-left">
          <tr>
            <th className="px-4 py-2">Nro de Póliza</th>
            <th className="px-4 py-2">Placa</th>
            <th className="px-4 py-2">Estado CSV</th>
            <th className="px-4 py-2">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {verificaciones.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2">{item.numero}</td>
              <td className="px-4 py-2">{item.placa}</td>
              <td className="px-4 py-2">{item.estado}</td>
              <td className="px-4 py-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium inline-flex items-center gap-1 ${
                    item.resultado === "Correcto"
                      ? "bg-green-100 text-green-600"
                      : item.resultado === "Estado diferente"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.resultado === "Correcto" && <FaCheckCircle />}
                  {item.resultado === "Estado diferente" && <FaTimesCircle />}
                  {item.resultado === "No existe" && <FaTimesCircle />}
                  {item.resultado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
