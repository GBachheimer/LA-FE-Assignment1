import React from 'react'
import { Grid, Checkbox, FormControlLabel } from '@mui/material'
import { formChecks } from 'styles/formTemplate'
import CustomTypography from 'components/CustomTypography'

const FormChecks = ({checkText, checked, handleChange, children}) => {
  return (
    <Grid container sx = {formChecks} >
        <Grid>
            <FormControlLabel 
                control = {<Checkbox size = 'small'/>} 
                label = {
                    <CustomTypography variant = 'body1'>
                        {checkText}
                    </CustomTypography>
                }
                checked = {checked}
                onChange = {handleChange}
            />
        </Grid>
        {children}
    </Grid> 
  )
}

export default FormChecks