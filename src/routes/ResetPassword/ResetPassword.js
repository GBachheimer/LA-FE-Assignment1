import React from 'react'
import { Grid } from '@mui/material'
import theme from '../../components/theme'
import ResetPasswordStep1 from './components/ResetPasswordStep1'
import ResetPasswordStep2 from './components/ResetPasswordStep2'
import IntroPage from '../../components/IntroPage/IntroPage'

const ResetPassword = ({step, actionCode}) => {

  return (
    <Grid container columns = {12} spacing = {0}>
      { step === "1" ? <ResetPasswordStep1 /> : <ResetPasswordStep2 actionCode = {actionCode} /> }
      <IntroPage 
        color = {theme.palette.introBackground.regular}
      />
    </Grid>
  )
}

export default ResetPassword