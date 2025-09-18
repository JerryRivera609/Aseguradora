import { FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function SiniestrosSeg() {
  const siniestros = [
    {
      numero: "28001234",
      placa: "ABC-123",
      fecha: "2025-06-01",
      estado: "Pendiente",
    },
    {
      numero: "28004321",
      placa: "XYZ-987",
      fecha: "2025-05-28",
      estado: "Resuelto",
    },
    {
      numero: "28009999",
      placa: "RIM-999",
      fecha: "2025-05-20",
      estado: "Rechazado",
    },
  ];

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-11/12 max-w-[1400px] pt-6 font-inter">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Seguimiento de Siniestros</h2>
        <p className="text-sm text-background mt-1">
          Visualiza el estado actual de siniestros reportados por los clientes.
        </p>
      </div>

      <table className="w-full text-sm border-t border-disabled">
        <thead className="bg-background text-left">
          <tr>
            <th className="px-4 py-2">Nro de Póliza</th>
            <th className="px-4 py-2">Placa</th>
            <th className="px-4 py-2">Fecha de Reporte</th>
            <th className="px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {siniestros.map((s, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2">{s.numero}</td>
              <td className="px-4 py-2">{s.placa}</td>
              <td className="px-4 py-2">{s.fecha}</td>
              <td className="px-4 py-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium inline-flex items-center gap-1 ${
                    s.estado === "Pendiente"
                      ? "bg-warning-light text-warning"
                      : s.estado === "Resuelto"
                      ? "bg-success-light text-success"
                      : "bg-error-light text-error"
                  }`}
                >
                  {s.estado === "Pendiente" && <FaClock />}
                  {s.estado === "Resuelto" && <FaCheckCircle />}
                  {s.estado === "Rechazado" && <FaTimesCircle />}
                  {s.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
