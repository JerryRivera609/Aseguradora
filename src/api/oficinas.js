import api from "./axios";

export const crearOficina= async (formulario)=>{
    try {
        await api.post("/oficina/crear",formulario)
    } catch (error) {
        console.error(error)
    }
}