export default function TablaEmpleados({ empleados = [], editar, anular, addRol}) {

  return (
    <div>
      <table className="w-full text-sm border-separate [border-spacing:0_8px]">
          <colgroup>
            <col className="w-[22ch]" />
            <col className="sm:w-[26ch] w-[20ch]" />
            <col className="w-[12ch]" />
            <col className="w-[18ch]" />
            <col className="w-[10ch]" />
            <col className="md:w-[26ch] w-[20ch]" />
            <col className="w-30" />
          </colgroup>
        <thead>
          <tr className="shadow-md shadow-gray-500 rounded-md">
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Trabajador</th>
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Correo electronico</th>
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Telefono</th>
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Tipo/ Nro doc.</th>
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Estado</th>
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Ubicacion</th>
            <th className="px-5 py-5 text-center text-[1rem] font-bold uppercase">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-200">
          {empleados.map((p, i) => (
            <tr key={i} className="border-zinc-200 border-t-2">
              <td className="px-3 py-2">{p.nombre} {p.apellido_paterno} {p.apellido_materno}</td>
              <td className="px-3 py-2">{p.correo}</td>
              <td className="px-3 py-2">{p.telefono}</td>
              <td className="px-3 py-2">{p.tipo_documento}: {p.numero_documento}</td>
              <td className={`px-3 py-2 text-center`}> <span className={` p-1.5 rounded-2xl ${p.estado === "ACTIVO" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{p.estado}</span></td>
              <td className="px-3 py-2">{p.departamento}, {p.provincia}, {p.distrito}</td>
              <td className="px-3 py-2 flex gap-2">
                <button className="text-primary hover:underline hover:cursor-pointer" onClick={()=>addRol(p)}>Asignar roles</button>
                <button className="text-blue-500 hover:underline hover:cursor-pointer" onClick={()=>editar(p)}>Editar</button>
                <button className={` hover:underline hover:cursor-pointer ${p.estado === "ACTIVO" ? "text-red-400" : "text-green-400"}`}
                  onClick={()=>anular(p.id_empleado,p.estado)}>
                  {p.estado==="ACTIVO" ? "Anular" : "Activar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
