import aseguradoras from "../../data/aseguradoras.json";

export const modelMapfrePol = (poliza) => {
  const policy = poliza?.policyInfo || {};
  const detalle = poliza?.premiumDetail || {};
  const modalidad = poliza?.paymentModality || {};
  const recibo = poliza?.receipt?.[0] || {};

  return {
    aseguradora:      aseguradoras[1]?.nombre?? "",
    id_poliza:        policy?.policyId ?? "",
    id_compania:      policy?.companyId ?? "",
    retenida:         policy?.policyRetainedInd ?? false,
    precio:           detalle?.totGrossAmn ?? 0,
    neto:             detalle?.totNetAmn ?? 0,
    impuestos:        detalle?.taxAmount ?? 0,
    recargos:         detalle?.surchargeAmount ?? 0,
    descuentos:       detalle?.totPremiumDiscountAmn ?? 0,
    intereses:        detalle?.interestAmount ?? 0,
    modalidadPagoId:  modalidad?.paymentModalityId ?? "",
    id_recibo:        recibo?.receiptId ?? "",
    monto_recibo:     recibo?.receiptTotAmn ?? 0,
    moneda:           recibo?.currencyIsoCode ?? "PEN",
    inicio:           recibo?.effectiveDate,
    fin:              recibo?.dueDate,
  };
};
