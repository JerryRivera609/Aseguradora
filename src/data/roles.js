export const AllRoles = {
  colab:[
    'ROL_COLABORADOR'
  ],
  ventas: [
    'ROL_VENTAS_GRAFICOS',
    'ROL_VENTAS_LISTAS',
    'ROL_VENTAS_GENERAR',
  ],
  operaciones: [
    'ROL_OPERACIONES_PLANILLAS',
    'ROL_OPERACIONES_GRAFICOS',
    'ROL_OPERACIONES_SINIESTROS',
    'ROL_OPERACIONES_VERIFICAR_CSV',
    'ROL_OPERACIONES_ACTUALIZAR_CSV',
    'ROL_OPERACIONES_VENCIMIENTOS',
    'ROL_OPERACIONES_LISTAS',
  ],
  administrativo: [
    'ROL_ADMINISTRATIVO_CLIENTES',
    'ROL_ADMINISTRATIVO_EMPLEADOS',
    'ROL_ADMINISTRATIVO_PUNTOVENTA',
    'ROL_ADMINISTRATIVO_GRAFICO',
  ],
};

export const RouteRoles = {
  colab: {
    colab: ['ROL_COLABORADOR']
  },
  ventas: {
    generar: ['ROL_VENTAS_GENERAR'],
    graficos: ['ROL_VENTAS_GRAFICOS'],
    versoats: ['ROL_VENTAS_LISTAS'],
  },
  operaciones: {
    cargacsv: ['ROL_OPERACIONES_VERIFICAR_CSV', 'ROL_OPERACIONES_ACTUALIZAR_CSV'],
    siniestros: ['ROL_OPERACIONES_SINIESTROS'],
    vencimiento: ['ROL_OPERACIONES_VENCIMIENTOS'],
    listapolizas: ['ROL_OPERACIONES_LISTAS'],
    graficos: ['ROL_OPERACIONES_GRAFICOS'],
    planillas: ['ROL_OPERACIONES_PLANILLAS'],
  },
  administrativo: {
    clientes: ['ROL_ADMINISTRATIVO_CLIENTES'],
    empleados: ['ROL_ADMINISTRATIVO_EMPLEADOS'],
    colaborador: ['ROL_ADMINISTRATIVO_PUNTOVENTA'],
    graficos: ['ROL_ADMINISTRATIVO_GRAFICOS'],
  },
};

export const hasAny = (userRoles = [], required = []) =>
  required.some(r => userRoles.includes(r));