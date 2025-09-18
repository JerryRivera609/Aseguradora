// import { mapfreResCot } from "../util/mapfre/MapfreRecibirCotiza";
import { positivaResCot } from "../util/positiva/PositivaRecibirCotiza";
import api from "./axios";

export const listarMarcasPositiva= async (formulario)=>{
    try {
        const res= await api.post("/positiva/marcas",formulario)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const listarModelosPositiva= async (formulario)=>{
    try {
        const res= await api.post("/positiva/modelos",formulario)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
export const listarVerionesPositiva= async (formulario)=>{
    try {
        const res= await api.post("/positiva/version",formulario)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

export const cotizarPositiva = async (formulario) =>{
    try {
        const res= await api.post("/positiva/cotiza",formulario)
        if (res.status !== 200) {
            const error = new Error("Error HTTP");
            error.response = { status: res.status, data: res.data };
            throw error;
        }

        if (!res.data || !res.data.Token) {
            const error = new Error("Cotización inválida: falta campo 'Token'");
            error.response = { status: 400, data: res.data };
            throw error;
        }

        const ress=positivaResCot(res.data);
        console.log(ress)
        return ress
    } catch (error) {
        console.error("Error en cotizarPositiva:", error.response?.data || error.message);
        throw error;
    }
}

export const emitirSoatPositiva= async (formulario)=>{
    if(formulario===null || formulario===""  ||formulario == undefined) return;
    try {
        const res= await api.post("positiva/emision",formulario);
        if (res.status !== 200) {
            const error = new Error("Error HTTP");
            error.response = { status: res.status, data: res.data };
            throw error;
        }
        if (!res.data || !res.data?.DatosPoliza?.IdPoliza) {
            const error = new Error("Cotización inválida: falta campo 'Token'");
            error.response = { status: 400, data: res.data };
            return null;
        }
        const ress=res.data;
        return ress;
    } catch (error) {
        console.error("Error en la emision",error.response?.data || error.message)
        throw error;
    }
}