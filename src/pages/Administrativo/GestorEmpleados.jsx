// src/pages/empleados/GestiorEmpleados.jsx
import { useEffect, useState } from "react";
import { listarEmpleados, crearEmpleado, actualizarEmpleado, actualizarEstadoEmpleado } from "../../api/empleados";
import TablaEmpleados from "./components/TableEmpl";
import InputField from "../../components/InputField";
import Boton from "../../components/Button";
import FormEmpleado from "./components/FormEmpleado";
import AddRol from "./components/FormRoles";
import { CgMenuLeftAlt } from "react-icons/cg";
export default function GestiorEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSele, setEmpleadoSele] = useState(null);
  const [buscador, setBuscador] = useState("");

  const [form, setForm] = useState(defaultForm());
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openRoles, setOpenRoles] = useState(false);

  useEffect(() => { handleListarEmpleados(); }, []);

  async function handleListarEmpleados(q) {
    try {
      const data = await listarEmpleados(q);
      setEmpleados(data);
    } catch (error) {
      console.error(error);
    }
  }

  function defaultForm() {
    return {
      tipo_documento: "",
      numero_documento: "",
      nombres: "",
      apellido_paterno: "",
      apellido_materno: "",
      numero_celular: "",
      correo: "",
      contrasena: "",
      departamento: "",
      provincia: "",
      distrito: "",
      id_oficina: "",
    };
  }

  const abrirCrear = () => { setForm(defaultForm()); setOpenCreate(true); };
  const cerrarCrear = () => setOpenCreate(false);

  function adaptarFormularioParaActualizar(emp) {
    return {
      id: emp.id_empleado ?? emp.id,
      tipo_documento: emp.tipo_documento,
      numero_documento: emp.numero_documento,
      nombres: emp.nombres ?? emp.nombre,
      apellido_paterno: emp.apellido_paterno,
      apellido_materno: emp.apellido_materno,
      numero_celular: emp.numero_celular ?? emp.telefono,
      correo: emp.correo ?? emp.email,
      departamento: emp.departamento,
      provincia: emp.provincia,
      distrito: emp.distrito,
      id_oficina: emp.id_oficina,
    };
  }

  const abrirEditar = (emp) => {
    setForm(adaptarFormularioParaActualizar(emp));
    setOpenEdit(true);
  };
  const cerrarEditar = () => setOpenEdit(false);

  const handleActualizarEstadoEmpleado = async (idEmpleado, estadoActual) => {
    try {
      const nuevo = estadoActual === "ACTIVO" ? "DESACTIVADO" : "ACTIVO";
      await actualizarEstadoEmpleado(idEmpleado, nuevo);
      await handleListarEmpleados(buscador);
    } catch (error) {
      console.error(error);
    }
  };

  const abrirFormularioRoles = (empl) => { setEmpleadoSele(empl); setOpenRoles(true); };
  const cerrarFormularioRoles = () => { setEmpleadoSele(null); setOpenRoles(false); };

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-full pt-6 font-inter">
      <div className="flex items-center gap-2">
        <CgMenuLeftAlt className="text-4xl "/> 
        <h2 className="text-3xl font-bold">Gestión de Empleados</h2>
      </div>

      <div className="mb-5 flex items-center gap-5">
        <p className="text-sm text-zinc-500"> Edita y organiza los empleados registrados en el sistema.</p>
        <InputField
          value={buscador}
          onChange={(e) => setBuscador(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleListarEmpleados(buscador); }}
        />
        <Boton onClick={() => handleListarEmpleados(buscador)} text="Buscar" />
        <Boton onClick={abrirCrear} text="Nuevo empleado" />
      </div>

      <TablaEmpleados
        empleados={empleados}
        editar={abrirEditar}
        addRol={abrirFormularioRoles}
        anular={handleActualizarEstadoEmpleado}
      />

      {/* Crear */}
      <FormEmpleado
        open={openCreate}
        title="Nuevo empleado (2 pasos)"
        initial={form}
        onClose={cerrarCrear}
        onSubmit={async (values) => {
          await crearEmpleado(values);
          cerrarCrear();
          await handleListarEmpleados(buscador);
        }}
      />

      {/*Editar */}
      <FormEmpleado
        open={openEdit}
        title="Editar empleado (2 pasos)"
        initial={form}
        onClose={cerrarEditar}
        onSubmit={async (values) => {
          await actualizarEmpleado(values.id, values);
          cerrarEditar();
          await handleListarEmpleados(buscador);
        }}
      />

      {/* Roles */}
      <AddRol
        open={openRoles}
        onClose={cerrarFormularioRoles}
        empleado={empleadoSele}
        onSaved={() => handleListarEmpleados(buscador)}
      />
    </div>
  );
}
