export default function TablaPdvs({ pdvs = [], editar, anular}) {

  return (
    <div>
      <table className="min-w-full text-sm">
        <thead className="border-background border-t-2 bg-background">
          <tr>
            <th className="px-1 py-2 text-left">Colaborador</th>
            <th className="px-1 py-2 text-left">Documento</th>
            <th className="px-1 py-2 text-left">Ubicacion</th>
            <th className="px-1 py-2 text-left">Negocio</th>
            <th className="px-1 py-2 text-left">RUC</th>
            <th className="px-1 py-2 text-left">Fachada</th>
            <th className="px-1 py-2 text-left">Contrato</th>
            <th className="px-1 py-2 text-left">Estado</th>


            <th className="px-1 py-2 text-left">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-200">
          {pdvs.map((p, i) => (
            <tr key={i} className="border-zinc-200 border-t-2">
              <td className="px-1 py-2">{p.nombre}</td>
              <td className="px-1 py-2">{p.tipo_documento}: {p.numero_documento}</td>
              <td className="px-1 py-2">{p.departamento}, {p.provincia}, {p.distrito}</td>
              <td className="px-1 py-2">{p.puntoDeVenta?.[0]?.nombre_punto_venta}</td>
              <td className="px-1 py-2">{p.puntoDeVenta?.[0]?.ruc}</td>
              <td className="px-1 py-2">{p.puntoDeVenta?.[0]?.foto_fachada}</td>
              <td className="px-1 py-2">{p.puntoDeVenta?.[0]?.contrato}</td>
              <td className="px-1 py-2">{p.puntoDeVenta?.[0]?.estado}</td>
              <td className="px-1 py-2 flex gap-2">
                <button className="text-blue-500 hover:underline" onClick={()=>editar(p)}>Editar</button>
                <button className="text-red-500 hover:underline" onClick={anular}>Anular</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
