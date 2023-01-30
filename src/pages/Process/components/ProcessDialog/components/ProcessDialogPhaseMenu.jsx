import React from 'react'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import { Box, Typography } from '@mui/material'
import PhaseAccordion from './PhaseAccordion'

const ProcessDialogPhaseMenu = () => {
    return (
        <Box sx = {{width: '95%', margin: 'auto'}}>
            <Typography variant = 'body2'>Field's Phase</Typography>
            <PhaseAccordion label = 'Phase 2'>
                <FormTextField label = "Contract Number" />
                <FormTextField label = "Contract Number 2" />
            </PhaseAccordion>
            <PhaseAccordion label = 'New contract'>
                <FormTextField label = "Start date"/>
            </PhaseAccordion>
            <PhaseAccordion label = 'Start'>
                <FormTextField label = "Contract Number" />
                <FormTextField label = "Contract Number 2" />
            </PhaseAccordion>
        </Box>
    )
}

export default ProcessDialogPhaseMenu