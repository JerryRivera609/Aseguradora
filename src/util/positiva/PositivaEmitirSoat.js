const detectarTipoPersona = (tipoDoc, numero) => {
  if (tipoDoc === "DNI" || tipoDoc === "CE") return 1;

  if (tipoDoc === "RUC") {
    if (numero?.startsWith("20") && numero.length === 11) return 2;
    if ((numero?.startsWith("10") || numero?.startsWith("15")) && numero.length === 11) return 1;
  }

  return null;
};
export const enviarPositiva = (formulario) => {
    const contratante = formulario.contratante || {};
    const vehiculo = formulario.vehiculo || {};
    const aseguradora = formulario.aseguradora || {};

    const ubigeo= !contratante.distritoId ? contratante.ubigeo_sunat : contratante.distritoId;
    console.log(contratante.ubigeo_sunat)
    console.log(contratante.distritoId)
    return {
        token: aseguradora.id_cotizacion,
        chasis: vehiculo.serie,
        serie_motor: vehiculo.motor,
        id_categoria:1,
        nombre: contratante.nombres,
        apellido_paterno: contratante.apellido_paterno,
        apellido_materno: contratante.apellido_materno,
        tipo_documento: contratante.td,
        numero_doc: contratante.numero_documento,
        correo: contratante.email,
        id_departamento: ubigeo.slice(0,2),
        id_provincia: ubigeo.slice(2,4),
        id_distrito: ubigeo.slice(4,6),
        nombre_via: contratante.direccion,
        celular: contratante.numero_celular,
        tipo_persona: detectarTipoPersona(contratante.tipo_documento, contratante.numero_documento),
    };
};
