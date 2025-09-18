const convertirFecha = (iso) => {
    if (!iso) return null;
    const [y, m, d] = iso.split("T")[0].split("-");
    return `${y}-${m}-${d}`;
  };
const detectarTipoPersona = (tipoDoc, numero) => {
  if (tipoDoc === "DNI" || tipoDoc === "CE") return 1;

  if (tipoDoc === "RUC") {
    if (numero?.startsWith("20") && numero.length === 11) return 2;
    if ((numero?.startsWith("10") || numero?.startsWith("15")) && numero.length === 11) return 1;
  }

  return null;
};
  export const cotizaModelPositiva = (vehiculo, contratante,fechas) => ({
    nombre_clase: vehiculo.clase_positiva.nombre,
    nombre_marca: vehiculo.marcaNombre,
    nombre_modelo: vehiculo.modeloNombre,
    nombre_uso: vehiculo.uso,
    fecha_vigencia: convertirFecha(fechas.fecha_vigencia),
    placa: vehiculo.placa,
    anio: vehiculo.anio,
    version:vehiculo.version,
    descripcion_vehiculo: vehiculo.modelo_especifico,
    ubigeo_circulacion: vehiculo.distritoId,
    numero_asientos: vehiculo.numero_asientos,
    id_modalidad:1,
    tipo_persona: detectarTipoPersona(contratante.tipo_documento, contratante.numero_documento),
    // tipo_pape:"DI",
    // tarf_multi:0,
    tipo_documento: contratante.td,
    numero_documento: contratante.numero_documento,
});