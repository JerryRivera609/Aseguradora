export default function TablaVencimiento({ polizas = [] }) {
  return (
    <div>
      <table className="min-w-full text-sm">
        <thead className="border-border border-t-2 bg-background">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Nro de póliza</th>
            <th className="px-4 py-2 text-left">Placa</th>
            <th className="px-4 py-2 text-left">Contratante / Telefono</th>
            <th className="px-4 py-2 text-left">Prima</th>
            <th className="px-4 py-2 text-left">Aseguradora</th>
            <th className="px-4 py-2 text-left">Fecha de vencimiento</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-border">
          {polizas.map((p, i) => (
            <tr key={i} className="border-border border-t-2">
              <td className="px-4 py-2">{p.numero_poliza}</td>
              <td className="px-4 py-2">{p.placa}</td>
              <td className="px-4 py-2">{p.cliente_nombre} {p.cliente_apell_paterno} {p.cliente_apell_materno} <br /> {p.cliente_telefono}</td>
              <td className="px-4 py-2">S/. {p.poliza_prima}</td>
              <td className="px-4 py-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  p.empresa === "RIMAC" ? "text-rimac bg-rimac-light" :
                  p.empresa === "MAPFRE" ? "text-mapfre bg-mapfre-light" :
                  p.empresa === "POSITIVA" ? "text-positiva bg-positiva-light" :
                  p.empresa === "INTERSEGURO" ? "text-interseguro bg-interseguro-light" :
                  "text-gray-600 bg-disabled"
                }`}>
                  {p.empresa}
                </span>
              </td>
              <td className="px-4 py-2">{p.fecha_vencimiento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

