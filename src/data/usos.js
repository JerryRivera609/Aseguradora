export const tiposYUsosCompletos = {
  "AUTOMOVIL": {
    imagen :"/automovil.png",
    items:[
    { 
      key: "AUTOMOVIL", 
      positiva: {id: 1, nombre: "AUTOMOVIL"},
      mapfre: {id: 1, nombre: "AUTOMOVIL"},
      categoria:[{idPosi:6,cat:"M1"}],
      usos: {
        "PARTICULAR": {
          positiva: "PARTICULAR",
          mapfre: "PARTICULAR"
        },
        // "TAXI_URBANO": {
        //   positiva: "TAXI URBANO",
        //   mapfre: "TAXI"
        // },
        // "TAXI_REMISSE": {
        //   positiva: "TAXI REMISSE",
        //   mapfre: "TAXI"
        // },
        "URBANO": {
          positiva: "URBANO",
          mapfre: "PUBLICO URBANO"
        },
        // "INTERPROVINCIAL": {
        //   positiva: "INTERPROVINCIAL",
        //   mapfre: "PUBLICO URBANO"
        // },
        // "ESCOLAR": {
        //   positiva: "ESCOLAR",
        //   mapfre: "PUBLICO URBANO"
        // },
        // "TURISTICO": {
        //   positiva: "TURISTICO",
        //   mapfre: "PUBLICO URBANO"
        // },
        // "INTER_URBANO": {
        //   positiva: "INTER-URBANO",
        //   mapfre: "PUBLICO URBANO"
        // }
      }
    }
  ]},

  "CAMION":{ 
    imagen :"/camion.png",
    items: [
      { 
        key: "CAMION < 12 TON", 
        positiva: {id: 7, nombre: "CAMION < 12 TON"},
        mapfre: {id: 4, nombre: "CAMION"},
        categoria:[{idPosi:9,cat:"N1"},{idPosi:10,cat:"N2"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "CAMION > 12 TON", 
        positiva: {id: 56, nombre: "CAMION > 12 TON"},
        mapfre: {id: 4, nombre: "CAMION"},
        categoria:[{idPosi:11,cat:"N3"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "CAMION CAÑERO", 
        positiva: {id: 69, nombre: "CAMION CAÑERO"},
        mapfre: {id: 4, nombre: "CAMION"},
        categoria:[{idPosi:10,cat:"N2"},{idPosi:11,cat:"N3"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "CAMION CISTERNA", 
        positiva: {id: 71, nombre: "CAMION CISTERNA"},
        mapfre: {id: 4, nombre: "CAMION"},
        categoria:[{idPosi:9,cat:"N1"},{idPosi:10,cat:"N2"},{idPosi:11,cat:"N3"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "CAMION BARANDA", 
        positiva: {id: 70, nombre: "CAMION BARANDA"},
        mapfre: {id: 4, nombre: "CAMION"},
        categoria:[{idPosi:9,cat:"N1"},{idPosi:10,cat:"N2"},{idPosi:11,cat:"N3"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "CAMION FURGON", 
        positiva: {id: 72, nombre: "CAMION FURGON"},
        mapfre: {id: 4, nombre: "CAMION"},
        categoria:[{idPosi:9,cat:"N1"},{idPosi:10,cat:"N2"},{idPosi:11,cat:"N3"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      }
    ]},

  "CAMIONETA":{ 
    imagen: "/camioneta.png",
    items: [
      { 
        key: "PANEL", 
        positiva: {id: 19, nombre: "CAMIONETA PANEL"},
        mapfre: {id: 5, nombre: "CAMIONETA PANEL"},
        categoria:[{idPosi:9,cat:"N1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // },
          "COMERCIAL": {
            positiva: null,
            mapfre: "COMERCIAL"
          }
        }
      },
      { 
        key: "PICK UP CAB SIMPLE TRAC SIMPLE", 
        positiva: {id: 3, nombre: "Cmta. Pick Up/Cabina Simple"},
        mapfre: {id: 7, nombre: "CAMIONETA PICK UP TRACCI SIMPL"},
        categoria:[{idPosi:9,cat:"N1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // }
        }
      },
      { 
        key: "PICK UP CAB SIMPLE TRAC DOBLE", 
        positiva: {id: 3, nombre: "Cmta. Pick Up/Cabina Simple"},
        mapfre: {id: 6, nombre: "CAMIONETA PICK UP DOBLE TRACCI"},
        categoria:[{idPosi:9,cat:"N1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // }
        }
      },
      { 
        key: "PICK UP CAB DOBLE TRAC SIMPLE", 
        positiva: {id: 16, nombre: "Cmta. Pick Up/Doble Cabina"},
        mapfre: {id: 7, nombre: "CAMIONETA PICK UP TRACCI SIMPL"},
        categoria:[{idPosi:9,cat:"N1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // }
        }
      },
      { 
        key: "PICK UP CAB DOBLE TRAC DOBLE", 
        positiva: {id: 16, nombre: "Cmta. Pick Up/Doble Cabina"},
        mapfre: {id: 6, nombre: "CAMIONETA PICK UP DOBLE TRACCI"},
        categoria:[{idPosi:9,cat:"N1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // }
        }
      },
      { 
        key: "RURAL ≤ 9 ASI TRAC SIMPLE", 
        positiva: {id: 33, nombre: "Camioneta Rural hasta 9 Astos"},
        mapfre: {id: 9, nombre: "CAMIONETA RURAL TRACCION SIMPL"},
        categoria:[{idPosi:6,cat:"M1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          "URBANO": {
            positiva: "URBANO",
            mapfre: "PUBLICO URBANO"
          },
          // "INTERPROVINCIAL": {
          //   positiva: "INTERPROVINCIAL",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "ESCOLAR": {
          //   positiva: "ESCOLAR",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          // "TURISTICO": {
          //   positiva: "TURISTICO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // },
          // "INTER_URBANO": {
          //   positiva: "INTER-URBANO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TAXI_REMISSE": {
          //   positiva: "TAXI REMISSE",
          //   mapfre: "TAXI"
          // }
        }
      },
      { 
        key: "RURAL ≤ 9 ASI TRAC DOBLE", 
        positiva: {id: 33, nombre: "Camioneta Rural hasta 9 Astos"},
        mapfre: {id: 8, nombre: "CAMIONETA RURAL TRACC DOB"},
        categoria:[{idPosi:6,cat:"M1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          "URBANO": {
            positiva: "URBANO",
            mapfre: "PUBLICO URBANO"
          },
          // "INTERPROVINCIAL": {
          //   positiva: "INTERPROVINCIAL",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "ESCOLAR": {
          //   positiva: "ESCOLAR",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          // "TURISTICO": {
          //   positiva: "TURISTICO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "AMBULANCIA": {
          //   positiva: "AMBULANCIA",
          //   mapfre: null
          // },
          // "INTER_URBANO": {
          //   positiva: "INTER-URBANO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TAXI_REMISSE": {
          //   positiva: "TAXI REMISSE",
          //   mapfre: "TAXI"
          // }
        }
      },
      { 
        key: "RURAL > 9 ASI TRAC SIMPLE", 
        positiva: {id: 34, nombre: "Camioneta rural mayor 9 astos"},
        mapfre: {id: 9, nombre: "CAMIONETA RURAL TRACCION SIMPL"},
        categoria:[{idPosi:6,cat:"M1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          "URBANO": {
            positiva: "URBANO",
            mapfre: "PUBLICO URBANO"
          },
          // "INTERPROVINCIAL": {
          //   positiva: "INTERPROVINCIAL",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "ESCOLAR": {
          //   positiva: "ESCOLAR",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          // "TURISTICO": {
          //   positiva: "TURISTICO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "INTER_URBANO": {
          //   positiva: "INTER-URBANO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TAXI_REMISSE": {
          //   positiva: "TAXI REMISSE",
          //   mapfre: "TAXI"
          // }
        }
      },
      { 
        key: "RURAL > 9 ASI TRAC DOBLE", 
        positiva: {id: 34, nombre: "Camioneta rural mayor 9 astos"},
        mapfre: {id: 8, nombre: "CAMIONETA RURAL TRACC DOB"},
        categoria:[{idPosi:6,cat:"M1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          "URBANO": {
            positiva: "URBANO",
            mapfre: "PUBLICO URBANO"
          },
          // "INTERPROVINCIAL": {
          //   positiva: "INTERPROVINCIAL",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "ESCOLAR": {
          //   positiva: "ESCOLAR",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TRANSPORTE_PERSONAL": {
          //   positiva: "TRANSPORTE PERSONAL",
          //   mapfre: null
          // },
          // "TURISTICO": {
          //   positiva: "TURISTICO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "INTER_URBANO": {
          //   positiva: "INTER-URBANO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TAXI_REMISSE": {
          //   positiva: "TAXI REMISSE",
          //   mapfre: "TAXI"
          // }
        }
      },
      { 
        key: "ST. WAGON", 
        positiva: {id: 2, nombre: "Camioneta station wagon"},
        mapfre: {id: 10, nombre: "CAMIONETA ST. WAGON"},
        categoria:[{idPosi:6,cat:"M1"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          "URBANO": {
            positiva: "URBANO",
            mapfre: "PUBLICO URBANO"
          },
          // "INTERPROVINCIAL": {
          //   positiva: "INTERPROVINCIAL",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "ESCOLAR": {
          //   positiva: "ESCOLAR",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TURISTICO": {
          //   positiva: "TURISTICO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TAXI_URBANO": {
          //   positiva: "TAXI URBANO",
          //   mapfre: "TAXI"
          // },
          // "INTER_URBANO": {
          //   positiva: "INTER-URBANO",
          //   mapfre: "PUBLICO URBANO"
          // },
          // "TAXI_REMISSE": {
          //   positiva: "TAXI REMISSE",
          //   mapfre: "TAXI"
          // }
        }
      }
    ]},

  "REMOLCADOR": {
    imagen :"/remolcador.png",
    items:[
      { 
        key: "< 3.5 TON", 
        positiva: {id: 18, nombre: "REMOLCADOR < 3.5 TON"},
        mapfre: {id: 1, nombre: "REMOLCADOR"},
        categoria:[{idPosi:9,cat:"N1"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "3.5 - 12 TON", 
        positiva: {id: 61, nombre: "REMOLCADOR 3.5 A 12 TON"},
        mapfre: {id: 1, nombre: "REMOLCADOR"},
        categoria:[{idPosi:10,cat:"N2"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "> 12 TON", 
        positiva: {id: 62, nombre: "REMOLCADOR > 12 TON"},
        mapfre: {id: 1, nombre: "REMOLCADOR"},
        categoria:[{idPosi:11,cat:"N3"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      }
    ]},

  "VEHICULO MENOR": {
    imagen: "/vehiculo menor.png",
    items: [
      { 
        key: "MOTOTAXI", 
        positiva: {id: 25, nombre: "MOTOTAXI"},
        mapfre: {id: 15, nombre: "TRIMOTO"},
        categoria:[{idPosi:5,cat:"L5"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: null
          },
          "URBANO": {
            positiva: "URBANO",
            mapfre: null
          },
          // "CARGA": {
          //   positiva: null,
          //   mapfre: "CARGA"
          // },
          // "TAXI": {
          //   positiva: null,
          //   mapfre: "TAXI"
          // }
        }
      },
      { 
        key: "FURGONETA", 
        positiva: {id: 24, nombre: "FURGONETA"},
        mapfre: {id: 1, nombre: "TRIMOTO"},
        categoria:[{idPosi:5,cat:"L5"}],
        usos: {
          "CARGA": {
            positiva: "CARGA",
            mapfre: "CARGA"
          }
        }
      },
      { 
        key: "MOTOCICLETA", 
        positiva: {id: 10, nombre: "VEHICULO MENOR"},
        mapfre: {id: 14, nombre: "MOTOCICLETA"},
        categoria:[{idPosi:3,cat:"L3"}],
        usos: {
          "PARTICULAR": {
            positiva: "PARTICULAR",
            mapfre: "PARTICULAR"
          },
          // "URBANO": {
          //   positiva: "URBANO",
          //   mapfre: null
          // },
          "COMERCIAL": {
            positiva: "COMERCIAL",
            mapfre: "COMERCIAL"
          }
        }
      },
      // { 
      //   key: "VEHICULO MENOR", 
      //   positiva: {id: 10, nombre: "VEHICULO MENOR"},
      //   mapfre: {id: null, nombre: ""},
      //   categoria:[{idPosi:3,cat:"L3"}],
      //   usos: {
      //     "PARTICULAR": {
      //       positiva: "PARTICULAR",
      //       mapfre: null
      //     },
      //     "URBANO": {
      //       positiva: "URBANO",
      //       mapfre: null
      //     },
      //     "COMERCIAL": {
      //       positiva: "COMERCIAL",
      //       mapfre: null
      //     }
      //   }
      // }
    ]},


    //aca falta agregar imagenes
  // "BUS": [
  //   { 
  //     key: "MICROBUS", 
  //     positiva: {id: 20, nombre: "MICROBUS"},
  //     mapfre: {id: 13, nombre: "MICROBUS"},
  //     categoria:[{idPosi:7,cat:"M2"},{idPosi:8,cat:"M3"}],
  //     usos: {
  //       "PARTICULAR": {
  //         positiva: "PARTICULAR",
  //         mapfre: "PARTICULAR"
  //       },
  //       "URBANO": {
  //         positiva: "URBANO",
  //         mapfre: null
  //       },
  //       "INTERPROVINCIAL": {
  //         positiva: "INTERPROVINCIAL",
  //         mapfre: null
  //       },
  //       "ESCOLAR": {
  //         positiva: "ESCOLAR",
  //         mapfre: null
  //       },
  //       "TRANSPORTE_PERSONAL": {
  //         positiva: "TRANSPORTE PERSONAL",
  //         mapfre: null
  //       },
  //       "TURISTICO": {
  //         positiva: "TURISTICO",
  //         mapfre: null
  //       }
  //     }
  //   },
  //   { 
  //     key: "MINIBUS", 
  //     positiva: {id: 86, nombre: "MINIBUS"},
  //     mapfre: {id: null, nombre: "MINIBUS"},
  //     categoria:[{idPosi:7,cat:"M2"},{idPosi:8,cat:"M3"}],
  //     usos: {
  //       "URBANO": {
  //         positiva: "URBANO",
  //         mapfre: null
  //       },
  //       "INTERPROVINCIAL": {
  //         positiva: "INTERPROVINCIAL",
  //         mapfre: null
  //       },
  //       "ESCOLAR": {
  //         positiva: "ESCOLAR",
  //         mapfre: null
  //       },
  //       "TRANSPORTE_PERSONAL": {
  //         positiva: "TRANSPORTE PERSONAL",
  //         mapfre: null
  //       },
  //       "TURISTICO": {
  //         positiva: "TURISTICO",
  //         mapfre: null
  //       }
  //     }
  //   },
  //   { 
  //     key: "OMNIBUS", 
  //     positiva: {id: 6, nombre: "OMNIBUS"},
  //     mapfre: {id: 16, nombre: "OMNIBUS"},
  //     categoria:[{idPosi:8,cat:"M3"}],
  //     usos: {
  //       "PARTICULAR": {
  //         positiva: "PARTICULAR",
  //         mapfre: null
  //       },
  //       "URBANO": {
  //         positiva: "URBANO",
  //         mapfre: null
  //       },
  //       "INTERPROVINCIAL": {
  //         positiva: "INTERPROVINCIAL",
  //         mapfre: null
  //       },
  //       "ESCOLAR": {
  //         positiva: "ESCOLAR",
  //         mapfre: null
  //       },
  //       "TRANSPORTE_PERSONAL": {
  //         positiva: "TRANSPORTE PERSONAL",
  //         mapfre: "TRANSP PERSONAL"
  //       },
  //       "TURISTICO": {
  //         positiva: "TURISTICO",
  //         mapfre: null
  //       }
  //     }
  //   }
  // ],

  // "OMNIBUS": [
  //   { 
  //     key: "OMNIBUS", 
  //     positiva: {id: null, nombre: "OMNIBUS"},
  //     mapfre: {id: 16, nombre: "OMNIBUS"},
  //     categoria:[{idPosi:8,cat:"M3"}],
  //     usos: {
  //       "PARTICULAR": {
  //         positiva: "PARTICULAR",
  //         mapfre: null
  //       },
  //       "URBANO": {
  //         positiva: "URBANO",
  //         mapfre: null
  //       },
  //       "INTERPROVINCIAL": {
  //         positiva: "INTERPROVINCIAL",
  //         mapfre: null
  //       },
  //       "ESCOLAR": {
  //         positiva: "ESCOLAR",
  //         mapfre: null
  //       },
  //       "TRANSPORTE_PERSONAL": {
  //         positiva: "TRANSPORTE PERSONAL",
  //         mapfre: "TRANSP PERSONAL"
  //       },
  //       "TURISTICO": {
  //         positiva: "TURISTICO",
  //         mapfre: null
  //       }
  //     }
  //   }
  // ]
};

export const placas={
  "L":[
    {
      uso:"PARTICULAR",
      img:"/placa_l_moto_particular.png"
    },
    {
      uso:"CARGA",
      img:"/placa_l_moto_carga.png"
    }
  ],
  "M":[
    {
      uso:"PARTICULAR",
      img:"/placa_m_particular.png"
    },
    {
      uso:"TAXI",
      img:"/placa_m_taxi.png"
    },
    {
      uso:"INTERPROVINCIAL",
      img:"/placa_m_bus_interprovincial.png"
    },
    {
      uso:"URBANO",
      img:"/placa_m_bus_urbano.png"
    },
    {
      uso:"TURISMO",
      img:"/placa_m_bus_turismo.png"
    },
  ],
  "N":[
    {
      uso:"CARGA",
      img:"/placa_n_carga.png"
    },
    {
      uso:"PARTICULAR",
      img:"/placa_n_carga.png"
    }
  ]
}

export function obtenerUsosDisponiblesPorSubtipo(tipoGeneral, keySubtipo, empresa) {
  const tipo = tiposYUsosCompletos[tipoGeneral];
  if (!tipo || !tipo.items) return [];

  const subtipo = tipo.items.find(t => t.key === keySubtipo);
  if (!subtipo || !subtipo.usos) return [];

  return Object.keys(subtipo.usos)
    .filter(uso => subtipo.usos[uso][empresa] !== null)
    .map(uso => ({
      key: uso,
      value: subtipo.usos[uso][empresa],
      label: subtipo.usos[uso][empresa]
    }));
}

export function convertirUsoEntreEmpresas(tipoGeneral, keySubtipo, uso, empresaOrigen, empresaDestino) {
  const tipo = tiposYUsosCompletos[tipoGeneral];
  if (!tipo || !tipo.items) return null;

  const subtipo = tipo.items.find(t => t.key === keySubtipo);
  if (!subtipo || !subtipo.usos) return null;

  const usoEncontrado = Object.keys(subtipo.usos).find(
    key => subtipo.usos[key][empresaOrigen] === uso
  );

  if (!usoEncontrado) return null;

  return subtipo.usos[usoEncontrado][empresaDestino];
}


console.log("mapfre")
obtenerUsosDisponiblesPorSubtipo("CAMIONETA", "PICK UP CAB SIMPLE TRAC SIMPLE", "mapfre")
console.log("positiva")
obtenerUsosDisponiblesPorSubtipo("CAMIONETA", "PICK UP CAB SIMPLE TRAC SIMPLE", "positiva")
// convertirUsoEntreEmpresas("CAMIONETA", "PICK UP CAB SIMPLE TRAC SIMPLE", "PARTICULAR", "positiva", "mapfre")