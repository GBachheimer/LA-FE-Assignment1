import React, { useContext, useState } from 'react'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from 'api/auth/handleLogin'
import { Grid } from '@mui/material'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import FormChecks from 'components/FormTemplate/components/FormChecks'
import FormTemplate from 'components/FormTemplate/FormTemplate'
import CustomTypography from 'components/CustomTypography'
import CustomLink from 'components/CustomLink'

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);
  const navigate = useNavigate();

  return (
      <FormTemplate
        title = 'Log in'
        subtitle = 'Thanks to come back on Coraly'
        buttonColor = 'primary'
        buttonText = 'Log in'
        buttonAction = {() => handleLogin(handleMessage, handleSeverity, openSnackBar, email, password, navigate)}
        footerText = "Don't you have an account ?"
        footerLink = '/signup'
        footerLinkText = ' Sign up now'
      >
        <FormTextField 
          label = 'Email'
          value = {email}
          onChangeHandler = {(event) => setEmail(event.target.value)}
        />
        <FormTextField 
          label = 'Password'
          value = {password}
          onChangeHandler = {(event) => setPassword(event.target.value)}
          type = 'password'
        />
        <FormChecks
          checkText = 'Remember me'
          checked = {rememberMe}
          handleChange = {() => setRememberMe(!rememberMe)}
        >
          <Grid sx = {{marginLeft: 'auto'}}>
            <CustomTypography variant = 'body2'>
                <CustomLink to = '/resetPassword' style = {{alignText: 'right'}}>
                Forgot password
                </CustomLink>
            </CustomTypography>
          </Grid>
        </FormChecks>
      </FormTemplate>
  )
}

export default LoginForm
