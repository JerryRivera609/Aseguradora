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
  const [mensaje, setMensaje] = useState("");
  

  //UBIGEO
  const {departamentos,provincias,distritos} =ubigeo;
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
  //MARCAS
  const [marcas,setMarcas] =useState([])
  const [marca, setMarca] = useState({ id: "", nombre: "" });
  const handleListarMarcas = async (nuevoSubtipo) => {
    try {
      const actualizado = {
        ...formMarcas,
        nombre_clase: nuevoSubtipo,
      };
      setFormMarcas(actualizado);
      const datos = await listarMarcasPositiva(actualizado);
      setMarcas(datos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (grupo) {
      setMarcas([]);
      setModelos([]);
      setVersiones([]);
      setCategoriaNombre([])
      setCategoria([])
    }
  }, [grupo]);
  useEffect(() => {
    if (subtipo) {
      setMarcas([]);
      setModelos([]);
      setVersiones([]);
      setCategoriaNombre([])
      setCategoria([])
      handleListarMarcas(subtipo.positiva?.nombre);
    }
  }, [subtipo]);
  //

  //MODELOS
  const [modelos,setModelos] =useState([])
  const [modelo, setModelo] = useState({ id: "", nombre: "" });
  const handleListarModelos = async (nuevaMarca) => {
    try {
      const actualizado = {
        ...formMarcas,
        nombre_marca: nuevaMarca,
      };
      setFormMarcas(actualizado);
      const datos = await listarModelosPositiva(actualizado);
      setModelos(datos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  if (marca.id) {
    setModelos([]);
    setVersiones([]);
    handleListarModelos(marca.nombre);
  }
}, [marca]);
  //

  //VERSION
  const [versiones,setVersiones] =useState([])
  const [version,setVersion]=useState({ id: "", nombre: "" });
  const handleListarVersiones = async (nuevoModelo) => {
      try {
        const actualizado = {
          ...formMarcas,
          nombre_modelo: nuevoModelo,
        };
        setFormMarcas(actualizado);
        const datos = await listarVerionesPositiva(actualizado);
        setVersiones(datos);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
    if (modelo.id) {
      setVersiones([])
      handleListarVersiones(modelo.nombre);
    }
  }, [modelo]);
  //

  //----------PLACAS-------------
  const handleBuscarPlaca = async () => {
    try {
      const placa = data.placa?.trim().toUpperCase();
      const vehiculo = await buscarVehiculoPorPlaca(placa);
      console.log(vehiculo)
      const datos = vehiculo?.data || vehiculo;
      onChange({...datos,placa});
      const dep = findByNombre(departamentos, datos.departamento);
      if (dep) {
        setDepartamentoId(dep.id);
        const prov = findByNombre(provincias.filter(p => p.departamentoId === dep.id), datos.provincia);
        if (prov) {
          setProvinciaId(prov.id);
          const dist = findByNombre(distritos.filter(d => d.provinciaId === prov.id), datos.distrito);
          if (dist) setDistritoId(dist.id);
        }
      }
      setMensaje("");
    } catch (err) {
      console.error(err);
    }
  };
  //-----------REGEX PARA INPUTS (CONDICIONALES)---------------

  const regexPlaca= /^(?:[A-Z]{3}-\d{3}|[A-Z]{2}-\d{4}|[A-Z]{4}-\d{2}|\d{4}-[A-Z]{2})$/;
  const regexChasis = /^[A-HJ-NPR-Z0-9]{17}$/;
  const regexMotor = /^[A-HJ-NPR-Z0-9]{9,17}$/;

    const currentYear = new Date().getFullYear();
  const regexAnio = new RegExp(`^(19\\d{2}|20\\d{2}|${currentYear})$`);
  const regexAsiento = /^(?:[1-9]|[1-6][0-9]|70)$/;

  return (
    <>
      <SearchSection>
        <div className="flex items-center space-x-5">
          <span className="text-lg">Ingrese placa</span>
          <InputField
            label="Placa a buscar"
            placeholder="ABC-123"
            value={data.placa || ""}
            onChange={(e) => onChange({ placa: e.target.value.toUpperCase() })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleBuscarPlaca();
              }
            }}
            minLength={0}
            maxLength={7}
            regex={regexPlaca}
            // errorMsg="Formato inválido. Ej: ABC-123, AB-1234, ABCD-12"
          />
          <button
            className="flex items-center gap-2 rounded-full bg-foreground text-background px-10 py-2.5 hover:cursor-pointer"
            onClick={handleBuscarPlaca}
          >
            <FaSearch /> Buscar
          </button>
          {mensaje && <p className="text-error text-sm font-medium px-2">{mensaje}</p>}
          {equivalencias ? (
            <div className="">
              <p><strong>Mapfre:</strong> {equivalencias.mapfre || "—"}</p>
              <p><strong>Positiva:</strong> {equivalencias.positiva || "—"}</p>
            </div>
          ) : (
            <p className="text-disabled">Seleccione un uso para ver equivalencias</p>
          )}
        </div>
        <div className="flex gap-10 text-black">
          <div className="w-20 h-20">
            {imgGrupo ? <img src={imgGrupo} alt="vehiculo" /> : <img src={imgIncog} alt="vehiculo" />}
          </div>
          <div className={`w-30 grid place-items-center bg-contain bg-no-repeat bg-center`} style={{ backgroundImage: `url(${placaimg})` }}>
            {/* {placaSeleccionada ? <img src={placaSeleccionada.img} alt="placa" /> : <img src={placaIncog} alt="placa" />} */}
              <span className="font-bold text-2xl pt-3">{data.placa}</span>
          </div>
        </div>
      </SearchSection>

      <FormGrid>
        <SelectField
          label="Grupo de vehículo"
          name="grupo"
          value={grupo}
          onChange={(e) => {
            setGrupo(e.target.value);
            setSubtipo("");
            setMarca({ id: "", nombre: "" });
            setModelo({ id: "", nombre: "" });
            setVersion({ id: "", nombre: "" });
            setMarcas([]);
            setModelos([]);
            setVersiones([]);
            setFormMarcas({ nombre_clase: "", nombre_marca: "", nombre_modelo: "" });
            onChange({
              grupo: e.target.value,
              clase: "",
              marca: "",
              marcaNombre: "",
              modelo: "",
              modeloNombre: "",
              version: "",
              versionNombre: ""
            })
          }}
          options={grupos}
        />
        <SelectField
          label="Subtipo"
          name="subtipo"
          value={subtipo.label}
          onChange={(e) => {
            const selected = subtipos.find(s => s.value === e.target.value);
            setSubtipo(selected);
            setMarca({ id: "", nombre: "" });
            setModelo({ id: "", nombre: "" });
            setVersion({ id: "", nombre: "" });
            setMarcas([]);
            setModelos([]);
            setVersiones([]);
            setFormMarcas({ nombre_clase: e.target.value, nombre_marca: "", nombre_modelo: "" });
            onChange({
              clase: selected,
              clase_positiva: selected?.positiva,
              clase_mapfre: selected?.mapfre,
              marca: "",
              marcaNombre: "",
              modelo: "",
              modeloNombre: "",
              version: "",
              versionNombre: "",
            });
          }}
          options={subtipos}
        />
        <SelectField
          label="Categoría"
          options={categorias}
          value={categoria}
          onChange={(e) => {
            const selected = categorias.find(s => String(s.value) === e.target.value);
            setCategoria(e.target.value);
            setCategoriaNombre(selected?.label)
            onChange({
              categoria: selected?.label,
              categoriaID: selected?.value
            })
          }}
        />
        <SelectField
          label="Uso"
          name="uso"
          value={uso}
          onChange={(e) => {
            const selected = usos.find(s => s.value === e.target.value);
            setUso(e.target.value);
            onChange({
              uso:e.target.value,
              usoID: selected?.value
            })
          }}
          options={usos}
        />
        {/* <InputField
          label="Placa"
          placeholder="ABC-123"
          value={data.placa || ""}
          onChange={(e) => onChange({ placa: e.target.value.toUpperCase() })}
          minLength={5}
          maxLength={7}
          regex={regexPlaca}
          errorMsg="Formato inválido. Ej: ABC-123, AB-1234, ABCD-12"
        /> */}
        <InputField
          label="Nro. de serie/chasis"
          placeholder="VF3FAXXXXXXXXXXXX"
          value={data.serie || ""}
          onChange={(e) => onChange({ serie: e.target.value.toUpperCase() })}
          minLength={17}
          maxLength={17}
          regex={regexChasis}
          errorMsg="Formato inválido. Ej: VF3FAXXXXXXXXXXXX"
        />
        <InputField
          label="Nro de motor"
          placeholder="M0T0R101010101"
          value={data.motor || ""}
          onChange={(e) => onChange({ motor: e.target.value.toUpperCase() })}
          minLength={5}
          maxLength={17}
          regex={regexMotor}
          errorMsg="Formato inválido. Ej: M0T0R101010101010"
        />
        <SelectField
          label="Marca del vehículo"
          name="marca"
          value={marca.id}
          onChange={(e) => {
            const selectedId = e.target.value;
            const selected = marcas.find((d) => d.IdMarca === selectedId);
            const nuevaMarca={id:selectedId,nombre:selected?.Descripcion}
            setMarca(nuevaMarca);
            onChange({ marcaNombre: nuevaMarca.nombre, marca: nuevaMarca.id});
          }}
          options={(marcas || []).map((u) => ({
            label: u.Descripcion,
            value: u.IdMarca,
          }))}
        />
        <SelectField
          label="Modelo del vehículo"
          name="modelo"
          value={modelo.id}
          onChange={(e) => {
            const selectedId = e.target.value;
            const selected = modelos.find((d) => d.IdModelo === selectedId);
            const nuevoModelo={id:selectedId,nombre:selected?.Descripcion}
            setModelo(nuevoModelo);
            onChange({ modeloNombre: nuevoModelo.nombre, modelo: nuevoModelo.id});
          }}
          options={(modelos || []).map((u) => ({
            label: u.Descripcion,
            value: u.IdModelo,
          }))}
        />
        <SelectField
          label="Version del vehículo"
          name="version"
          value={version.id}
          onChange={(e) => {
            const selectedId = e.target.value;
            const selected = versiones.find((d) => String(d.IdVersion) === selectedId);
            const nuevaVersion={id:selectedId,nombre:selected?.Descripcion}
            setVersion(nuevaVersion);
            onChange({ version: selectedId, versionNombre: nuevaVersion.nombre});
          }}
          options={(versiones || []).map((u) => ({
            label: u.Descripcion,
            value: u.IdVersion,
          }))}
        />
        <InputField
          label="Año"
          placeholder="2007"
          value={data.anio || ""}
          onChange={(e) => {
            const soloNum= e.target.value.replace(/\D/g,"")
            onChange({ anio: soloNum })
          }}
          minLength={4}
          maxLength={4}
          regex={regexAnio}
          errorMsg="Formato inválido. Mayor a 1900"
        />
        <InputField
          label="Nro. de asientos"
          placeholder="5"
          value={data.numero_asientos || ""}
          onChange={(e) => {
            const soloNum= e.target.value.replace(/\D/g,"")
            onChange({ numero_asientos: soloNum })
          }}
          minLength={1}
          maxLength={2}
          regex={regexAsiento}
          errorMsg="Formato inválido. Del 1 al 69"
        />

        <SelectField
            label="Departamento"
            name="departamento"
            value={departamentoId}
            onChange={(e) => {
              const selected = departamentos.find(d => d.id === e.target.value);
              setDepartamentoId(e.target.value);
              setProvinciaId("");
              setDistritoId("");
              onChange({ departamento: selected?.nombre || "", departamentoId: selected?.id });
            }}
            options={departamentos.map(dep => ({
              label: dep.nombre,
              value: dep.id
            }))}
          />

          <SelectField
            label="Provincia"
            name="provincia"
            value={provinciaId}
            onChange={(e) => {
              const selected = provincias.find(p => p.id === e.target.value);
              setProvinciaId(e.target.value);
              setDistritoId("");
              onChange({ provincia: selected?.nombre || "", provinciaId:selected?.id});
            }}
            options={provinciasFiltradas.map(prov => ({
              label: prov.nombre,
              value: prov.id
            }))}
          />

          <SelectField
            label="Distrito"
            name="distrito"
            value={distritoId}
            onChange={(e) => {
              const selected = distritos.find(d => d.id === e.target.value);
              setDistritoId(e.target.value);
              onChange({ distrito: selected?.nombre || "", distritoId:selected?.id});
            }}
            options={distritosFiltrados.map(dist => ({
              label: dist.nombre,
              value: dist.id
            }))}
          />
      </FormGrid>
    </>
  );
}
