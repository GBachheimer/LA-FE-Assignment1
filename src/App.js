import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login/Login';
import Signup from './routes/Signup/Signup';
import Process from './routes/Process/Process';
import Workspace from './routes/Workspace/Workspace';
import ResetPassword from './routes/ResetPassword/ResetPassword';
import PageNotFound from './routes/PageNotFound/PageNotFound';
import theme from "./styles/theme";
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { AuthProvider } from './contexts/AuthContext';
import EmailRedirect from './components/EmailRedirect';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {

  return (
    <AuthProvider>
      <ThemeProvider theme = { theme }>
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route path = "/signup" element = { <Signup step = "1"/> } />
              <Route path = "/login" element = { <Login /> } />
              <Route path = "/resetPassword" element = { <ResetPassword step = "1"/> } />
              <Route path = "/handleEmail" element = { < EmailRedirect />} />
              <Route element = {<PrivateRoute/>}>
                <Route path = "/workspace" element = { <Workspace /> } />
                <Route path = "/workspace/:process" element = { <Process /> } />
              </Route>
              <Route path = "*" element = { <PageNotFound /> } />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
