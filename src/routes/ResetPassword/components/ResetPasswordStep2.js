import React from 'react'
import { useState } from 'react'
import FromContainer from '../../../components/FormTemplate/FromContainer'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/FormTextField'
import SnackbarTemplate from '../../../components/SnackbarTemplate/SnackbarTemplate'
import SignupDone from '../../../resources/svg/SignupDone'
import theme from '../../../components/theme'

const ResetPasswordStep2 = () => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState();
  const [severity, setSeverity] = useState("info");
  const [password, setPassword] = useState("");
  const [corfimPass, setCorfimPass] = useState("");

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
        title = "Insert new password"
        subtitle = "Enter your new password to access the platform"
        buttonColor = "warning"
        buttonText = "Create new password"
        buttonAction = {() => setOpen(false)}
      >
        <FormTextField 
          label = "New password"
          value = {password}
          onChangeHandler = {(event) => setPassword(event.target.value)}
        />
        <FormTextField 
          label = "Confirm new password"
          value = {corfimPass}
          onChangeHandler = {(event) => setCorfimPass(event.target.value)}
        />
      </FormTemplate>
      <SnackbarTemplate 
        severity = {severity} 
        handleSnackBar = {handleSnackBar} 
        open = {open} 
        message = {message} 
      />
    </FromContainer>
  )
}

export default ResetPasswordStep2