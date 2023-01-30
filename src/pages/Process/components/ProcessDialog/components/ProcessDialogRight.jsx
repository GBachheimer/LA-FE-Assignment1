import React from 'react'
import { Box, Typography } from '@mui/material'
import PhaseAccordion from './PhaseAccordion'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import ProcessDialogPhaseMenu from './ProcessDialogPhaseMenu'

const ProcessDialogRight = ({menuValue}) => {
    return (
        <Box sx = {{width: '48%', height: '100%', overflow: 'scroll'}}>
            {menuValue === 1 && <ProcessDialogPhaseMenu/>}
        </Box>
    )
}

export default ProcessDialogRight
