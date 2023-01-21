import React, { useContext } from 'react'
import { useState } from 'react'
import { Grid } from '@mui/material'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/components/FormTextField'
import FormChecks from '../../../components/FormTemplate/components/FormChecks'
import CustomLink from '../../../components/CustomLink'
import CustomTypography from '../../../components/CustomTypography'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../../config/firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { SnackbarContext } from '../../../contexts/SnackbarContext'

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          if (!userCredential.user.emailVerified) {
              handleMessage("Please verify your email!");
              handleSeverity("warning");
              openSnackBar();
              signOut(auth);
              return;
          };
          handleMessage("Login successful!");
          handleSeverity("success");
          openSnackBar();
          navigate(`/workspace`);
      })
      .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === "auth/wrong-password") {
              handleMessage("Wrong password!");
          } else if (errorCode === "auth/invalid-email") {
              handleMessage("Wrong email address!");
          } else if (errorCode === "auth/internal-error") {
              handleMessage("Please provide a valid email or password!");
          } else if (errorCode === "auth/user-not-found") {
              handleMessage("This account doesn't exists!");
          } else {
              handleMessage("There was a problem, please try again!");
          }
          handleSeverity("error");
          openSnackBar();
      });

  };

  return (
      <FormTemplate
        title = "Log in"
        subtitle = "Thanks to come back on Coraly"
        buttonColor = "primary"
        buttonText = "Log in"
        buttonAction = {handleLogin}
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
          checked = {rememberMe}
          handleChange = {() => setRememberMe(!rememberMe)}
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
  )
}

export default LoginForm
