import {Route,Routes,Navigate} from 'react-router-dom'
import PolizaGenerar from '../pages/Ventas/PolizaGenerar'
import PolizaLista from '../pages/Ventas/PolizaLista'
import PolizaGrafico from '../pages/Ventas/PolizaGrafico'
import { useAuth } from '../pages/Login/AuthContext'
import { RouteRoles, hasAny } from '../data/roles'

export default function VentasRouter() {
  const {user}= useAuth();
  const roles = user?.roles ?? [];
  const rv= RouteRoles.ventas;
  const rc= RouteRoles.colab;
  const VENTAS_ROUTES = [
    { path: 'generar',      element: <PolizaGenerar/>, required: rc.colab },
    { path: 'generar',      element: <PolizaGenerar/>, required: rv.generar },
    { path: 'listaPolizas', element: <PolizaLista/>,   required: rv.versoats },
    { path: 'listaPolizas', element: <PolizaLista/>,   required: rc.colab },
    { path: 'graficos',     element: <PolizaGrafico/>, required: rv.graficos },
    { path: 'graficos',     element: <PolizaGrafico/>, required: rc.colab },
  ];

  const primeraRuta=VENTAS_ROUTES.find(r => hasAny(roles, r.required))?.path;
  return (
    <Routes>
      <Route index element={primeraRuta ? <Navigate to={primeraRuta} replace /> : <Navigate to="/" replace />}/>
      {VENTAS_ROUTES.map(r =>
        hasAny(roles, r.required) ? (
          <Route key={r.path} path={r.path} element={r.element} />
        ) : null
      )}
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
