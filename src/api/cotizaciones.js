import { cotizarMapfre } from "./mapfreservice";
import { cotizarPositiva } from "./positivaservice";

//todavia no hay
export const obtenerCotizaciones = async (formularioMapfre, formularioPositiva) => {
  const responses = await Promise.allSettled([
    cotizarMapfre(formularioMapfre),
    cotizarPositiva(formularioPositiva)
  ]);

  const data = responses
    .filter(res => res.status === "fulfilled")
    .map(res => res.value[0]);

  console.log("Cotizaciones:", data);
  return data;
};

