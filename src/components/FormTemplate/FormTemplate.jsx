import React from 'react'
import {formTemplateButton, customTypography, customLink} from 'styles/formTemplate'
import { CssBaseline } from '@mui/material';
import { Button } from '@mui/material'
import CustomTypography from 'components/CustomTypography'
import FromContainer from './components/FromContainer'
import FormHeader from './components/FormHeader'
import CustomLink from 'components/CustomLink'

const FormTemplate = (props) => {

  return (
    <FromContainer>
      <CssBaseline/>
      <FormHeader title = {props.title} subtitle = {props.subtitle} />
        {props.children}
        {props.buttonAction && <Button 
          variant = "contained"
          color = {props.buttonColor}
          onClick = {props.buttonAction}
          sx = {formTemplateButton}
        >
          {props.buttonText}
        </Button>}
      <CustomTypography variant = "body2" style = {customTypography}>
        {props.footerText} 
        <CustomLink to = {props.footerLink} style = {customLink}> 
          {props.footerLinkText}
        </CustomLink>
      </CustomTypography>
    </FromContainer>
  )
}

export default FormTemplate