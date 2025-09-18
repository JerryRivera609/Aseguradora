import api from "./axios";

export const buscarCliente = async (tipo, numero) => {

    try {
        //   const res = await api.get(`/clientes?tipo=${tipo}&numero=${numero}`);
        const res = await api.get(`/cliente/documento-identidad?tipo=${tipo}&numero=${numero}`);
        return res.data;
    } catch (error) {
        if (error.response && error.response.status === 500) {
        console.warn("No se encontró en el sistema local, buscando en Factiliza...");
        return await buscarClienteFactiliza(tipo, numero);
        }
        throw error;
    }
};

const buscarClienteFactiliza = async (tipo, numero) => {
  const res = await api.get(`/factiliza/documento-identidad?tipo=${tipo}&numero=${numero}`);
  return res.data;
};

export const listarClientes = async (numero)=>{
    try {
        if(numero!=null && numero!==""){
            const rest= await buscarClientePorNumeroDoc(numero);
            return Array.isArray(rest) ? rest : [rest];
        }else{
            const rest = await api.get(`/cliente`);
            return rest.data;
        }
    } catch (error) {
        console.error(error);
    }
}

const buscarClientePorNumeroDoc = async (numero)=>{
    const res = await api.get(`/cliente/numero-documento?numero=${numero}`);
    console.log(res.data)
    return res.data;
}