import React from 'react'
import { accordion, accordionSummury, line1Item1, accTypoBox, accChildrenBox, accTypo } from 'styles/processDialog'
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Arrow from 'assets/svg/Arrow'
import Arrow2 from 'assets/svg/Arrow2'

const PhaseAccordion = ({label, children}) => {
  return (
    <Accordion sx = {accordion} elevation = {0}>
        <AccordionSummary expandIcon = {<ExpandMore />} sx = {accordionSummury}>   
            <Box sx = {line1Item1}>
                { label !== 'Start' ? <><Arrow /><Arrow /></> : <Arrow2/>}
                <Typography sx = {accTypo}>
                    <Box sx = {accTypoBox}>{label}</Box>
                </Typography>
            </Box>
        </AccordionSummary>
        <Box sx = {accChildrenBox}>
            {children}
        </Box>
    </Accordion>
  )
}

export default PhaseAccordion