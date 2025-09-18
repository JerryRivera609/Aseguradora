import api from "./axios";

export const listarEmpresas = async() =>{
    try {
        const res = await api.get("empresa");
        return res.data
    } catch (error) {
        console.error(error)        
    }
}