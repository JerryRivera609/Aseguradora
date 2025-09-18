import api from "./axios";

export const listarRoles = async()=>{
    const res = await api.get("rol");
    return res.data;
}

export const agregarRol = async (idEmpleado,idRol)=>{
    const res = await api.post(`rol-empleado/${idEmpleado}/roles/${idRol}`);
    return res.data;
}

export const quitarRol = async (idEmpleado,idRol)=>{
    const res = await api.delete(`rol-empleado/${idEmpleado}/roles/${idRol}`);
    return res.data;
}