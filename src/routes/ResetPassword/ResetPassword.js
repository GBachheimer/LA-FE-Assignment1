import React from 'react'
import { Grid } from '@mui/material'
import theme from '../../components/theme'
import ResetPasswordStep1 from './components/ResetPasswordStep1'
import ResetPasswordStep2 from './components/ResetPasswordStep2'
import IntroPage from '../../components/IntroPage/IntroPage'

const ResetPassword = () => {
  return (
    <Grid container columns = {12} spacing = {0}>
      <ResetPasswordStep1 />
      <IntroPage 
        color = {theme.palette.introBackground.secondary}
      />
    </Grid>
  )
}

export default ResetPassword