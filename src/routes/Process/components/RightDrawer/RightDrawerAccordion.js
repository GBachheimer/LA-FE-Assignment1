import { AccordionSummary, Accordion, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import FormTextField from '../../../../components/FormTemplate/components/FormTextField';
import { info } from '../../../../data/data';

const RightDrawerAccordion = ({icon, cathegory}) => {
    
  return (
    <Accordion>
        <AccordionSummary
            expandIcon = {<ExpandMoreIcon />}
            aria-controls = "panel1a-content"
            id = "panel1a-header"
        >   
        <Box display = "flex" alignItems = "center">
            {icon}
            <Typography sx = {{marginLeft: 2}}>
                {cathegory}
            </Typography>
        </Box>
        </AccordionSummary>
        {info.map((labelName) => {
            return <FormTextField label = {labelName}/>
        })}
    </Accordion>
  )
}

export default RightDrawerAccordion