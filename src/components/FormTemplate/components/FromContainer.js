import React from 'react'
import { Grid } from '@mui/material'
import CoralyLogo from '../../../resources/svg/CoralyLogo'

const FromContainer = ({children}) => {
    return (
        <Grid item xs = {5} sx = {{height: "100vh", padding: "8%"}}>
            <CoralyLogo width = "100" height = "100"/>
            {children}
        </Grid>
    )
}

export default FromContainer