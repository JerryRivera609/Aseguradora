import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosAddCircleOutline } from "react-icons/io";

export default function TablaPolizas({ polizas = [] }) {

  const [info,setInfo] =useState(() => new Set());

  function mostrarInfo(id){
    setInfo(prev=>(prev===id?null:id))
  };
  
  return (
    <div className="text-foreground h-full overflow-auto">
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
            
            // const firstl= i===0;
            // const lastl= i===polizas.content.length - 1;
            // const firstr= i===0;
            // const lastr= i===polizas.content.length - 1;
            
            // const clasel = `${firstl ? 'rounded-l-xl' : ''} ${lastl ? 'rounded-l-xl' : ''}`;
            // const claser = `${firstr ? 'rounded-r-xl' : ''} ${lastr ? 'rounded-r-xl' : ''}`;
            return (
            
            <React.Fragment key={i}>
              <tr className="text-center">
                {/* <td className={`px-4 py-2 ${clasel}`}>{p.polizas}</td> */}
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
                    p.estado_poliza === "VENDIDO" ? "text-info bg-info-light border-info border-1" :
                    p.estado_poliza === "ENVIADO" ? "text-success bg-success-light border-success border-1" :
                    p.estado_poliza === "COBRADO" ? "text-success bg-success-light border-success border-1" :
                    p.estado_poliza === "REPORTADO" ? "text-warning bg-warning-light border-warning border-1" :
                    p.estado_poliza === "ANULADO" ? "text-error bg-error-light border-error border-1" :
                    "text-foreground-muted bg-disabled border-foreground-muted border-1"
                  }`}>
                    {p.estado_poliza}
                  </span>
                </td>
                {/* <td className={`px-4 py-2 ${claser}`}> */}
                <td className={`px-4 py-2 rounded-r-lg`}>
                  <div className="flex items-center justify-center">
                    <IoIosArrowDropdown className="text-2xl hover:cursor-pointer hover:scale-110 duration-200" onClick={()=>mostrarInfo(i)}/>
                    <IoIosAddCircleOutline  className="text-2xl hover:cursor-pointer hover:scale-110 duration-200"/>
                    {/* <IoIosArrowDropup className="text-xl" onClick={ocultarInfo}/> */}
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
                            p.estado === "VENDIDO" ? "text-info bg-info-light" :
                            p.estado === "ENVIADO" ? "text-success bg-success-light" :
                            p.estado === "COBRADO" ? "text-success bg-success-light" :
                            p.estado === "REPORTADO" ? "text-warning bg-warning-light" :
                            p.estado === "ANULADO" ? "text-error bg-error-light" :
                            "text-foreground-muted bg-disabled"
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
    </div>
  );
}
