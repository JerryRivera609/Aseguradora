import api from "./axios";

export const listarPdvs = async ()=>{
    try {
        //falta agregar id supervisor
         const res = await api.get("/colaborador");
         const resOrder =res.data.sort((a, b) => a.id - b.id);
         return resOrder;
    } catch (error) {
        console.error(error);
    }
}

export const crearPdv = async (formulario) =>{
    try {
        const rest = await api.post("/punto-de-venta/crear",formulario)
        return rest.data.estado;
    } catch (error) {
        console.error(error)
    }
}

export const actualizarPdv = async (idPdv, formulario) =>{
    try {
        if(idPdv!=null && idPdv!==""){
            const res= await api.put(`/punto-de-venta/actualizar/${idPdv}`,formulario);
            console.log("respuesta: "+res.data) //probar
        }
    } catch (error) {
        console.error(error)
    }
}