import {Box, Button } from '@mui/material'
import React from 'react'
import CustomTypography from '../CustomTypography'
import CustomLink from '../CustomLink'
import FormHeader from './components/FormHeader'
import FromContainer from './components/FromContainer'
import { useState } from 'react'

const FormTemplate = ({title, subtitle, buttonColor, buttonAction, buttonText, footerLink, footerLinkText, footerText, children}) => {

  return (
    <FromContainer>
      <FormHeader title = {title} subtitle = {subtitle} />
      {children}
      {buttonAction && <Button 
        variant = "contained"
        color = {buttonColor}
        onClick = {buttonAction}
        sx = {{
          width: "100%", 
          marginTop: "2vh", 
          marginBottom: "2vh", 
          borderRadius: 3,
          color: "white" 
        }}
      >
        {buttonText}
      </Button>}
      <CustomTypography variant = "body2" style = {{marginTop: "2vh"}}>
        {footerText} 
        <CustomLink to = {footerLink} style = {{alignText: "right"}}> 
          {footerLinkText}
        </CustomLink>
      </CustomTypography>
    </FromContainer>
  )
}

export default FormTemplate