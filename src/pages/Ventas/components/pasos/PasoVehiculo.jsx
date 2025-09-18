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


    ? tiposYUsosCompletos[grupo].items.map((s) => ({
      label: s.key,
      value: s.key,
      positiva: s.positiva,
      mapfre: s.mapfre,
    }))
  : [];

  const usos = grupo && subtipo
  ? Object.keys(
      tiposYUsosCompletos[grupo].items.find((s) => s.key === subtipo.label)?.usos || {}
    ).map((u) => ({
      label: u,
      value: u,
    }))
  : [];
  const categorias = grupo && subtipo
  ? (tiposYUsosCompletos[grupo].items.find((s) => s.key === subtipo.label)?.categoria || []).map((c) => ({
      label: c.cat,
      value: c.idPosi,
    }))
  : [];

  const seleccionado = tiposYUsosCompletos[grupo]?.items.find((s) => s.key === subtipo.label);
  const equivalencias = uso 
    ? seleccionado?.usos[uso] 
    : null;

  useEffect(() => {
    if (data.grupo) setGrupo(data.grupo);
    if (data.clase) setSubtipo(data.clase);
    if (data.uso) setUso(data.uso);
    if (data.categoria) setCategoria(data.categoriaID);
  }, [data]);
  //-----------------------//

   //------IMAGENES-----------
  const imgGrupo = grupo ? tiposYUsosCompletos[grupo].imagen : "";
  const imgIncog = "/vehiculo.png"

  const categoriaLetra = categoriaNombre ? categoriaNombre[0] : null;
  const placasDisponibles = categoriaLetra ? placas[categoriaLetra] || [] : [];

  const placaSeleccionada = uso ? placasDisponibles.find((p) => p.uso === uso): null;
  const placaIncog = "/placaincog.png";
  const placaimg = placaSeleccionada ? placaSeleccionada.img : placaIncog;
  //POSITIVA--------------//
  const [formMarcas,setFormMarcas]=useState({
    nombre_clase: "",
    nombre_marca: "",
    nombre_modelo: "",
  })

}
