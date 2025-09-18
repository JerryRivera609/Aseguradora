import React, { useState } from "react";
import { IoPricetagSharp } from "react-icons/io5";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

// 🔹 Datos mock de remesas
const remesasMock = [
  {
    numero_remesa: "REM-001",
    nombre_empleado: "Juan",
    apellido_paterno_empleado: "Pérez",
    apellido_materno_empleado: "Gómez",
    fecha_remesa: "2025-09-10",
  },
  {
    numero_remesa: "REM-002",
    nombre_empleado: "María",
    apellido_paterno_empleado: "López",
    apellido_materno_empleado: "Torres",
    fecha_remesa: "2025-09-15",
  },
];

// 🔹 Datos mock de pólizas por remesa
const polizasMock = {
  "REM-001": [
    {
      empresa: "Rímac Seguros",
      polizas: "11111",
      fecha_venta: "2025-09-10",
      cliente_nombre: "Carlos",
      cliente_apell_paterno: "Ramírez",
      cliente_apell_materno: "Castro",
      placa: "AAA-001",
      uso: "Particular",
      prima: 1500.5,
      estado: "VENDIDO",
    },
    {
      empresa: "Pacífico Seguros",
      polizas: "11112",
      fecha_venta: "2025-09-11",
      cliente_nombre: "Lucía",
      cliente_apell_paterno: "Fernández",
      cliente_apell_materno: "Quispe",
      placa: "AAA-002",
      uso: "Taxi",
      prima: 1800.0,
      estado: "COBRADO",
    },
  ],
  "REM-002": [
    {
      empresa: "Mapfre",
      polizas: "11113",
      fecha_venta: "2025-09-15",
      cliente_nombre: "Pedro",
      cliente_apell_paterno: "Gutiérrez",
      cliente_apell_materno: "Lozano",
      placa: "BBB-001",
      uso: "Particular",
      prima: 1200.0,
      estado: "ENVIADO",
    },
  ],
};

export default function RemesasLista() {
  const [openModal, setOpenModal] = useState(false);
  const [remesaSelected, setRemesaSelected] = useState(null);

  const handleMostarModal = (remesa) => {
    setRemesaSelected(remesa);
    setOpenModal(true);
  };

  const handleCerrarModal = () => {
    setRemesaSelected(null);
    setOpenModal(false);
  };

  return (
    <div className="grid grid-rows-[4rem_1fr] min-h-0 h-full mx-auto w-full py-3 text-gray-800">
      {/* Header */}
      <div className="flex items-center gap-2 text-xl font-bold text-primary">
        <IoPricetagSharp className="text-secondary text-2xl" />
        <span>Remesas</span>
      </div>

      {/* Tabla de Remesas */}
      <div className="text-gray-800 w-full h-full overflow-auto mt-3">
        <table className="min-w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr className="text-lg bg-primary text-white text-center">
              <th className="px-4 py-2 rounded-l-xl">Nro de Remesa</th>
              <th className="px-4 py-2">Operador</th>
              <th className="px-4 py-2">Fecha Creación</th>
              <th className="px-4 py-2 rounded-r-xl">Documento</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border bg-white rounded-xl shadow">
            {remesasMock.map((r, i) => (
              <tr
                key={i}
                className="text-center hover:bg-gray-100 hover:cursor-pointer"
                onClick={() => handleMostarModal(r)}
              >
                <td className="px-4 py-2 font-semibold">{r.numero_remesa}</td>
                <td className="px-4 py-2">
                  {r.nombre_empleado} {r.apellido_paterno_empleado}{" "}
                  {r.apellido_materno_empleado}
                </td>
                <td className="px-4 py-2">{r.fecha_remesa}</td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
                    Descargar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Pólizas */}
      {openModal && (
        <div className="fixed grid place-items-center left-0 top-0 z-50 bg-[rgba(0,0,0,0.36)] h-full w-full">
          <div className="max-w-5xl w-[90%] bg-white grid grid-rows-[3rem_1fr_3rem] rounded-xl shadow-lg">
            {/* Header modal */}
            <div className="border-b h-full w-full flex justify-between items-center px-6">
              <span className="font-bold text-xl">
                Pólizas de la remesa: {remesaSelected?.numero_remesa}
              </span>
              <button
                className="bg-red-500 text-white font-bold px-3 py-1 rounded-lg hover:bg-red-600 transition"
                onClick={handleCerrarModal}
              >
                X
              </button>
            </div>

            {/* Tabla pólizas */}
            <div className="w-full p-4 overflow-auto">
              <table className="min-w-full text-sm border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-lg bg-primary text-white text-center">
                    <th className="px-4 py-2 rounded-l-xl">#</th>
                    <th className="px-4 py-2">Empresa</th>
                    <th className="px-4 py-2">Nro de Póliza</th>
                    <th className="px-4 py-2">Fecha Venta</th>
                    <th className="px-4 py-2">Cliente</th>
                    <th className="px-4 py-2">Placa</th>
                    <th className="px-4 py-2">Uso</th>
                    <th className="px-4 py-2">Monto</th>
                    <th className="px-4 py-2 rounded-r-xl">Estado</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border bg-white rounded-xl shadow">
                  {polizasMock[remesaSelected?.numero_remesa]?.map((p, i) => (
                    <tr key={i} className="text-center">
                      <td className="px-4 py-2 font-bold">{i + 1}</td>
                      <td className="px-4 py-2">{p.empresa}</td>
                      <td className="px-4 py-2">{p.polizas}</td>
                      <td className="px-4 py-2">{p.fecha_venta}</td>
                      <td className="px-4 py-2">
                        {p.cliente_nombre} {p.cliente_apell_paterno}{" "}
                        {p.cliente_apell_materno}
                      </td>
                      <td className="px-4 py-2">{p.placa}</td>
                      <td className="px-4 py-2">{p.uso}</td>
                      <td className="px-4 py-2 text-green-600 font-bold">
                        S/. {p.prima}
                      </td>
                      <td>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-bold
                            ${
                              p.estado === "VENDIDO"
                                ? "text-blue-700 bg-blue-100"
                                : p.estado === "ENVIADO"
                                ? "text-green-700 bg-green-100"
                                : p.estado === "COBRADO"
                                ? "text-purple-700 bg-purple-100"
                                : "text-gray-600 bg-gray-200"
                            }`}
                        >
                          {p.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer modal */}
            <div className="flex justify-end items-center px-6 py-2">
              <button
                onClick={handleCerrarModal}
                className="bg-gray-200 text-gray-800 px-4 py-1 rounded-lg hover:bg-gray-300 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
