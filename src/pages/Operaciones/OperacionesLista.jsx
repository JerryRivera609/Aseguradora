import { useState } from "react";
import { FaStoreAlt, FaBuilding } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";

// Datos mockeados de SOAT
const soatsData = [
  {
    "chasis": "1HGCM82633A123456",
    "clase": "Automóvil",
    "sub_clase": "Sedán",
    "marca": "Toyota",
    "modelo": "Corolla",
    "anio": 2022,
    "numero_asientos": 5,
    "uso": "Particular",
    "zona_circulacion": "Lima Metropolitana",
    "tipo_documento": "DNI",
    "telefono": "987654321",
    "email": "juan.perez@example.com",
    "departamento": "Lima",
    "provincia": "Lima",
    "distrito": "Miraflores",
    "direccion": "Av. Larco 123",
    "prima": 1500.5,
    "tipo": "VIRTUAL",
    "id_punto_venta": 2,
    "id_tipo_seguro": 1,
    "id_empleado": 2,
    "placa": "AAA-001",
    "numero_documento": "10000001",
    "nombres": "Pedro Carlos",
    "apell_paterno": "García",
    "apell_materno": "López",
    "numero_poliza": "11112",
    "fecha_vigencia": "2025-09-19T00:00:00Z",
    "fecha_vencimiento": "2026-09-19T00:00:00Z",
    "id_empresa": 2
  },
  {
    "chasis": "2HGCM82633A654321",
    "clase": "Automóvil",
    "sub_clase": "SUV",
    "marca": "Hyundai",
    "modelo": "Tucson",
    "anio": 2023,
    "numero_asientos": 5,
    "uso": "Particular",
    "zona_circulacion": "Lima",
    "tipo_documento": "DNI",
    "telefono": "987111222",
    "email": "sofia.lopez@example.com",
    "departamento": "Lima",
    "provincia": "Lima",
    "distrito": "San Isidro",
    "direccion": "Av. Javier Prado 456",
    "prima": 1800.75,
    "tipo": "VIRTUAL",
    "id_punto_venta": 2,
    "id_tipo_seguro": 1,
    "id_empleado": 2,
    "placa": "AAA-002",
    "numero_documento": "10000002",
    "nombres": "Sofía Elena",
    "apell_paterno": "López",
    "apell_materno": "Ramírez",
    "numero_poliza": "11113",
    "fecha_vigencia": "2025-09-20T00:00:00Z",
    "fecha_vencimiento": "2026-09-20T00:00:00Z",
    "id_empresa": 3
  }
];

export default function OperacionesLista() {
  const [page, setPage] = useState(1);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <IoPricetagSharp /> SOAT Vendidos
        </h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-1 font-inter">
            <FaBuilding /> Oficina Central
          </div>
          <div className="flex items-center gap-1 font-inter">
            <FaStoreAlt /> Punto de Venta
          </div>
        </div>
      </div>

      {/* Tabla simple */}
      <table className="w-full border-collapse border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Placa</th>
            <th className="border p-2">Cliente</th>
            <th className="border p-2">Marca/Modelo</th>
            <th className="border p-2">Prima</th>
            <th className="border p-2">Vigencia</th>
          </tr>
        </thead>
        <tbody>
          {soatsData.map((soat, index) => (
            <tr key={index}>
              <td className="border p-2">{soat.placa}</td>
              <td className="border p-2">
                {soat.nombres} {soat.apell_paterno} {soat.apell_materno}
              </td>
              <td className="border p-2">
                {soat.marca} {soat.modelo}
              </td>
              <td className="border p-2">S/ {soat.prima}</td>
              <td className="border p-2">
                {soat.fecha_vigencia.split("T")[0]} → {soat.fecha_vencimiento.split("T")[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación simple */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 rounded-full border hover:bg-gray-200"
        >
          <MdOutlineNavigateBefore />
        </button>
        <span className="px-3">{page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 rounded-full border hover:bg-gray-200"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
}
