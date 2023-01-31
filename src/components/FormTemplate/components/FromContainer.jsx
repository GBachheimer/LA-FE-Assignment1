import React from 'react'
import { formContainer } from 'styles/formTemplate'
import { Grid } from '@mui/material'
import CoralyLogo from 'assets/svg/CoralyLogo'

const FromContainer = ({children}) => {
    return (
        <Grid item xs = {5} sx = {formContainer}>
            <CoralyLogo width = '100' height = '100' centerX = '50'/>
            {children}
        </Grid>
    )
}

export default FromContainer