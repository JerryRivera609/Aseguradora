import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectField";
import SearchSection from "../../../../components/SearchSection";
import FormGrid from "../../../../components/FormGrid";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { buscarVehiculoPorPlaca } from "../../../../api/vehiculos";
import {} from "../../../../api/mapfreservice";
import { listarMarcasPositiva,listarModelosPositiva,listarVerionesPositiva } from "../../../../api/positivaservice";
import ubigeo from "../../../../data/ubigeo/ubigeo_optimizado.json";
import { tiposYUsosCompletos, placas } from "../../../../data/usos";



const eq = (a, b) => (a || '').trim().toLowerCase() === (b || '').trim().toLowerCase();
const findByNombre = (arr, nombre) => arr.find(x => eq(x.nombre, nombre));


export default function PasoVehiculo({ data, onChange }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tabla Vacía</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Columna 1</th>
            <th className="border px-4 py-2">Columna 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2" colSpan={3}>
              No hay datos disponibles
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
