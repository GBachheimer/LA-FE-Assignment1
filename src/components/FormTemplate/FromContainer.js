import React from 'react'
import { Grid } from '@mui/material'
import CoralyLogo from '../../resources/svg/CoralyLogo'
import SnackbarTemplate from '../SnackbarTemplate/SnackbarTemplate'

const FromContainer = ({children, snackbarSeverity, handleSnackBar, snackbarOpen, snackbarMessage}) => {
    return (
        <Grid item xs = {5} sx = {{height: "100vh", padding: "8%"}}>
            <CoralyLogo />
            {children}
            <SnackbarTemplate 
                severity = {snackbarSeverity} 
                handleSnackBar = {handleSnackBar} 
                open = {snackbarOpen} 
                message = {snackbarMessage} 
            />
        </Grid>
    )
}

export default FromContainer