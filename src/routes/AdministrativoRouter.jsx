import {Route,Routes,Navigate} from 'react-router-dom';
import GestorClientes from '../pages/Administrativo/GestorClientes';
import GestorEmpleados from '../pages/Administrativo/GestorEmpleados';
import GestorPuntoDeVenta from '../pages/Administrativo/GestorPuntosVenta';
import Grafica from '../pages/Administrativo/Grafica';
import { useAuth } from '../pages/Login/AuthContext'
import { RouteRoles, hasAny } from '../data/roles'


export default function AdministrativoRouter() {
  const {user}= useAuth();
  const roles = user?.roles ?? [];
  const ra= RouteRoles.administrativo;

  const AD_ROUTES = [
    { path: 'clientes',       element: <GestorClientes/>,       required: ra.clientes },
    { path: 'empleados',      element: <GestorEmpleados/>,      required: ra.empleados },
    { path: 'puntodeventa',   element: <GestorPuntoDeVenta/>,   required: ra.colaborador },
    { path: 'grafica',        element: <Grafica/>,              required: ra.graficos },
  ];
  
  const primeraRuta=AD_ROUTES.find(r => hasAny(roles, r.required))?.path;
  return (
    <Routes>
      <Route index element={primeraRuta ? <Navigate to={primeraRuta} replace /> : <Navigate to="/" replace />}/>
        {AD_ROUTES.map(r =>
          hasAny(roles, r.required) ? (
            <Route key={r.path} path={r.path} element={r.element} />
          ) : null
        )}
        <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  )
}