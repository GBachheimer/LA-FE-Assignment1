import React, { useContext, useState } from 'react'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { handleResetPass } from 'api/handleResetPassword'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import FormTemplate from 'components/FormTemplate/FormTemplate'
import EmailSentSVG from 'assets/svg/EmailSent'

const ResetPasswordStep1 = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState();
  const {openSnackBar, handleMessage, handleSeverity} = useContext(SnackbarContext);

  return (
    <>
      {!done && 
        <FormTemplate
          title = 'Do you forgot your password?'
          subtitle = 'Insert your email and we will send you a link in your email box to reset your password'
          buttonColor = 'warning'
          buttonText = 'Reset password'
          buttonAction = {() => handleResetPass(handleMessage, handleSeverity, openSnackBar, email, setDone)}
          footerText = 'Go back to'
          footerLink = '/login'
          footerLinkText = ' login'
        >
          <FormTextField 
            label = 'Email'
            value = {email}
            onChangeHandler = {(event) => setEmail(event.target.value)}
          />
        </FormTemplate>
      }
      {done && 
        <FormTemplate 
          title = 'Email was sent!'
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