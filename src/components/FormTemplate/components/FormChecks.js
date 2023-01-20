import React from 'react'
import { Grid, Checkbox, FormControlLabel } from '@mui/material'
import CustomTypography from '../../CustomTypography'

const FormChecks = ({checkText, checked, handleChange, children}) => {
  return (
    <Grid container alignItems = "center" mt = {1}>
        <Grid>
            <FormControlLabel 
                control = {<Checkbox size = "small"/>} 
                label = {
                    <CustomTypography variant = "body1">
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