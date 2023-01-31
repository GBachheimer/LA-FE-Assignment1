import React from 'react'
import { dialogRight } from 'styles/processDialog'
import { Box } from '@mui/material'
import ProcessDialogPhaseMenu from './ProcessDialogPhaseMenu'

const ProcessDialogRight = ({menuValue}) => {
    return (
        <Box sx = {dialogRight}>
            {menuValue === 1 && <ProcessDialogPhaseMenu/>}
        </Box>
    )
}

export default ProcessDialogRight
