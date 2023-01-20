import React from 'react'
import { useState } from 'react'
import FromContainer from '../../../components/FormTemplate/FromContainer'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/FormTextField'
import theme from '../../../components/theme'

const ResetPasswordStep1 = () => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState();
  const [severity, setSeverity] = useState("info");
  const [email, setEmail] = useState("");

  const handleSnackBar = () => {
    setOpen(false);
  }

  return (
    <FromContainer
      snackbarMessage = {message}
      snackbarOpen = {open}
      snackbarSeverity = {severity}
      handleSnackBar = {handleSnackBar}
    >
      <FormTemplate
        title = "Do you forgot your password?"
        subtitle = "Insert your email and we will send you a link in your email box to reset your password"
        buttonColor = "warning"
        buttonText = "Reset password"
        buttonAction = {() => setOpen(false)}
        footerText = "Go back to"
        footerLink = "/login"
        footerLinkText = " login"
      >
        <FormTextField 
          label = "Email"
          value = {email}
          onChangeHandler = {(event) => setEmail(event.target.value)}
        />
      </FormTemplate>
    </FromContainer>
  )
}

export default ResetPasswordStep1