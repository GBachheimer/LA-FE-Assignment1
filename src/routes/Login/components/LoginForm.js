import React from 'react'
import { useState } from 'react'
import { Grid } from '@mui/material'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/FormTextField'
import FormChecks from '../../../components/FormTemplate/FormChecks'
import CustomLink from '../../../components/CustomLink'
import CustomTypography from '../../../components/CustomTypography'
import FromContainer from '../../../components/FormTemplate/FromContainer'
import theme from '../../../components/theme'

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState();
  const [severity, setSeverity] = useState("info");
  
  const handleSnackBar = () => {
      setOpen(false);
  };

  return (
    <FromContainer
      snackbarMessage = {message}
      snackbarOpen = {open}
      snackbarSeverity = {severity}
      handleSnackBar = {handleSnackBar}
    >
      <FormTemplate
        title = "Log in"
        subtitle = "Thanks to come back on Coraly"
        buttonColor = "primary"
        buttonText = "Log in"
        buttonAction = {() => setOpen(false)}
        footerText = "Don't you have an account ?"
        footerLink = "/signup"
        footerLinkText = " Sign up now"
      >
        <FormTextField 
          label = "Email"
          value = {email}
          onChangeHandler = {(event) => setEmail(event.target.value)}
        />
        <FormTextField 
          label = "Password"
          value = {password}
          onChangeHandler = {(event) => setPassword(event.target.value)}
          type = "password"
        />
        <FormChecks
          checkText = "Remember me"
          checked = {checked}
          handleChange = {() => setChecked(!checked)}
        >
          <Grid sx = {{marginLeft: "auto"}}>
            <CustomTypography variant = "body2">
                <CustomLink to = "/resetPassword" style = {{alignText: "right"}}>
                Forgot password
                </CustomLink>
            </CustomTypography>
          </Grid>
        </FormChecks>
      </FormTemplate>
    </FromContainer>
  )
}

export default LoginForm
