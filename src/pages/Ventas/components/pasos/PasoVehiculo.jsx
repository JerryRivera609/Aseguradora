import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectField";
import SearchSection from "../../../../components/SearchSection";
import FormGrid from "../../../../components/FormGrid";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { buscarVehiculoPorPlaca } from "../../../../api/vehiculos";
import { } from "../../../../api/mapfreservice";
import { listarMarcasPositiva, listarModelosPositiva, listarVerionesPositiva } from "../../../../api/positivaservice";
import ubigeo from "../../../../data/ubigeo/ubigeo_optimizado.json";
import { tiposYUsosCompletos, placas } from "../../../../data/usos";



const eq = (a, b) => (a || '').trim().toLowerCase() === (b || '').trim().toLowerCase();
const findByNombre = (arr, nombre) => arr.find(x => eq(x.nombre, nombre));


export default function PasoVehiculo({ data, onChange }) {
  const [mensaje, setMensaje] = useState("");
  const { departamentos, provincias, distritos } = ubigeo;
  const [departamentoId, setDepartamentoId] = useState("");
  const [provinciaId, setProvinciaId] = useState("");
  const [distritoId, setDistritoId] = useState("");

  const provinciasFiltradas = provincias.filter(p => p.departamentoId === departamentoId);
  const distritosFiltrados = distritos.filter(d => d.provinciaId === provinciaId);

}
