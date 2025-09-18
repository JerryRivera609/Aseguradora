export default function TablaPolizasPV({ polizas = [] }) {
  return (
      <div className="text-foreground h-full overflow-auto text-center">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-lg bg-border">
              <th className="px-4 py-2 font-bold rounded-l-xl">Nro de póliza</th>
              <th className="px-4 py-2">Placa</th>
              <th className="px-4 py-2">Contratante / Telefono</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Prima</th>
              <th className="px-4 py-2">Aseguradora</th>
              <th className="px-4 py-2 font-bold rounded-r-xl">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-container rounded-xl">
            {polizas?.content?.map((p, i) => {
              const firstl= i===0;
              const lastl= i===polizas.content.length - 1;
              const firstr= i===0;
              const lastr= i===polizas.content.length - 1;
              
              const clasel = `${firstl ? 'rounded-tl-xl' : ''} ${lastl ? 'rounded-bl-xl' : ''}`;
              const claser = `${firstr ? 'rounded-tr-xl' : ''} ${lastr ? 'rounded-br-xl' : ''}`;
              return (
              <tr key={i} className="">
                <td className={`px-4 py-2 ${clasel}`}>{p.poliza}</td>
                <td className="px-4 py-2">{p.placa}</td>
                <td className="px-4 py-2">{p.cliente_nombre} {p.cliente_apell_paterno} {p.cliente_apell_materno} <br /> {p.cliente_telefono}</td>
                <td className="px-4 py-2">{p.fecha_venta}</td>
                <td className="px-4 py-2">S/. {p.prima}</td>
                <td className="px-4 py-2 grid place-items-center">
                  <span className={`text-md text-white w-full px-2 py-2 rounded-xd font-bold rounded-lg ${
                    p.empresa === "RIMAC" ? "bg-rimac" :
                    p.empresa === "MAPFRE" ? "bg-mapfre" :
                    p.empresa === "POSITIVA" ? "bg-positiva" :
                    p.empresa === "INTERSEGURO" ? "bg-interseguro" :
                    "text-gray-600 bg-disabled"
                  }`}>
                    {p.empresa}
                  </span>
                </td>
                <td className={`px-4 py-2 ${claser}`}>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    p.estado === "VENDIDO" ? "text-info bg-info-light border-info border-1" :
                    p.estado === "ENVIADO" ? "text-success bg-success-light border-success border-1" :
                    p.estado === "COBRADO" ? "text-success bg-success-light border-success border-1" :
                    p.estado === "REPORTADO" ? "text-warning bg-warning-light border-warning border-1" :
                    p.estado === "ANULADO" ? "text-error bg-error-light border-error border-1" :
                    "text-foreground-muted bg-disabled border-foreground-muted border-1"
                  }`}>
                    {p.estado}
                  </span>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
  );
}
