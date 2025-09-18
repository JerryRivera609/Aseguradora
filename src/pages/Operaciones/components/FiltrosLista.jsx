import SelectField from "../../../components/SelectField"
import InputField from "../../../components/InputField"
import { useAuth } from "../../Login/AuthContext"
import { AllRoles, hasAny } from "../../../data/roles"
import { useEffect, useState } from "react"
import { listarEmpresas } from "../../../api/empresas"
import { listarSupervisores } from "../../../api/empleados"

    const estadossSoat= [
      { label: "VENDIDO", value: "VENDIDO" },
      { label: "COBRADO", value: "COBRADO" },
      { label: "ANULADO", value: "ANULADO" },
      { label: "REPORTADO", value: "REPORTADO" },
      { label: "ENVIADO", value: "ENVIADO" }
    ]
export default function FiltrosOperaciones({filtros, onChange}){
    
    const [aseguradoras,setAseguradoras]=useState([]);
    const [supervisores,setSupervisores]=useState([{
        label: "", value: ""
    }])

    const {user}= useAuth();
    const roles = user?.roles ?? [];
    const pdvs= user?.puntoDeVenta;
    const nombresPdv= pdvs.map(p=>({value:p.id,label:p.nombrePDV}))
    
    const admini= hasAny(roles, AllRoles.administrativo)
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...filtros, [name]: value });
    };

    const handleListarSuperv = async()=>{
        const res= await listarSupervisores();
        console.log(res)
        if(!res) return;
        const superv = res.map(sup=>({label:(sup.nombre + "" + sup.apellido_paterno), value:sup.id_empleado}))
        console.log(superv)
        setSupervisores(superv)
    }

    const handleListarEmpresa = async()=>{
        try {
            const res= await listarEmpresas();
            const asegs = Array.isArray(res) ? res.map(a => ({ value: a.nombre, label: a.nombre, id: a.id })) : [];
            setAseguradoras(asegs)
            console.log(res)
        } catch (error) {
            console.error("Error al listar empresas",error)            
        }
    }
    useEffect(()=>{
        (async () => {
            await handleListarEmpresa();
            await handleListarSuperv();
        })();
    },[])
    return(
        <>
            <SelectField label="Estado de Soat" options={estadossSoat} value={filtros.estado ?? ""} name="estado" onChange={handleChange}/>
            <SelectField label="Aseguradora" options={aseguradoras} value={filtros.empresa ?? ""} name="empresa" onChange={handleChange}/>
            {/* Supervisor y puntos de venta */}
            {admini && <SelectField label="Supervisor" options={supervisores}  value={filtros.supervisorId ?? ""} name="supervisorId" onChange={handleChange}/>}
            <SelectField label="Puntos de venta" options={nombresPdv}  value={filtros.puntoVentaId ?? ""} name="puntoVentaId" onChange={handleChange}/>
            <InputField label="Fecha inicio" type="date" value={filtros.desde ?? ""} name="desde" onChange={handleChange}/>
            <InputField label="Fecha fin" type="date"  value={filtros.hasta ?? ""} name="hasta" onChange={handleChange}/>
            <SelectField label="Estao de fecha" options={estadossSoat} value={filtros.estadoFecha ?? ""} name="estadoFecha" onChange={handleChange}/>
        </>
    )
}