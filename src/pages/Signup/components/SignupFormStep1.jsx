import React from 'react'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import FormChecks from 'components/FormTemplate/components/FormChecks'
import FormTemplate from 'components/FormTemplate/FormTemplate'
import CustomTypography from 'components/CustomTypography'
import EmailSentSVG from 'assets/svg/EmailSent'
import CustomLink from 'components/CustomLink'

const SignupFormStep1 = (props) => {

  return (
    <>
      {!props.done && 
        <FormTemplate
          title = 'Create your account'
          subtitle = 'Coraly is the tool to manage your work processes from the same place'
          buttonColor = 'success'
          buttonText = 'Create account'
          buttonAction = {props.handleSignup}
          footerText = 'Do you have an account ?'
          footerLink = '/login'
          footerLinkText = ' Sign in'
        >
          <FormTextField 
            label = 'Email'
            value = {props.email}
            onChangeHandler = {props.handleEmail}
          />
          <FormTextField 
            label = 'Password'
            value = {props.password}
            onChangeHandler = {props.handlePassword}
            type = 'password'
          />
          <FormTextField 
            label = 'Confirm password'
            value = {props.repeatPass}
            onChangeHandler = {props.handleRepeatPass}
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
            checked = {props.termsAgrement}
            handleChange = {props.handleTermsAgrement}
          />
          <FormChecks
            checkText = 'I authorize Coraly to process my personal data in order to receive informational, promotional and comercial communications via e-mail.'
            checked = {props.adsAgrement}
            handleChange = {props.handleAdsAgrement}
          />
        </FormTemplate>
      }
      {props.done && 
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