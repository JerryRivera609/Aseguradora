export const enviarMapfre = (formulario) => {
  const contratante = formulario.contratante || {};
  const vehiculo = formulario.vehiculo || {};
  const aseguradora = formulario.aseguradora || {};

  return {
    nombre_clase: vehiculo.clase_mapfre.nombre,
    nombre_marca: vehiculo.marcaNombre,
    nombre_uso: vehiculo.uso,
    nombre_modelo: vehiculo.modeloNombre,
    nombre_departamento: vehiculo.departamento,
    nombre_provincia: vehiculo.provincia,
    nombre_distrito: vehiculo.distrito,
    placa: vehiculo.placa,
    anio: parseInt(vehiculo.anio),
    chasis: vehiculo.serie,
    asientos: vehiculo.numero_asientos,
    fecha_vigencia: contratante.fecha_vigencia,
    id_cotizacion: aseguradora.id_cotizacion,
    tipo_documento: contratante.tipo_documento,
    numero_documento: contratante.numero_documento,
    correo: contratante.email,
    nombres_cliente: contratante.nombres,
    apellido_paterno_cliente: contratante.apellido_paterno,
    apellido_materno_cliente: contratante.apellido_materno,
    fecha_nacimiento: contratante.fecha_nacimiento
  };
};
