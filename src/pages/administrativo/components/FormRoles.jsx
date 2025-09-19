import { useEffect, useState } from "react";
import { listarRoles, agregarRol, quitarRol } from "../../../api/roles";
import { buscarEmpleadoConRol } from "../../../api/empleados";

export default function AddRol({ open, onClose, empleado }) {
  const [roles, setRoles] = useState([]);
  const [rolesEmpleado, setRolesEmpleado] = useState(new Set());

  useEffect(() => {
    if (!open || !empleado?.id_empleado) return;

    async function cargar() {
      try {
        const resRoles = await listarRoles();
        const detalle   = await buscarEmpleadoConRol(empleado.id_empleado);
        const ids = new Set((detalle?.roles || []).map(r => r.id_rol));
        setRolesEmpleado(ids);

        const rolesFilt = resRoles.map(s=>({...s,nombre:s.nombre.replace(/^ROL_/,"").replace(/_/," ")}))
        setRoles(rolesFilt || []);
      } catch (err) {
        console.error(err);
      }
    }

    cargar();
  }, [open, empleado?.id_empleado,]);

  const estaAsignado = (idRol) => rolesEmpleado.has(idRol);

  const toggleRol = async (rol) => {
    const asignado = estaAsignado(rol.id);

    setRolesEmpleado(prev=>{
      const next = new Set(prev);
      asignado ? next.delete(rol.id) : next.add(rol.id);
      return next;
    })
    try {
      if (asignado) {
        await quitarRol(empleado.id_empleado, rol.id);
      } else {
        await agregarRol(empleado.id_empleado, rol.id);
      }
    } catch (err) {
      setRolesEmpleado(prev=>{
        const next = new Set(prev);
        asignado ? next.add(rol.id) : next.delete(rol.id);
        return next;
      })
      console.error("Error al cambiar rol:", err);
    }
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-base font-semibold">
            Asignar roles — {empleado?.nombre ?? ""}
          </h3>
          <button onClick={onClose} className="rounded p-1 text-gray-500 hover:bg-gray-100">✕</button>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 py-4">
          <div>
            <h4 className="mb-2 text-sm font-medium text-gray-700">Todos los roles</h4>
            <div className="max-h-64 overflow-auto rounded border">
              {roles.length === 0 ? (
                <div className="p-3 text-sm text-gray-500">No hay roles.</div>
              ) : (
                <ul className="divide-y">
                  {roles.map(r => (
                    <li key={r.id} className="p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={estaAsignado(r.id)}
                        onChange={() => toggleRol(r)}
                        className="h-4 w-4"
                      />
                      <span>{r.nombre}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t px-4 py-3">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
