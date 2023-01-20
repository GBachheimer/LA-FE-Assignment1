import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';
import Login from './routes/Login/Login';
import Signup from './routes/Signup/Signup';
import Process from './routes/Process/Process';
import Workspace from './routes/Workspace/Workspace';
import ResetPassword from './routes/ResetPassword/ResetPassword';
import PageNotFound from './routes/PageNotFound/PageNotFound';
import theme from "./components/theme";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        {/* <MenuDrawer /> */}
        <Routes>
          <Route path = "/signup" element = { <Signup /> } />
          <Route path = "/login" element = { <Login /> } />
          <Route path = "/resetPassword" element = { <ResetPassword /> } />
          <Route path = "/workspace" element = { <Workspace /> } />
          <Route path = "/process" element = { <Process /> } />
          <Route path= "*" element = { <PageNotFound /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
