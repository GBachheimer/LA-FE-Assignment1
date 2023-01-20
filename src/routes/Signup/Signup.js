import React, { useState } from 'react'
import IntroPage from '../../components/IntroPage/IntroPage'
import SignupFormStep1 from './components/SignupFormStep1'
import { Grid } from '@mui/material'
import SignupFormStep2 from './components/SignupFormStep2'
import theme from '../../components/theme'
import { SnackbarContext } from '../../contexts/SnackbarContext'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth' 
import { useContext } from 'react'                 
import { auth } from '../../config/firebase/firebase'              

const Signup = ({step, actionCode}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [termsAgrement, setTermsAgrement] = useState(false);
  const [adsAgrement, setAdsAgrement] = useState(false);
  const [done, setDone] = useState();
  const [workspace, setWorkspace] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const { openSnackBar, handleMessage, handleSeverity } = useContext(SnackbarContext);

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== repeatPass) {
      handleMessage("Wrong confirmation password!");
      handleSeverity("error");
      openSnackBar();
      return;
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
          if (userCredentials.user) {
              resendVerificationEmail();
          };
      })
      .then(() => {
          handleMessage("Please verify your email address before login!");
          handleSeverity("success");
          openSnackBar();
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " | " + errorMessage);
          if(errorCode === "auth/invalid-email" || errorCode === "auth/missing-email") {
              handleMessage("Please provide a valid email address!");
          } else if (errorCode === "auth/email-already-in-use") {
              handleMessage("This email is already assigned to another account. If you are the owner please login!");
          } else if (errorCode === "auth/weak-password") {
              handleMessage("Please provide a strong password!");
          } else if (errorCode === "auth/internal-error") {
              handleMessage("Please provide a password!");
          } else {
              handleMessage("There was a problem, please try again!");
          };
          handleSeverity("error");
          openSnackBar();
      });
    };

    const resendVerificationEmail = () => {
      sendEmailVerification(auth.currentUser, {
        url: 'http://localhost:3000/signup/2'
      })
      .then(() => {
        setDone(true);
      })
      .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/too-many-requests") {
              handleMessage("Previous email is still valid. Search in spam/junk folder or try again later.");
          } else if (errorCode === undefined) {
              handleMessage("Create an account first!");
          };
          handleSeverity("warning");
          openSnackBar();
      });
  };

  return (
    <Grid container columns = {12} spacing = {0}>
      { step === "1" ? 
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
          handleSignup = {handleSignup}
          done = {done}
        /> 
        : 
        <SignupFormStep2 
          name = {name}
          handleName = {(event) => setName(event.target.value)}
          surname = {surname}
          handleSurname = {(event) => setSurname(event.target.value)}
          workspace = {workspace}
          handleWorkspace = {(event) => setWorkspace(event.target.value)}
          actionCode = {actionCode}
        /> }
      <IntroPage 
        color = {theme.palette.introBackground.secondary}
      />
    </Grid>
  )
}

export default Signup