import PageNotFound from 'pages/PageNotFound/PageNotFound'
import ResetPassword from 'pages/ResetPassword/ResetPassword'
import Workspace from 'pages/Workspace/Workspace'
import EmailRedirect from './EmailRedirect'
import Process from 'pages/Process/Process'
import Signup from 'pages/Signup/Signup'
import Login from 'pages/Login/Login'

export const freeRoutes = [
    { path: '/signup', component: <Signup step = '1' /> },
    { path: '/login', component: <Login step = '1' /> },
    { path: '/resetPassword', component: <ResetPassword step = '1' /> },
    { path: '/handleEmail', component: <EmailRedirect /> },
    { path: '*', component: <PageNotFound /> },
];

export const protectedRoutes = [
    { path: '/workspace', component: <Workspace /> },
    { path: '/workspace/:process', component: <Process /> },
]
