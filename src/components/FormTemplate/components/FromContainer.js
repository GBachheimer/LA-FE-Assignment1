import React from 'react'
import { Grid } from '@mui/material'
import CoralyLogo from '../../../resources/svg/CoralyLogo'

const FromContainer = ({children}) => {
    return (
        <Grid item xs = {5} sx = {{height: "100vh", padding: "8%"}}>
            <CoralyLogo />
            {children}
        </Grid>
    )
}

export default FromContainer