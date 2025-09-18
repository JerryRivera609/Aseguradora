import { useEffect, useState } from "react";
import MultiSelect from "../../../components/forms/MultiSelect";
import { listarOperadores, listarSupervisores } from "../../../api/empleados";
import { listarEmpresas } from "../../../api/empresas";
import SelectField from "../../../components/forms/SelectField";
import InputField from "../../../components/forms/InputField";
import { genPlanillas } from "../../../api/polizas";

const estadossSoat= [
    { label: "VENDIDOS", value: "VENDIDOS" },
    { label: "COBRADOS", value: "COBRADOS" },
    { label: "ANULADOS", value: "ANULADOS" },
    { label: "REPORTADOS", value: "REPORTADOS" },
    { label: "ENVIADOS", value: "ENVIADOS" }
]
const tiposPoliza=[
    { label:"DIGITAL", value: "DIGITAL"},
    { label:"VIRTUAL", value: "VIRTUAL"}
]
export function ModalGenerdor({onOpen}){

    const [aseguradoras,setAseguradoras]=useState([]);
    const [supervisores,setSupervisores]=useState([{
        label: "", value: ""
    }])
    const [operadores,setOperadores]=useState([{
        label: "", value: ""
    }])

    const [filtros, setFiltros] = useState({
        tipo: null,
        id_supervisor: null,
        supervisor:null,
        id_operador: null,
        operador:null,
        companias: [],
        tiposPoliza: [],
        fecha_inicio: null,
        fecha_fin: null,
    });
    const handleListarSuperv = async()=>{
        const res= await listarSupervisores();
        if(!res) return;
        const superv = res.map(sup=>({label:(sup.nombre + " " + sup.apellido_paterno + " " + sup.apellido_materno), value:sup.id_empleado}))
        setSupervisores(superv)
    }

    const handleListarOper = async()=>{
        const res= await listarOperadores();
        if(!res) return;
        const opers = res.map(sup=>({label:(sup.nombre + " " + sup.apellido_paterno + " " + sup.apellido_materno), value:sup.id_empleado}))
        setOperadores(opers)
    }
    const handleListarEmpresa = async()=>{
        try {
            const res= await listarEmpresas();
            const asegs = Array.isArray(res) ? res.map(a => ({ value: a.nombre, label: a.nombre, id: a.id })) : [];
            setAseguradoras(asegs)
            console.log(asegs)
        } catch (error) {
            console.error("Error al listar empresas",error)            
            throw error;
        }
    }

    const handleGenerarPlanilla = async(filtros)=>{
        try {
            const res = await genPlanillas(filtros);
            if(!res) return;
            console.log(res)
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    useEffect(()=>{
        (async () => {
            await handleListarEmpresa();
            await handleListarSuperv();
            await handleListarOper();
        })();
    },[])
    return(
        <div className="fixed grid place-items-center left-0 top-0 z-50 bg-[rgba(0,0,0,0.36)] h-full w-full select-none">
            <div className="w-250 h-100 bg-container text-foreground grid place-items-center grid-rows-[3_rem_1fr_3rem] rounded-xl">
                <div className="flex border-b-1 w-full px-4">
                    <span className="text-2xl font-bold">Generador de planillas</span>
                </div>
                <div className="flex w-full h-full px-4 gap-4">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-2/3">
                        <SelectField label="Estado de Soat" options={estadossSoat} value={filtros.tipo ?? ""} name="tipo" onChange={handleChange}/>
                        <SelectField label="Supervisor" options={supervisores}  value={filtros.id_supervisor ?? ""} name="id_supervisor" onChange={
                            (e)=>{handleChange(e);
                                const texto = e.target.options[e.target.selectedIndex].text;
                                setFiltros(prev => ({ ...prev, supervisor: texto }));
                            }}
                        />
                        <SelectField label="Operador" options={operadores}  value={filtros.id_operador ?? ""} name="id_operador" onChange={
                            (e)=>{handleChange(e);
                                const texto = e.target.options[e.target.selectedIndex].text;
                                setFiltros(prev => ({ ...prev, operador: texto }));
                            }}
                        />
                        <MultiSelect name="tiposPoliza" label="Tipo de poliza" options={tiposPoliza} value={filtros.tiposPoliza} onChange={(selected) => setFiltros(prev => ({ ...prev, tiposPoliza: selected }))}/>
                        <MultiSelect name="companias" label="Aseguradora" options={aseguradoras} value={filtros.companias} onChange={(selected) => setFiltros(prev => ({ ...prev, companias: selected }))}/>
                    </div>
                    <div className="grid grid-cols-1 w-1/3 px-5 border-1 rounded-lg place-items-center">
                        <InputField label="Fecha inicio" type="date" value={filtros.fecha_inicio ?? ""} name="fecha_inicio" onChange={handleChange}/>
                        <InputField label="Fecha fin" type="date"  value={filtros.fecha_fin ?? ""} name="fecha_fin" onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex w-full justify-around font-bold text-lg">
                    <button className="bg-error-light border-1 border-error text-error px-4 py-2 rounded-2xl hover:bg-error hover:text-foreground hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>{onOpen(false)}}>Cerrar</button>
                    <button className="bg-success-light border-1 border-success text-success px-4 py-2 rounded-2xl hover:bg-success hover:text-container hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>{handleGenerarPlanilla(filtros)}}>Generar</button>
                </div>
            </div>
        </div>
    )
}