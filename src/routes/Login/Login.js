import React from 'react'
import LoginForm from './components/LoginForm'
import CoralyLogo from '../../resources/svg/CoralyLogo'
import IntroPage from '../../components/IntroPage/IntroPage'
import { Grid } from '@mui/material'
import theme from '../../components/theme'

const Login = () => {
  return (
    <Grid container columns = {12} spacing = {0}>
      <LoginForm />
      <IntroPage 
        color = {theme.palette.introBackground.primary}
      />
    </Grid>
  )
}

export default Login