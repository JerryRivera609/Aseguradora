import {Routes, Route, Navigate } from 'react-router-dom'
import MenuRouter from './MenuRouter';
//Controlar acceso por roles
//PrivateRoutes


function AppRouter(){

    return(
        <Routes>
            {/* <Route path='/login' element={<Login/>}></Route> */}
            <Route path='/*' element={<MenuRouter/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRouter;