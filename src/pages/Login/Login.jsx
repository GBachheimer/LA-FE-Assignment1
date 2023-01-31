import React from 'react'
import { Grid } from '@mui/material'
import LoginForm from './components/LoginForm'
import IntroPage from 'components/IntroPage'
import theme from 'styles/theme'

const Login = () => {
  return (
    <Grid container columns = {12} spacing = {0}>
      <LoginForm />
      <IntroPage color = {theme.palette.introBackground.primary} />
    </Grid>
  )
}

export default Login