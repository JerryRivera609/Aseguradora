import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosAddCircleOutline } from "react-icons/io";
import { cambiarPolizaACobrado } from "../../../api/polizas";
import { MdErrorOutline } from "react-icons/md";
import Loading from "../../../layout/Loading";
import confetti from 'canvas-confetti';

export default function TablaActualizar({ polizas = []}) {

  const [info,setInfo] = useState(() => new Set());
  const [openModal, setOpenModal] = useState(false);
  const [nuevoEstado, setNuevoEstado] = useState(null);
  const [polizaSelect,setPolizaSelect] = useState(null);
  const [loading,setLoading] = useState(false);
  const [mensaje, setMensaje] = useState({texto:"",estado:false});
  const [visible, setVisible] = useState(false);
  // const [mensajeModal, setMensajeModal] = useState(false);

  function mostrarInfo(id){
    setInfo(prev=>(prev===id?null:id))
  };
  

  async function handleCobrarPoliza(){
    setLoading(true)
    const formCobrar={id_empleado:userId,id_poliza:polizaSelect}
    setPolizaSelect(null);
    setOpenModal(false);
    try {
      const res= await cambiarPolizaACobrado(formCobrar);
      if (res===200) {
        handleMostrarMensaje("Cobrado Exitoso",true);
        confetti();
      }else if (res===500){
        handleMostrarMensaje("No se puede cobrar el estado actual",false);
        console.log("asdasd")
      }else if (res===400){
        handleMostrarMensaje("Error en el proceso",false);
      }
    } catch (error) {
      console.error(error);
      handleMostrarMensaje("Error",false);
      throw error;
    } finally{
        setLoading(false)
    }
  }

function handleMostrarMensaje(texto,estado) {
  setMensaje({texto:texto,estado:estado});
  setVisible(true)
  setTimeout(() => {
    setVisible(false)
  }, 2000);
  // setTimeout(() => {
  //   setMensaje({texto:"",estado:false});
  // }, 2500);
}

  function handleMostarModal(polizaId,estados){
    const tiposDeEstado = estados.map(e=>e.estado)
    if(tiposDeEstado.includes("ENVIADO")){
      return;
    }
    if (["VENDIDO","COBRADO","REPORTADO"].every(e => tiposDeEstado.includes(e))) {
      setNuevoEstado("ENVIADO");
    } else if (["VENDIDO","COBRADO"].every(e => tiposDeEstado.includes(e))) {
      setNuevoEstado("REPORTADO");
    } else if (tiposDeEstado.includes("VENDIDO")) {
      setNuevoEstado("COBRADO");
    }
    setPolizaSelect(polizaId);
    setOpenModal(true)
  }
  return (
    <div className="text-foreground w-full">
      <table className="min-w-full text-sm border-separate border-spacing-y-2">
        <thead>
          <tr className="text-lg bg-border text-center">
            <th className="px-4 py-2 font-bold rounded-l-xl">Nro de póliza</th>
            <th className="px-4 py-2 font-bold ">Placa / Uso</th>
            <th className="px-4 py-2 font-bold ">Contratante / Telefono</th>
            <th className="px-4 py-2 font-bold ">Fecha Venta</th>
            <th className="px-4 py-2 font-bold ">Fecha Vigencia</th>
            <th className="px-4 py-2 font-bold ">Prima</th>
            <th className="px-4 py-2 font-bold ">Aseguradora</th>
            <th className="px-4 py-2 font-bold ">Estado</th>
            <th className="px-4 py-2 font-bold rounded-r-xl">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-border bg-container rounded-xl">
          {polizas?.content?.map((p, i) => {
            return (
            
            <React.Fragment key={i}>
              <tr className="text-center">
                <td className={`px-4 py-2 rounded-l-lg`}>{p.polizas}</td>
                <td className="px-4 py-2">{p.placa} <br /> {p.uso}</td>
                <td className="px-4 py-2">{p.cliente_nombre} {p.cliente_apell_paterno} {p.cliente_apell_materno} <br /> {p.cliente_telefono}</td>
                <td className="px-4 py-2">{p.fecha_venta}</td>
                <td className="px-4 py-2">{p.fecha_vigencia} <br /> {p.fecha_vencimiento}</td>
                <td className="px-4 py-2">S/. {p.prima}</td>
                <td className="px-4 py-2 grid place-items-center">
                  <span className={`text-md text-white w-full px-2 py-2 rounded-xd font-bold rounded-lg ${
                    p.empresa === "RIMAC" ? "bg-rimac" :
                    p.empresa === "MAPFRE" ? "bg-mapfre" :
                    p.empresa === "POSITIVA" ? "bg-positiva" :
                    p.empresa === "INTERSEGURO" ? "bg-interseguro" :
                    "text-gray-600 bg-disabled"
                  }`}>
                    {p.empresa}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    p.estado === "VENDIDO" ? "text-info bg-info-light border-info border-1" :
                    p.estado === "ENVIADO" ? "text-success bg-success-light border-success border-1" :
                    p.estado === "COBRADO" ? "text-accent bg-accent-light border-accent border-1" :
                    p.estado === "REPORTADO" ? "text-warning bg-warning-light border-warning border-1" :
                    p.estado === "ANULADO" ? "text-error bg-error-light border-error border-1" :
                    "text-foreground-muted bg-disabled border-foreground-muted border-1"
                  }`}>
                    {p.estado}
                  </span>
                </td>
                <td className={`px-4 py-2 rounded-r-lg`}>
                  <div className="flex items-center justify-center select-none">
                    <IoIosArrowDropdown className={`text-2xl hover:cursor-pointer hover:scale-110 duration-200 ${info===i ? "rotate-180" : ""}`} onClick={()=>mostrarInfo(i)}/>
                    <IoIosAddCircleOutline  className={`text-2xl hover:cursor-pointer hover:scale-110 duration-200 ${info===i ? "" : ""}`} onClick={()=>{handleMostarModal(p.id_poliza,p.polizaEstados)}}/>
                  </div>
                </td>
              </tr>
              {info===i &&
                <tr className="border-border border-t-2 bg-container">
                  <td colSpan={10}>
                    <div className="flex justify-center gap-4">
                      {p.polizaEstados.sort((a, b) => a.id_estado - b.id_estado).map((pe,i)=>(
                        <div className="flex flex-col px-4 py-2 text-center gap-2" key={i}>
                          <span className={`px-2 py-1 rounded-full ${
                            pe.estado === "VENDIDO" ? "text-info bg-info-light border-info border-1" :
                            pe.estado === "ENVIADO" ? "text-success bg-success-light border-success border-1" :
                            pe.estado === "COBRADO" ? "text-accent bg-accent-light border-accent border-1" :
                            pe.estado === "REPORTADO" ? "text-warning bg-warning-light border-warning border-1" :
                            pe.estado === "ANULADO" ? "text-error bg-error-light border-error border-1" :
                            "text-foreground-muted bg-disabled border-foreground-muted border-1"
                          }`}>{pe.estado}</span>
                          <span>{pe.fecha_estado}</span>
                          <span className="bg-accent px-2 py-1 rounded-xl">{pe.empleado_nombre} {pe.empleado_apellido_paterno}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              }
            </React.Fragment>
          )})}
        </tbody>
      </table>
      
      {openModal && 
        <div className="fixed grid place-items-center left-0 top-0 z-22 bg-[rgba(0,0,0,0.36)] h-full w-full select-none">
          <div className="w-200 h-100 bg-container grid place-items-center grid-rows-[125px_200px_75px] rounded-xl">
            <MdErrorOutline className="text-8xl" />
            <div className="border-t-1 border-b-1 border-disabled h-full w-full grid place-items-center px-3">
              <span>Esta poliza : {polizaSelect}</span>
              <span>Tendrá este nuevo estado: </span>
              <span className="text-success">{nuevoEstado}</span>
            </div>
            <div className="flex w-full justify-around font-bold text-lg">
              <button className="bg-error-light border-1 border-error text-error px-4 py-2 rounded-2xl hover:bg-error hover:text-foreground hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>{setOpenModal(false);setNuevoEstado(null);setPolizaSelect(null)}}>Cerrar</button>
              <button className="bg-success-light border-1 border-success text-success px-4 py-2 rounded-2xl hover:bg-success hover:text-container hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>{handleCobrarPoliza()}}>Actualizar</button>
            </div>
          </div>
        </div>
      }

      <div className={`fixed right-3 bottom-12 flex items-center w-auto h-10 px-4 py-3 border-1 font-bold transform transition-all duration-300 ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} ${mensaje?.estado ? "bg-success-light border-success text-success" : "bg-error-light border-error text-error"}`}>
          <span className="">{mensaje?.texto}</span>
      </div>
      {loading &&
        <Loading/>
      }
    </div>
  );
}
