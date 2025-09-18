import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor de errores (opcional)
api.interceptors.response.use(
  response => response,
  error => {
    console.error("Error en API:", error);
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
    config=>{
        const token=localStorage.getItem('jwtToken'); //clave jwtToken
        if(token){
            config.headers.Authorization= `Bearer ${token}`;
        }
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
);

export default api;
