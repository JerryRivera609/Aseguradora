import api from "./axios";

export const buscarVehiculoPorPlaca = async (placa) => {
  try {
    const res = await api.get(`/vehiculo/${placa}`);
    console.log(res.data)
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 500) {
        console.warn("No se encontró en el sistema local, buscando en Factiliza...");
        return await buscarPlacaFactiliza(placa);
        }
        throw error;
    }
};



const buscarPlacaFactiliza = async (placa) => {
  const res = await api.get(`/factiliza/vehiculo?placa=${placa}`);
    console.log(res.data)
  return res.data;
};