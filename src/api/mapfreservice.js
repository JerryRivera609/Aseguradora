import { mapfreResCot } from "../util/mapfre/MapfreRecibirCotiza";
import api from "./axios";

export const listarTiposMapfre= async ()=>{
    try {
        const res= await api.get("/mapfre/tipo")
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
export const listarUsosPorTipo= async (tipoId)=>{
    if(tipoId===null || tipoId==="" ||tipoId == undefined) return
    try {
        const res = await api.get("/mapfre/usoTipo", {params: { tipo: tipoId }});
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
export const listarMarcaPorTipo= async (tipoId)=>{
    if(tipoId===null || tipoId===""  ||tipoId == undefined) return
    try {
        const res = await api.get("/mapfre/marcaTipo", {params: { tipo: tipoId }});
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
export const listarModeloPorMarca= async (marcaId)=>{
    if(marcaId===null || marcaId===""  ||marcaId == undefined) return
    try {
        const res = await api.get("/mapfre/modeloMarca", {params: { marca: marcaId }});
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const listarDepartamentos= async ()=>{
    try {
        const res= await api.get("/mapfre/departamentos")
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
export const listarProvinciasPorDep= async (idDep)=>{
    if(idDep===null || idDep===""  ||idDep == undefined) return
    try {
        const res= await api.get("/mapfre/provincias",{params:{ idDepartamento: idDep}})
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
export const listarDistritosPorProv= async (idProv)=>{
    if(idProv===null || idProv===""  ||idProv == undefined) return
    try {
        const res= await api.get("/mapfre/distrito",{params:{ idProvincia: idProv}})
        return res.data;
    } catch (error) {
        console.error(error)
    }
}


export const cotizarMapfre= async (formulario)=>{
    if(formulario===null || formulario===""  ||formulario == undefined) return;

    try {
        const res= await api.post("mapfre/cotiza",formulario);
            if(res.status!=200){
                return null;
            }
            const ress= mapfreResCot(res.data);
            console.log(ress)
            return ress;
    } catch (error) {
        console.error("Error en la cotizacMapfre", error.response?.data || error.message)
        throw error
    }
}

export const emitirSoatMapfre= async (formulario)=>{
    if(formulario===null || formulario===""  ||formulario == undefined) return;
    try {
        const res= await api.post("mapfre/emision",formulario);
            if(res.status!=200){
                return null;
            }
            const ress=res.data;
            return ress;
    } catch (error) {
        console.error("Error en la emision",error)
    }
}
