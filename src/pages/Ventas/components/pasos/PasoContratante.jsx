import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectField";
import SearchSection from "../../../../components/SearchSection";
import FormGrid from "../../../../components/FormGrid";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

import ubigeo from "../../../../data/ubigeo/ubigeo_optimizado.json";
import { buscarCliente } from "../../../../api/clientes";

const eq = (a, b) => (a || '').trim().toLowerCase() === (b || '').trim().toLowerCase();
const findByNombre = (arr, nombre) => arr.find(x => eq(x.nombre, nombre));

export default function PasoContratante({ data, onChange}) {
    const [mensaje, setMensaje] = useState("");
    
    //ubigeo-----------------------
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
    //


    const handleBuscarCliente = async () => {
      const tipo = data.tipo_documento?.trim().toUpperCase();
      const numero = data.numero_documento?.trim();

      try {
        const cliente = await buscarCliente(tipo, numero);

        const datos = cliente?.data || cliente;

        if (cliente.mensaje === "factiliza") {
          setMensaje("⚠️ Cliente no está en la base de datos local. Se usaron datos externos.");
        } else {
          setMensaje("");
        }
        const depMatch = findByNombre(departamentos, datos.departamento);
        const provMatch = findByNombre(provincias, datos.provincia);
        // optionally intentar vincular provincia al departamento si hay ambigüedad:
        const provMatch2 = !provMatch && depMatch
          ? provincias.find(p => p.departamentoId === depMatch.id && eq(p.nombre, datos.provincia))
          : provMatch;
        const distMatch = findByNombre(distritos, datos.distrito) ||
                          (provMatch2 ? distritos.find(d => d.provinciaId === provMatch2.id && eq(d.nombre, datos.distrito)) : undefined);

        // actualizar estados locales para que los SelectField muestren la opción correcta
        setDepartamentoId(depMatch?.id || "");
        setProvinciaId(provMatch2?.id || "");
        setDistritoId(distMatch?.id || "");

        // enviar al padre tanto los nombres originales como los ids detectados
        onChange({
          ...datos,
          departamento: datos.departamento || depMatch?.nombre || "",
          departamentoId: depMatch?.id || "",
          provincia: datos.provincia || provMatch2?.nombre || "",
          provinciaId: provMatch2?.id || "",
          distrito: datos.distrito || distMatch?.nombre || "",
          distritoId: distMatch?.id || ""
        });
      } catch (error) {
        setMensaje("❌ No se encontró el cliente en ningún sistema.");
        onChange({ tipo_documento: tipo, numero_documento: numero });
        console.error(error);
      }
    };

    const disabled = data.tipo_documento === "RUC";
    const toUTC = (dateStr) => {
      if (!dateStr) return "";
      return new Date(dateStr).toISOString(); 
    };

    
  //-----------REGEX PARA INPUTS (CONDICIONALES)---------------
    //-documentos
    const tiposDoc = [
      { label: "DNI", value: "DNI", td: 1 , min: 8, max: 8, regex: /^[0-9]+$/, errorMsg: "El DNI debe contener 8 dígitos"},
      { label: "RUC", value: "RUC", td: 2 , min: 11, max: 11, regex: /^[0-9]+$/, errorMsg: "El CE debe contener 11 dígitos"},
      { label: "Carné Extranj.", value: "CE", td: 3 , min: 9, max: 9, regex: /^[0-9]+$/, errorMsg: "El RUC debe contener 9 dígitos" },
    ];
    const selectedDoc = tiposDoc.find(opt => opt.value === data.tipo_documento);
    //

    const regexTelefono= /^(9\d{8})$/;
    const regexNombres= /^[A-Z]$/;
    const regexEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <>
      {}
      <SearchSection>
        <div className="flex items-center space-x-5">
          <span className="text-lg">Ingrese Nro Documento</span>
          <SelectField
            name="tipoDocumento"
            label="Documento"
            value={data.tipo_documento || ""}
            onChange={(e) => {
              const selected = tiposDoc.find(opt => opt.value === e.target.value);
              onChange({
                tipo_documento: selected.value,
                td: selected.td
              });
            }}
            options={tiposDoc}
          />
          <InputField
            label="Nro Documento"
            value={data.numero_documento || ""}
            onChange={(e) => {
              const soloNum= e.target.value.replace(/\D/g,"")
              onChange({ numero_documento: soloNum })
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleBuscarCliente();
                }
              }}
            minLength={selectedDoc?.min}
            maxLength={selectedDoc?.max}
            regex={selectedDoc?.regex}
            errorMsg={selectedDoc?.errorMsg}
          />
          <button className="flex items-center gap-2 rounded-2xl bg-foreground p-3 text-background px-10 hover:cursor-pointer"
            onClick={handleBuscarCliente}><FaSearch /> Buscar
          </button>
          {mensaje && (
            <p className="text-error text-sm font-medium px-2">{mensaje}</p>
          )}
        </div>
        <div>

        </div>
      </SearchSection>

      {/* {(mostrarFormulario || data.numero_documento) && ( */}
        <FormGrid>
          {/* <SelectField
            label="Tipo de Documento"
            name="tipoDocumento"
            value={data.tipo_documento || ""}
            onChange={(e) => {
              const selected = tiposDoc.find(opt => opt.value === e.target.value);
              onChange({
                tipo_documento: selected.value,
                td: selected.td
              });
            }}
            options={tiposDoc}
          />
          <InputField
            label="Nro. de documento"
            placeholder="Ej. 12345678"
            value={data.numero_documento || ""}
            onChange={(e) => {
              const soloNum= e.target.value.replace(/\D/g,"")
              onChange({ numero_documento: soloNum })
            }}
            minLength={selectedDoc?.min}
            maxLength={selectedDoc?.max}
            regex={selectedDoc?.regex}
            errorMsg={selectedDoc?.errorMsg}
          /> */}
          <InputField 
            label="Nombres" 
            placeholder="Ingrese el nombre" 
            value={data.nombres || ""} 
            regex={regexNombres} 
            onChange={(e) => {
              const soloLetra= e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase()
              onChange({ nombres: soloLetra })
            }}
          />
          <InputField 
            label="Primer apellido" disabled={disabled} 
            placeholder="Ingrese el primer apellido" 
            value={data.apellido_paterno || ""} 
            onChange={(e) => {
              const soloLetra= e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase()
              onChange({ apellido_paterno: soloLetra })
            }}
          />
          <InputField 
            label="Segundo apellido" disabled={disabled} 
            placeholder="Ingrese el segundo apellido" 
            value={data.apellido_materno || ""} 
            onChange={(e) => {
              const soloLetra= e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase()
              onChange({ apellido_materno: soloLetra })
            }}
          />
          <InputField label="Fecha de nacimiento" type="date" value={data.fecha_nacimiento ? data.fecha_nacimiento.split("T")[0] : ""} name="fecha_nacimiento" onChange={(e) => onChange({ fecha_nacimiento: toUTC(e.target.value) })}/>
          <InputField
            label="Teléfono"
            placeholder="Ej. 987654321"
            value={data.numero_celular || ""}
            regex={regexTelefono}
            minLength={9}
            maxLength={9}
            onChange={(e) => {
              const soloNum= e.target.value.replace(/\D/g,"")
              onChange({ numero_celular: soloNum})
            }}
            errorMsg={"Ingrese un teléfono válido"}
          />
          <InputField
            label="Correo electrónico"
            placeholder="ejemplo@gmail.com"
            value={data.email || ""}
            regex={regexEmail}
            minLength={9}
            maxLength={50}
            onChange={(e) => {
              
              onChange({ email: e.target.value })
            }}
            errorMsg={"Ingrese un formato de correo válido"}
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
              onChange({ departamento: selected?.nombre || "", departamentoId:selected?.id });
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
              onChange({ provincia: selected?.nombre || "", provinciaId:selected?.id });
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
              onChange({ distrito: selected?.nombre || "",distritoId:selected?.id });
            }}
            options={distritosFiltrados.map(dist => ({
              label: dist.nombre,
              value: dist.id
            }))}
          />
          <InputField
            label="Dirección"
            placeholder="Av..."
            value={data.direccion || ""}
            onChange={(e) => onChange({ direccion: e.target.value })}
          />
        </FormGrid>
      {/* )} */}
    </>
  );
}
