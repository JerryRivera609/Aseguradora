import {Route,Routes,Navigate} from 'react-router-dom';
import OperacionesLista from '../pages/Operaciones/OperacionesLista';
import ControlVencimiento from '../pages/Operaciones/ControlVencimiento';
import ActualizarPolizas from '../pages/Operaciones/ActualizarPolizas';
import VerificarPolizas from '../pages/Operaciones/VerificarPolizas';
import SiniestrosSeg from '../pages/Operaciones/SiniestrosSeg';
import OperacionesGrafico from '../pages/Operaciones/OperacionesGrafico';
import PlanillasPolizas from '../pages/Operaciones/PlanillasPolizas';
import { useAuth } from '../pages/Login/AuthContext'
import { RouteRoles, hasAny } from '../data/roles'

export default function OperacionesRouter() {
  const {user}= useAuth();
  const roles = user?.roles ?? [];
  const rp= RouteRoles.operaciones;
  
  const OP_ROUTES = [
    { path: 'lista',      element: <OperacionesLista/>,   required: rp.listapolizas },
    { path: 'control',    element: <ControlVencimiento/>, required: rp.vencimiento },
    { path: 'csv',        element: <ActualizarPolizas/>,  required: rp.cargacsv },
    { path: 'verificar',  element: <VerificarPolizas/>,   required: rp.cargacsv },
    { path: 'siniestros', element: <SiniestrosSeg/>,      required: rp.siniestros },
    { path: 'graficos',   element: <OperacionesGrafico/>, required: rp.graficos },
    { path: 'planillas',  element: <PlanillasPolizas/>,   required: rp.planillas },
  ];
  
  const primeraRuta=OP_ROUTES.find(r => hasAny(roles, r.required))?.path;
  return (
    <Routes>
      <Route index element={primeraRuta ? <Navigate to={primeraRuta} replace /> : <Navigate to="/" replace />}/>
       {OP_ROUTES.map(r =>
        hasAny(roles, r.required) ? (
          <Route key={r.path} path={r.path} element={r.element} />
        ) : null
      )}
        <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  )
}
