import React from 'react'
import { useState } from 'react'
import CustomLink from '../../../components/CustomLink'
import CustomTypography from '../../../components/CustomTypography'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/FormTextField'
import FormChecks from '../../../components/FormTemplate/FormChecks'
import SignupDone from '../../../resources/svg/SignupDone'
import FromContainer from '../../../components/FormTemplate/FromContainer'
import theme from '../../../components/theme'

const SignupFormStep1 = () => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState();
  const [severity, setSeverity] = useState("info");
  const [workspace, setWorkspace] = useState("");
  const [email, setEmail] = useState("");
  const [termsAgrement, setTermsAgrement] = useState(false);
  const [adsAgrement, setAdsAgrement] = useState(false);

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
        title = "Create your workspace"
        subtitle = "Coraly is the tool to manage your work processes from the same place"
        buttonColor = "success"
        buttonText = "Create account"
        buttonAction = {() => setOpen(false)}
        footerText = "Do you have an account ?"
        footerLink = "/login"
        footerLinkText = " Sign in"
      >
        <FormTextField 
          label = "Workspace name"
          value = {workspace}
          onChangeHandler = {(event) => setWorkspace(event.target.value)}
        />
        <FormTextField 
          label = "Email"
          value = {email}
          onChangeHandler = {(event) => setEmail(event.target.value)}
        />
        <FormChecks
          checkText = {
            <CustomTypography>
              Agree with 
              <CustomLink to = "/terms&conditions"> Terms and Conditions </CustomLink>
              ,
              <CustomLink to = "/privacyPolicy"> Privacy Policy </CustomLink>
              and 
              <CustomLink to = "/cookiePolicy"> Cookie Policy</CustomLink>
            </CustomTypography>
          }
          checked = {termsAgrement}
          handleChange = {() => setTermsAgrement(!termsAgrement)}
        />
        <FormChecks
          checkText = "I authorize Coraly to process my personal data in order to receive informational, promotional and comercial communications via e-mail."
          checked = {adsAgrement}
          handleChange = {() => setAdsAgrement(!adsAgrement)}
        />
      </FormTemplate>
    </FromContainer>
  )
}

export default SignupFormStep1