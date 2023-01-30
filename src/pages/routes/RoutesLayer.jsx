import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { freeRoutes, protectedRoutes } from './routes'
import { AuthProvider } from 'contexts/AuthContext'
import PrivateRoute from './PrivateRoute'

const RoutesLayer = () => {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                {freeRoutes.map((route, key) => {
                    return <Route path = {route.path} element = {route.component} key = {key} />;
                })}
                <Route element = {<PrivateRoute />} >
                    {protectedRoutes.map((route, key) => {
                        return <Route path = {route.path} element = {route.component} key = {key} />;
                    })}
                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default RoutesLayer