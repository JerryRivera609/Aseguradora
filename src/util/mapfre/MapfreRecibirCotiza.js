import aseguradoras from "../../data/aseguradoras.json";

const modelMapfreCot = (cotizacion) => {
  const res =
    cotizacion?.simulationCommercialProduct?.paymentModalityComplete?.[0]
      ?.simulationReceipt?.[0] || {};

  const detalle = cotizacion?.premiumDiff?.premiumDetail || {};
  const modalidad = cotizacion?.installments?.paymentModality || {};

  const convertirFecha = (iso) => {
    if (!iso) return null;
    const [y, m, d] = iso.split("T")[0].split("-");
    return `${d}/${m}/${y}`;
  };

  return {
    aseguradora: aseguradoras[1]?.nombre?? "",
    logo: aseguradoras[1]?.logo ?? "",
    id_empresa: parseInt(aseguradoras[1]?.id) ??"",
    id_cotizacion: cotizacion?.simulationId ?? "",
    precio: detalle?.totGrossAmn ?? 0,
    neto: detalle?.totNetAmn ?? 0,
    impuestos: detalle?.taxAmount ?? 0,
    recargos: detalle?.surchargeAmount ?? 0,
    moneda: res?.currencyIsoCode ?? "PEN",
    modalidadPagoId: modalidad?.paymentModalityId ?? "",
    inicio: convertirFecha(res?.effectiveDate),
    fin: convertirFecha(res?.dueDate),
  };
};

export const mapfreResCot = (arr) =>
  Array.isArray(arr) ? arr.map(modelMapfreCot) : [modelMapfreCot(arr)];
