import { useEffect, useMemo, useState } from "react";
import SelectField from "../../../components/SelectField";
import ubigeo from "../../../data/ubigeo/ubigeo_optimizado.json";

const { departamentos, provincias, distritos } = ubigeo;

const norm = (s) =>
  (s ?? "").toString().trim().toLowerCase();
const eq = (a, b) => norm(a) === norm(b);

export default function UbigeoSelects({ value, onChange }) {
  const [departamentoId, setDepartamentoId] = useState("");
  const [provinciaId, setProvinciaId] = useState("");
  const [distritoId, setDistritoId] = useState("");

  useEffect(() => {
    let nextDepId = "";
    if (value?.departamento) {
      const dep =
        departamentos.find((d) => String(d.id) === String(value.departamento)) ||
        departamentos.find((d) => eq(d.nombre, value.departamento));
      if (dep) nextDepId = String(dep.id);
    }
    let nextProvId = "";
    if (value?.provincia && nextDepId) {
      const prov =
        provincias.find(
          (p) => String(p.id) === String(value.provincia) && String(p.departamentoId) === nextDepId
        ) ||
        provincias.find(
          (p) => String(p.departamentoId) === nextDepId && eq(p.nombre, value.provincia)
        );
      if (prov) nextProvId = String(prov.id);
    }
    let nextDistId = "";
    if (value?.distrito && nextProvId) {
      const dist =
        distritos.find(
          (d) => String(d.id) === String(value.distrito) && String(d.provinciaId) === nextProvId
        ) ||
        distritos.find(
          (d) => String(d.provinciaId) === nextProvId && eq(d.nombre, value.distrito)
        );
      if (dist) nextDistId = String(dist.id);
    }

    setDepartamentoId(nextDepId);
    setProvinciaId(nextProvId);
    setDistritoId(nextDistId);
  }, [value?.departamento, value?.provincia, value?.distrito]);

  const provinciasFiltradas = useMemo(
    () => provincias.filter((p) => String(p.departamentoId) === String(departamentoId)),
    [departamentoId]
  );
  const distritosFiltrados = useMemo(
    () => distritos.filter((d) => String(d.provinciaId) === String(provinciaId)),
    [provinciaId]
  );

  return (
    <>
      <SelectField
        label="Departamento"
        name="departamento"
        value={departamentoId}
        onChange={(e) => {
          const id = e.target.value;
          setDepartamentoId(id);
          setProvinciaId("");
          setDistritoId("");
          const dep = departamentos.find((d) => String(d.id) === String(id));
          onChange({ departamento: dep?.nombre || "", provincia: "", distrito: "" });
        }}
        options={departamentos.map((dep) => ({ label: dep.nombre, value: String(dep.id) }))}
      />

      <SelectField
        label="Provincia"
        name="provincia"
        value={provinciaId}
        onChange={(e) => {
          const id = e.target.value;
          setProvinciaId(id);
          setDistritoId("");
          const prov = provincias.find((p) => String(p.id) === String(id));
          onChange({
            departamento: value?.departamento || "",
            provincia: prov?.nombre || "",
            distrito: "",
          });
        }}
        options={provinciasFiltradas.map((p) => ({ label: p.nombre, value: String(p.id) }))}
        disabled={!departamentoId}
      />

      <SelectField
        label="Distrito"
        name="distrito"
        value={distritoId}
        onChange={(e) => {
          const id = e.target.value;
          setDistritoId(id);
          const dist = distritos.find((d) => String(d.id) === String(id));
          onChange({
            departamento: value?.departamento || "",
            provincia: value?.provincia || "",
            distrito: dist?.nombre || "",
          });
        }}
        options={distritosFiltrados.map((d) => ({ label: d.nombre, value: String(d.id) }))}
        disabled={!provinciaId}
      />
    </>
  );
}
