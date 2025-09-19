// src/pages/pdv/GestorPuntosVenta.jsx
import { useEffect, useState } from "react";
import { crearPdv, actualizarPdv, listarPdvs } from "../../api/puntoVenta";
import TablaPdvs from "./components/TablePdv";
import InputField from "../../components/InputField";
import Boton from "../../components/Button";
import FormPdv from "./components/FormPdv";

export default function GestorPuntosVenta() {
  const [pdvs, setPdvs] = useState([]);
  const [buscador, setBuscador] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [formEdit, setFormEdit] = useState(null);

  useEffect(() => { handleListarPdvs(1); }, []);

  async function handleListarPdvs(superv) {
    try { 
      const res= await listarPdvs(superv)
      setPdvs(res); 
      console.log(res)
    }catch (e) { 
      console.error(e); 
    }
  }

  // Adaptador para EDIT
  function adaptarFormularioParaActualizar(colab) {
    return {
      id: colab.puntoDeVenta?.[0]?.id,

      nombre_colaborador: colab.nombre ,
      apellido_paterno: colab.apellPaterno ,
      apellido_materno: colab.apellMaterno ,
      telefono_colaborador: colab.numero_celular ,
      contrasena: colab.contrasena ,
      email_colaborador: colab.email ,
      departamento_colaborador: colab.departamento ,
      provincia_colaborador: colab.provincia ,
      distrito_colaborador: colab.distrito ,
      direccion_colaborador: colab.direccion ,
      tipo_documento: colab.tipo_documento ,
      numero_documento: colab.numero_documento ,
      id_empleado: 2, //falta dato
      contrato: colab.puntoDeVenta?.[0]?.contrato ,
      departamento_pdv: colab.puntoDeVenta?.[0]?.departamento ,
      provincia_pdv: colab.puntoDeVenta?.[0]?.provincia ,
      distrito_pdv: colab.puntoDeVenta?.[0]?.distrito ,
      direccion_pdv: colab.puntoDeVenta?.[0]?.direcion ,
      formaPago: colab.puntoDeVenta?.[0]?.formaPago ,
      foto_fachada: colab.puntoDeVenta?.[0]?.foto_fachada ,
      foto_dni: colab.puntoDeVenta?.[0]?.fotodni ,
      nombre_pdv: colab.puntoDeVenta?.[0]?.nombre_punto_venta ,
      razon_social: colab.puntoDeVenta?.[0]?.razon_social ,
      ruc: colab.puntoDeVenta?.[0]?.ruc 
    };
  }

  const abrirCrear = () => setOpenCreate(true);
  const cerrarCrear = () => setOpenCreate(false);

  const abrirEditar = (pdv) => {
    setFormEdit(adaptarFormularioParaActualizar(pdv));
    setOpenEdit(true);
  };
  const cerrarEditar = () => { setFormEdit(null); setOpenEdit(false); };

  return (
    <div className="h-[calc(100vh-5rem)] mx-auto w-11/12 max-w-[1400px] pt-6 font-inter">
      <h2 className="text-3xl font-bold mb-4">Gestión de Puntos de Venta y Colaborador</h2>

      <div className="mb-5 flex items-center gap-5">
        <InputField value={buscador} onChange={e => setBuscador(e.target.value)} />
        <Boton onClick={() => handleListarPdvs(buscador)} text="Buscar" />
        <Boton onClick={abrirCrear} text="Nuevo Punto de venta" />
      </div>

      <TablaPdvs pdvs={pdvs} editar={abrirEditar} />

      {/* Crear */}
      <FormPdv
        open={openCreate}
        title="Nuevo Punto de venta (2 pasos)"
        onClose={cerrarCrear}
        onSubmit={async (data) => {
          await crearPdv(data);
          await handleListarPdvs(1);
        }}
      />

      {/* Editar */}
      <FormPdv
        open={openEdit}
        title="Editar Punto de venta (2 pasos)"
        initial={formEdit}
        onClose={cerrarEditar}
        onSubmit={async (data) => {
          await actualizarPdv(data.id, data);
          await handleListarPdvs(1);
          console.log(data)
        }}
      />
    </div>
  );
}
