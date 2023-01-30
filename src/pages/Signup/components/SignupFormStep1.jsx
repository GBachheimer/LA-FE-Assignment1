import React from 'react'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import FormChecks from 'components/FormTemplate/components/FormChecks'
import FormTemplate from 'components/FormTemplate/FormTemplate'
import CustomTypography from 'components/CustomTypography'
import EmailSentSVG from 'assets/svg/EmailSent'
import CustomLink from 'components/CustomLink'

const SignupFormStep1 = ({password, handlePassword, email, handleEmail, termsAgrement, handleTermsAgrement, adsAgrement, handleAdsAgrement, handleSignup, done, repeatPass, handleRepeatPass}) => {

  return (
    <>
      {!done && 
        <FormTemplate
          title = 'Create your workspace'
          subtitle = 'Coraly is the tool to manage your work processes from the same place'
          buttonColor = 'success'
          buttonText = 'Create account'
          buttonAction = {handleSignup}
          footerText = 'Do you have an account ?'
          footerLink = '/login'
          footerLinkText = ' Sign in'
        >
          <FormTextField 
            label = 'Email'
            value = {email}
            onChangeHandler = {handleEmail}
          />
          <FormTextField 
            label = 'Password'
            value = {password}
            onChangeHandler = {handlePassword}
            type = 'password'
          />
          <FormTextField 
            label = 'Confirm password'
            value = {repeatPass}
            onChangeHandler = {handleRepeatPass}
            type = 'password'
          />
          <FormChecks
            checkText = {
              <CustomTypography>
                Agree with 
                <CustomLink to = '/terms&conditions'> Terms and Conditions </CustomLink>
                ,
                <CustomLink to = '/privacyPolicy'> Privacy Policy </CustomLink>
                and 
                <CustomLink to = '/cookiePolicy'> Cookie Policy</CustomLink>
              </CustomTypography>
            }
            checked = {termsAgrement}
            handleChange = {handleTermsAgrement}
          />
          <FormChecks
            checkText = 'I authorize Coraly to process my personal data in order to receive informational, promotional and comercial communications via e-mail.'
            checked = {adsAgrement}
            handleChange = {handleAdsAgrement}
          />
        </FormTemplate>
      }
      {done && 
        <FormTemplate 
          title = 'Account created'
          subtitle = 'Check your email and confirm your account!'
        >
          <EmailSentSVG />
        </FormTemplate>
      }
    </>
  )
}

export default SignupFormStep1