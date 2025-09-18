import {Route,Routes,Navigate} from 'react-router-dom'
import MenuMain from '../components/MenuMain'

import VentasRouter from './VentasRouter'
import OperacionesRouter from './OperacionesRouter'
import AdministrativoRouter from './AdministrativoRouter'
import Login from '../pages/Login/Login'
import Layout from '../layout/Layout'
import { useAuth } from '../pages/Login/AuthContext'
import { AllRoles, hasAny } from '../data/roles'

export default function MenuRouter() {
  const {isAuthenticated,user}= useAuth();
  const roles = user?.roles ?? [];

  return (
    <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        {isAuthenticated && (
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<MenuMain />} />
          {(hasAny(roles, AllRoles.ventas)||hasAny(roles, AllRoles.colab)) && (
            <Route path="ventas/*" element={<VentasRouter />} />
          )}
          {hasAny(roles, AllRoles.operaciones) && (
            <Route path="operaciones/*" element={<OperacionesRouter />} />
          )}
          {hasAny(roles, AllRoles.administrativo) && (
            <Route path="administrativo/*" element={<AdministrativoRouter />} />
          )}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      )}
      {!isAuthenticated && (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  )
}
