import React, { useContext } from 'react'
import { useState } from 'react'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/components/FormTextField'
import { auth } from '../../../config/firebase/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { SnackbarContext } from '../../../contexts/SnackbarContext'
import EmailSentSVG from '../../../resources/svg/EmailSent'

const ResetPasswordStep1 = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState();
  const {openSnackBar, handleMessage, handleSeverity} = useContext(SnackbarContext);

  const handleResetPass = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login'
    })
    .then(() => {
        handleMessage("Password reset email sent!");
        handleSeverity("success");
        openSnackBar();
        setDone(true);
    })
    .catch((error) => {
        const errorCode = error.code;
        handleMessage("Something went wrong!");
        if(errorCode === "auth/missing-email" || errorCode === "auth/invalid-email" || errorCode === "auth/user-not-found") {
            handleMessage("Please provide a valid email address!");
        };
        handleSeverity("error");
        openSnackBar();
    });
};

  return (
    <>
      {!done && 
        <FormTemplate
          title = "Do you forgot your password?"
          subtitle = "Insert your email and we will send you a link in your email box to reset your password"
          buttonColor = "warning"
          buttonText = "Reset password"
          buttonAction = {handleResetPass}
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
      }
      {done && 
        <FormTemplate 
          title = "Email was sent!"
          subtitle = {
            `Check your email inbox.
            We sent you an email to edit your password. if you didn't received the email, please check your SPAM inbox.`
          }
        >
          <EmailSentSVG />
        </FormTemplate>
      }
    </>
  )
}

export default ResetPasswordStep1