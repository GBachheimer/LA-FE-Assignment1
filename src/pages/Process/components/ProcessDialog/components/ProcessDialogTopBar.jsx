import React from 'react'
import { Box, Typography } from '@mui/material'
import ProcessDialogActions from './ProcessDialogActions'
import { dialogTopBar } from 'styles/processDialog'

const ProcessDialogTopBar = ({toggleTableCardDialog}) => {
    return (
        <Box style = {dialogTopBar}>
            <Typography variant = 'h5'>
                Email
            </Typography>
            <ProcessDialogActions toggleTableCardDialog = {toggleTableCardDialog}/>
        </Box>
    )
}

export default ProcessDialogTopBar