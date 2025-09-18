import { useState, useEffect } from "react";
import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";

// ⚠️ Si tu JSON está en la misma carpeta, puedes importarlo directo:
import registros from "./registros_ventas.json";

export default function OperacionesLista() {
  const [soats, setSoats] = useState([]);
  const [pageMostrar, setPageMostrar] = useState(1);

  useEffect(() => {
    setSoats(registros);

  }, []);

  return (
    <div className="grid grid-rows-[3rem_auto_1fr_2rem] min-h-0 h-full mx-auto w-full py-3 text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-end w-full px-4 mb-4 rounded-lg">
        <div className="flex items-center gap-2 text-xl font-bold text-primary">
          <IoPricetagSharp className="text-secondary text-2xl" />
          <span>SOAT Vendidos</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <div className="flex items-center gap-1">
            <FaBuilding className="text-primary" /> Oficina Central
          </div>
          <div className="flex items-center gap-1">
            <FaStoreAlt className="text-primary" /> Tienda Principal
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white shadow-sm p-4 rounded-lg border mb-4">
        <input
          type="text"
          placeholder="Ingrese Placa"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
          Buscar SOAT
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Descargar Excel
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-auto rounded-lg border shadow-sm">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-2 text-left"># Póliza</th>
              <th className="px-4 py-2 text-left">Placa</th>
              <th className="px-4 py-2 text-left">Vehículo</th>
              <th className="px-4 py-2 text-left">Cliente</th>
              <th className="px-4 py-2 text-left">Prima</th>
              <th className="px-4 py-2 text-left">Vigencia</th>
            </tr>
          </thead>
          <tbody>
            {soats.map((s, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition text-gray-700"
              >
                <td className="px-4 py-2">{s.numero_poliza}</td>
                <td className="px-4 py-2 font-semibold">{s.placa}</td>
                <td className="px-4 py-2">
                  {s.marca} {s.modelo} {s.anio}
                </td>
                <td className="px-4 py-2">
                  {s.nombres} {s.apell_paterno} {s.apell_materno}
                </td>
                <td className="px-4 py-2 text-green-600 font-bold">
                  S/. {s.prima}
                </td>
                <td className="px-4 py-2">
                  {s.fecha_vigencia} → {s.fecha_vencimiento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-end items-center gap-2 mt-3">
        <div className="grid place-items-center w-8 h-8 rounded-full border hover:bg-gray-100 cursor-pointer">
          <MdOutlineNavigateBefore />
        </div>
        <div className="w-8 h-8 grid place-items-center border rounded-full font-medium">
          {pageMostrar}
        </div>
        <div className="grid place-items-center w-8 h-8 rounded-full border hover:bg-gray-100 cursor-pointer">
          <MdOutlineNavigateNext />
        </div>
      </div>
    </div>
  );
}
