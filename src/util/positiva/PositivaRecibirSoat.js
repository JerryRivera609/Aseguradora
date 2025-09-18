import aseguradoras from "../../data/aseguradoras.json";

export const modelPositivaPol = (poliza) => {
    const idResultado = poliza?.IdResultado || "";
    const descripcion = poliza?.Descripcion || "";
    const datosPoliza = poliza?.DatosPoliza || {};
    const listaMensajeERror = poliza?.ListaMensajeError || {};

    return {
        aseguradora:        aseguradoras[0]?.nombre?? "",
        id_resultado:       idResultado,
        descripcion:        descripcion,
        id_poliza:          datosPoliza?.IdPoliza ?? "",
        id_transaccion:     datosPoliza?.IdTransaccion ?? "",
        id_certificado:     datosPoliza?.IdCertificado ?? "",
        id_recibo:          datosPoliza?.IdRecibo ?? "",
        lista_error:        listaMensajeERror
    };
};
