import aseguradoras from "../../data/aseguradoras.json";

const modelPositivaCot = (cotizacion) => {
  return {
    aseguradora: aseguradoras[0]?.nombre?? "",
    logo: aseguradoras[0]?.logo ?? "",
    id_empresa:parseInt(aseguradoras[0]?.id) ??"",
    id_cotizacion: cotizacion?.Token ?? "",
    precio: cotizacion?.MontoTarifa ?? 0,
    neto: cotizacion?.MontoTarifa ?? 0,
    impuestos: 0,
    recargos: 0,
    moneda: "PEN",
    inicio: null,
    fin: null,
  };
};

export const positivaResCot = (res) =>
  Array.isArray(res) ? res.map(modelPositivaCot) : [modelPositivaCot(res)];
