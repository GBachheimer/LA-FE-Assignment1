import React, { useState } from 'react'
import IntroPage from '../../components/IntroPage/IntroPage'
import SignupFormStep1 from './components/SignupFormStep1'
import { Grid } from '@mui/material'
import SignupFormStep2 from './components/SignupFormStep2'
import theme from '../../components/theme'

const Signup = () => {
  const [step, setStep] = useState(1);

  return (
    <Grid container columns = {12} spacing = {0}>
      { step === 1 ? <SignupFormStep1 /> : <SignupFormStep2 /> }
      <IntroPage 
        color = {theme.palette.introBackground.regular}
      />
    </Grid>
  )
}

export default Signup