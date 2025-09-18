export const cotizaModelMapfre = (vehiculo, contratante,fechas) => ({
    placa: vehiculo.placa,
    nombre_uso: vehiculo.uso,
    nombre_clase: vehiculo.clase_mapfre.nombre,
    nombre_marca: vehiculo.marcaNombre,
    nombre_modelo: vehiculo.modeloNombre,
    anio: vehiculo.anio,
    chasis: vehiculo.serie,
    modelo_especifico_descripcion: vehiculo.modelo_especifico,
    asientos: vehiculo.numero_asientos,

    tipo_documento: contratante.tipo_documento,
    numero_documento: contratante.numero_documento,
    nombre_departamento: vehiculo.departamento,
    nombre_provincia: vehiculo.provincia,
    nombre_distrito: vehiculo.distrito,
    fecha_vigencia: fechas.fecha_vigencia,
    fecha_caducidad: fechas.fecha_caducidad,
});