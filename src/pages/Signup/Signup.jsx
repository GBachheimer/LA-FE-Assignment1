import React, { useState, useContext } from 'react'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { handleSignup } from 'api/handleSignup'        
import { Grid } from '@mui/material'
import SignupFormStep1 from './components/SignupFormStep1'
import SignupFormStep2 from './components/SignupFormStep2'
import applyActionCode from 'api/applyActionCode'
import IntroPage from 'components/IntroPage'
import theme from 'styles/theme'

const Signup = ({step, actionCode}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [termsAgrement, setTermsAgrement] = useState(false);
  const [adsAgrement, setAdsAgrement] = useState(false);
  const [done, setDone] = useState();
  const [workspace, setWorkspace] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const { openSnackBar, handleMessage, handleSeverity } = useContext(SnackbarContext);

  const SignUpFormStep2 = applyActionCode(<SignupFormStep2 actionCode = {actionCode}/>);

  return (
    <Grid container columns = {12} spacing = {0}>
      { step === '1' ? 
        <SignupFormStep1
          email = {email}
          handleEmail = {(event) => setEmail(event.target.value)}
          password = {password}
          handlePassword = {(event) => setPassword(event.target.value)}
          repeatPass = {repeatPass}
          handleRepeatPass = {(event) => setRepeatPass(event.target.value) }
          termsAgrement = {termsAgrement}
          handleTermsAgrement = {() => setTermsAgrement(!termsAgrement)}
          adsAgrement = {adsAgrement}
          handleAdsAgrement = {() => setAdsAgrement(!adsAgrement)}
          handleSignup = {() => handleSignup(handleMessage, handleSeverity, openSnackBar, email, password, repeatPass, setDone)}
          done = {done}
        /> 
        : 
        <SignUpFormStep2 
          name = {name}
          handleName = {(event) => setName(event.target.value)}
          surname = {surname}
          handleSurname = {(event) => setSurname(event.target.value)}
          workspace = {workspace}
          handleWorkspace = {(event) => setWorkspace(event.target.value)}
        /> }
      <IntroPage 
        color = {theme.palette.introBackground.secondary}
      />
    </Grid>
  )
}

export default Signup