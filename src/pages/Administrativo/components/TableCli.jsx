export default function TablaClientes({ clientes = [] }) {
  const clientesArray = Array.isArray(clientes) ? clientes : [clientes];
  return (
    <div>
      <table className="min-w-full text-sm">
        <thead className="border-background border-t-2 bg-background">
          <tr>
            <th className="px-1 py-2 text-left">Nombres</th>
            <th className="px-1 py-2 text-left">Apellidos</th>
            <th className="px-1 py-2 text-left">Correo electronico</th>
            <th className="px-1 py-2 text-left">Telefono</th>
            <th className="px-1 py-2 text-left">Tipo/ Nro doc.</th>
            <th className="px-1 py-2 text-left">Ubicacion</th>
            <th className="px-1 py-2 text-left">Direccion</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-200">
          {clientesArray.map((p, i) => (
            <tr key={i} className="border-zinc-200 border-t-2">
              <td className="px-1 py-2">{p.nombre}</td>
              <td className="px-1 py-2">{p.apell_paterno} {p.apell_materno}</td>
              <td className="px-1 py-2">{p.email}</td>
              <td className="px-1 py-2">{p.numero_celular}</td>
              <td className="px-1 py-2">{p.tipoDocumento}: {p.numeroDocumento}</td>
              <td className="px-1 py-2">{p.departamento}, {p.provincia}, {p.distrito}</td>
              <td className="px-1 py-2">{p.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
