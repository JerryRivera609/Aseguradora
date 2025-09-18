import { useState } from "react";
import InputField from "../../../components/forms/InputField";
import { genExcelPolizasGlobal } from "../../../api/polizas";

export function ModalOpe({onOpen}){
    const [filtros, setFiltros] = useState({
            fechaInicio: null,
            fechaFin: null,
        });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    const handleGenerarExcelGlobal = async(filtros)=>{
            try {
                const res = await genExcelPolizasGlobal(filtros);
                if(!res) return;
                console.log(res)
            } catch (error) {
                console.error(error)
                throw error
            }
        }
    return(
        <div className="fixed grid place-items-center left-0 top-0 z-50 bg-[rgba(0,0,0,0.36)] h-full w-full select-none">
            <div className="w-250 h-100 bg-container text-foreground grid place-items-center grid-rows-[3_rem_1fr_3rem] rounded-xl">
                <div className="flex border-b-1 w-full px-4">
                    <span className="text-2xl font-bold">Generador de Excel global</span>
                </div>
                
                <div className="flex w-full h-full px-4 gap-4">
                    <div className="grid grid-cols-1 w-1/3 px-5 border-1 rounded-lg place-items-center">
                        <InputField label="Fecha inicio" type="date" value={filtros.fechaInicio ?? ""} name="fechaInicio" onChange={handleChange}/>
                        <InputField label="Fecha fin" type="date"  value={filtros.fechaFin ?? ""} name="fechaFin" onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex w-full justify-around font-bold text-lg">
                    <button className="bg-error-light border-1 border-error text-error px-4 py-2 rounded-2xl hover:bg-error hover:text-foreground hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>{onOpen(false)}}>Cerrar</button>
                    <button className="bg-success-light border-1 border-success text-success px-4 py-2 rounded-2xl hover:bg-success hover:text-container hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>{handleGenerarExcelGlobal(filtros)}}>Generar</button>
                </div>
            </div>
        </div>
    )
}