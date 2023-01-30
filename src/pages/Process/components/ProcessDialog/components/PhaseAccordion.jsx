import React from 'react'
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Arrow from 'assets/svg/Arrow'
import Arrow2 from 'assets/svg/Arrow2'

const PhaseAccordion = ({label, children}) => {
  return (
    <Accordion sx = {{marginTop: '1vh', marginBottom: '1vh'}} elevation = {0}>
        <AccordionSummary
            expandIcon = {<ExpandMore />}
            sx={{backgroundColor: '#F6F8FA', borderRadius: '10px', maxHeight: 40}}
        >   
            <Box display = 'flex' alignItems = 'center'>
                { label !== 'Start' ? <><Arrow /><Arrow /></> : <Arrow2/>}
                <Typography sx = {{fontWeight: 'bold'}}>
                    <Box sx={{ textTransform: 'capitalize', m: 1 }}>{label}</Box>
                </Typography>
            </Box>
        </AccordionSummary>
        <Box sx = {{marginLeft: '9%', marginBottom: '2%'}}>
            {children}
        </Box>
    </Accordion>
  )
}

export default PhaseAccordion