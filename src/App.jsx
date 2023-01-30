import './App.css'
import { SnackbarProvider } from './contexts/SnackbarContext'
import { ThemeProvider } from '@mui/material/styles'
import RoutesLayer from 'pages/routes/RoutesLayer'
import theme from "./styles/theme"

const App = () => {
  return (
    <ThemeProvider theme = { theme }>
      <SnackbarProvider>
        <RoutesLayer />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
