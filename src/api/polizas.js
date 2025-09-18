import api from "./axios";
import qs from 'qs';

const toUTCString = (date, isEnd = false) => {
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  const hour = isEnd ? "23" : "00";
  const min = isEnd ? "59" : "00";
  const sec = isEnd ? "59" : "00";
  return `${year}-${month}-${day}T${hour}:${min}:${sec}Z`;
};

const fromUTCString = (utcString) => {
  const d = new Date(utcString);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2,"0");
  const min = String(d.getMinutes()).padStart(2,"0");
  const sec = String(d.getSeconds()).padStart(2,"0");
  
  return `${day}/${month}/${year} ${hours}:${min}:${sec}`;
};

const convertirFechas = (arr) => {
  return arr.map(p => ({
    ...p,
    fecha_venta: fromUTCString(p.fecha_venta),
    fecha_vigencia: fromUTCString(p.fecha_vigencia),
    fecha_vencimiento: fromUTCString(p.fecha_vencimiento)
  }));
};
const convertirFechasPaginacion = (arr) => {
  return {...arr,content:arr.content.map(p => ({...p,fecha_vencimiento: fromUTCString(p.fecha_vencimiento)}))};
};

const convertirFechasPaginacionGeneral = (arr) => {
  return {...arr,content:arr.content.map(p => ({...p,fecha_vencimiento: fromUTCString(p.fecha_vencimiento),fecha_venta: fromUTCString(p.fecha_venta), fecha_vigencia: fromUTCString(p.fecha_vigencia)}))};
};

export const almacenarPolizaPrevEmision = async (formulario) => {
  const res = await api.post("/poliza/venta", formulario);
  if(res.status!=201){
    return null
  }
  console.log(res)
  return res.data;
};

export const actualizarPolizaPostEmision= async (formulario)=> {
  const res = await api.put("poliza/numero-poliza",formulario);
  if(res.status!=201){
    return null
  }
  return res.data
}

//aun no implementado
export const actualizarEstadoPoliza = async(formulario) =>{
  const res= await api.post(`/estado-poliza/crear`, formulario);
  if(res.status!=201){
    return null
  }
  return res.data
}


//aun falta crear en backend
export const enviarDatosCotizacion = async (formulario) =>{
  const res = await api.post("/poliza/cotizacion",formulario);
  return res.data;
};


const ignorarParams = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      if (typeof v === "string") {
        const t = v.trim();
        return [k, t === "" || t === "null" || t === "undefined" ? null : t];
      }
      if (v === undefined) return [k, null];
      return [k, v];
    })
  );


export const listarPolizas = async (filtros) => {
  const filtrosConUTC = { ...filtros };

  if (filtros.desde) {
    filtrosConUTC.desde = toUTCString(filtros.desde, false);
  }
  if (filtros.hasta) {
    filtrosConUTC.hasta = toUTCString(filtros.hasta, true);
  }
  
  const filtrosfilt= ignorarParams(filtrosConUTC)

  const query = qs.stringify(filtrosfilt, {
    skipNulls: true,
    encode: false,
  });

  console.log(query);

  const res = await api.get(`/poliza/resumen-polizas?${query}`);
  const resOrd = convertirFechasPaginacionGeneral(res.data);
  return resOrd;
};


export const listarPolizasVencimiento = async (filtros)=>{
  const filtrosConUTC = { ...filtros };

  if (filtros.desde) {
    filtrosConUTC.desde = toUTCString(filtros.desde, false);
  }
  if (filtros.hasta) {
    filtrosConUTC.hasta = toUTCString(filtros.hasta, true);
  }

  const query = qs.stringify(filtrosConUTC, {
    skipNulls: true,
    encode: false,
  });

  console.log(query);

  const res = await api.get(`/poliza/vencimiento?${query}`);
  return convertirFechas(res.data);
}


export const listarPolizasPorPV =async (puntoDeVentaId,pagina=0,size=10)=>{
  const res = await api.get(`/poliza/lista-ventas/${puntoDeVentaId}?page=${pagina}&size=${size}`)
  const resOrd = convertirFechasPaginacion(res.data);
  return resOrd;
  // return convertirFechas(res.data);
}





////////////////  GENERACION DE DOCUMENTOS ///////////////

export const genExcelPolizas = async (filtros) => {
  try {
    const filtrosConUTC = { ...filtros };
    if (filtros.desde) {
      filtrosConUTC.desde = toUTCString(filtros.desde, false);
    }
    if (filtros.hasta) {
      filtrosConUTC.hasta = toUTCString(filtros.hasta, true);
    }
    
    const filtrosfilt= ignorarParams(filtrosConUTC)
    console.log(filtrosfilt)
    const query = qs.stringify(filtrosfilt, {
      skipNulls: true,
      encode: false,
    });
    console.log(query);
    const res = await api.get(`/veransa/excel/polizas?${query}`,{responseType:"blob"});
    if (res && res.data) {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      console.log(url)
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "asdsd.xlsx"); 
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    }
    return res;
  } catch (error) {
    console.error(error)
  }
};

export const genExcelPolizasGlobal = async (filtros) => {
  console.log(filtros)
  try {
    const filtrosConUTC = { ...filtros };

    if (filtros.desde) {
      filtrosConUTC.desde = toUTCString(filtros.desde, false);
    }
    if (filtros.hasta) {
      filtrosConUTC.hasta = toUTCString(filtros.hasta, true);
    }
    const filtrosfilt= ignorarParams(filtrosConUTC)
    const query = qs.stringify(filtrosfilt, {
      skipNulls: true,
      encode: false,
    });
    const res = await api.get(`/veransa/excel/reporte-global?${query}`,{responseType:"blob"});
    return res;
  } catch (error) {
    console.error(error)
  }
};