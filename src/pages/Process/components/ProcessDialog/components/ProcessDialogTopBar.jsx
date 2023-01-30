import React from 'react'
import { Box, Typography } from '@mui/material'
import ProcessDialogActions from './ProcessDialogActions'

const ProcessDialogTopBar = ({toggleTableCardDialog}) => {
    return (
        <Box style = {{width: '97%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '2%', marginTop: '1%', marginBottom: '1%'}}>
            <Typography variant = 'h5'>
                Email
            </Typography>
            <ProcessDialogActions toggleTableCardDialog = {toggleTableCardDialog}/>
        </Box>
    )
}

export default ProcessDialogTopBar