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

  useEffect(() => {
    if (data.departamento) {
      const dep = departamentos.find(d => d.id === data.departamento)
        || findByNombre(departamentos, data.departamento);
      if (dep) setDepartamentoId(dep.id);
    }
    if (data.provincia) {
      const prov = provincias.find(p => p.id === data.provincia)
        || findByNombre(provincias, data.provincia);
      if (prov) setProvinciaId(prov.id);
    }
    if (data.distrito) {
      const dist = distritos.find(d => d.id === data.distrito)
        || findByNombre(distritos, data.distrito);
      if (dist) setDistritoId(dist.id);
    }
  }, [data, departamentos, provincias, distritos]);
  //------------------------------------------//


    //Tipos / Clases---------------------------//
  const [grupo, setGrupo] = useState("");
  const [subtipo, setSubtipo] = useState("");
  const [uso,setUso] =useState("");
  const [categoria, setCategoria]= useState("")
  const [categoriaNombre, setCategoriaNombre]= useState("")
  const grupos = Object.keys(tiposYUsosCompletos).map((g) => ({label: g,value: g,}));
  const subtipos = grupo

}
