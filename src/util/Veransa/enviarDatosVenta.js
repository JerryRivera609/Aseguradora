function toISOStringUTC(fechaStr) {
  if (!fechaStr) return null;
  const [day, month, year] = fechaStr.split("/").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toISOString();
}
export const savePoliModel = (formulario,pdv) => {
  const contratante = formulario.contratante || {};
  const vehiculo = formulario.vehiculo || {};
  const aseguradora = formulario.aseguradora || {};
  return {
    placa: vehiculo.placa,
    chasis: vehiculo.serie,
    clase: vehiculo.clase.label,
    marca: vehiculo.marcaNombre,
    modelo: vehiculo.modeloNombre,
    modelo_especifico: vehiculo.modelo_especifico,
    anio: parseInt(vehiculo.anio),
    numero_asientos: parseInt(vehiculo.numero_asientos),
    uso: vehiculo.uso,
    zona_circulacion: vehiculo.departamento,
    departamentov: vehiculo.departamento,
    provinciav: vehiculo.provincia,
    distritov: vehiculo.distrito,
      
    tipo_documento: contratante.tipo_documento,
    numero_documento: contratante.numero_documento,
    nombres: contratante.nombres,
    apell_paterno: contratante.apellido_paterno,
    apell_materno: contratante.apellido_materno,
    fecha_nacimiento: contratante.fecha_nacimiento,
    telefono: contratante.numero_celular,
    email: contratante.email,
    departamento: contratante.departamento,
    provincia: contratante.provincia,
    distrito: contratante.distrito,
    direccion: contratante.direccion,

    // numero_poliza: soat?.id_poliza ?? "",
    prima: parseFloat(aseguradora.precio),
    tipo: "VIRTUAL",

    id_punto_venta: parseInt(pdv),
    id_tipo_seguro: 1,

    fecha_vigencia: toISOStringUTC(aseguradora.inicio),
    fecha_vencimiento: toISOStringUTC(aseguradora.fin),

    id_empresa: parseInt(aseguradora.id_empresa)
  };
}

export const actPoliModel = (formulario,idpoli)=>{
  const soat = formulario.soat || {};

  return{
    id_poliza: idpoli,
    numero_poliza: soat?.id_poliza,
  }
}