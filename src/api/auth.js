import api from "./axios";


const authService={
    login:async(correo,contrasena,remember)=>{
        try{
            const response= await api.post(`/autenticacion/login`,{
                correo,contrasena,
            });

            const storage = remember ? localStorage : sessionStorage;
            
            if( response.data && response.data.token){
                storage.setItem('jwtToken',response.data.token);
                const userSt={
                    id:response.data.id,
                    // email:response.data.email,
                    nombre:response.data.nombre,
                    apellido_paterno:response.data.apellido_paterno,
                    apellido_materno:response.data.apellido_materno,
                    oficina: response.data.oficina,
                    puntoDeVenta: response.data.puntoDeVenta,
                    expiraEnSegundos: response.data.expiraEnSegundos,
                    rol: response.data.rol,
                    roles:response.data.roles,
                }
                storage.setItem('user',JSON.stringify(userSt));
            }
            return response.data;
        }catch(error){
            console.error('Error during loging: ',error);
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        sessionStorage.removeItem('jwtToken');
        sessionStorage.removeItem('user');
    },

    getToken: () => {
        return localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');
    },

    getCurrentUser: () => {
        const user = localStorage.getItem('user')|| sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
}

export default authService;