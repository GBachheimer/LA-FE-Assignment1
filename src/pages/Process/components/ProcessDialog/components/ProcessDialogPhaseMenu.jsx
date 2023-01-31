import React from 'react'
import { phaseMenuContainer } from 'styles/processDialog'
import { Box, Typography } from '@mui/material'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import PhaseAccordion from './PhaseAccordion'

const ProcessDialogPhaseMenu = () => {
    return (
        <Box sx = {phaseMenuContainer}>
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