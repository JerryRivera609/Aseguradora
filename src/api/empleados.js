import api from "./axios";

export const listarEmpleados = async (numero)=>{
    try {
        if(numero!=null && numero!==""){
            const rest= await buscarEmpleadoPorNumeroDoc(numero);
            return Array.isArray(rest) ? rest : [rest];
        }else{
            const rest = await api.get(`/empleados/con-roles`);
            const restOrder = rest.data.sort((a, b) => a.id_empleado - b.id_empleado)
            return restOrder;
        }
    } catch (error) {
        console.error(error);
    }
}

export const listarSupervisores = async()=>{
    try {
        const res = await api.get('empleados/con-roles');
        if(!res) return;
        const supervisores = res.data.filter((r)=> r.rol==="SUPERVISOR")
        console.log(res.data)
        return supervisores;
    } catch (error) {
        console.error(error)
    }
}

const buscarEmpleadoPorNumeroDoc = async (numero)=>{
    const res = await api.get(`/empleados/numero-documento?numero=${numero}`);
    console.log(res.data)
    return res.data;
}


export const buscarEmpleadoConRol = async (idEmpleado)=>{
    const res = await api.get(`empleados/roles/${idEmpleado}`)
    return res.data;
}


export const crearEmpleado = async (formulario) =>{
    try {
        const rest = await api.post("/empleados/crear",formulario)
        return rest.data.estado; //falta probar
    } catch (error) {
        console.error(error)
    }
}

export const actualizarEmpleado = async (idEmpleado, formulario) =>{
    try {
        if(idEmpleado!=null && idEmpleado!==""){
            const res= await api.put(`/empleados/actualizar/${idEmpleado}`,formulario);
            console.log("respuesta: "+res.data) //probar
        }
    } catch (error) {
        console.error(error)
    }
}

//falta implementar
export const actualizarEstadoEmpleado = async(idEmpleado,estado)=>{
    try {
        if (typeof idEmpleado !== 'number' || isNaN(idEmpleado) || idEmpleado <= 0) return;

        const res= await api.put(`/empleados/estado/${idEmpleado}`,{estado: estado});
        console.log(res) //probar
    } catch (error) {
        console.error(error)
    }
}