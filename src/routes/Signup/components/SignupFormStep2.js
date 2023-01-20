import React from 'react'
import { useState } from 'react'
import FromContainer from '../../../components/FormTemplate/FromContainer'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/FormTextField'
import theme from '../../../components/theme'

const SignupFormStep2 = () => {
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState();
    const [severity, setSeverity] = useState("info");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
  
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
        title = "Complete your profile"
        subtitle = "Insert all your info to procced with your workspace"
        buttonColor = "success"
        buttonText = "Complete now"
        buttonAction = {() => setOpen(false)}
      >
        <FormTextField 
          label = "Name"
          value = {name}
          onChangeHandler = {(event) => setName(event.target.value)}
        />
        <FormTextField 
          label = "Surname"
          value = {surname}
          onChangeHandler = {(event) => setSurname(event.target.value)}
        />
        <FormTextField 
          label = "Password"
          value = {password}
          onChangeHandler = {(event) => setPassword(event.target.value)}
          type = "password"
        />
        <FormTextField 
          label = "Reapeat password"
          value = {repeatPass}
          onChangeHandler = {(event) => setRepeatPass(event.target.value)}
          type = "password"
        />
      </FormTemplate>
    </FromContainer>
  )
}

export default SignupFormStep2