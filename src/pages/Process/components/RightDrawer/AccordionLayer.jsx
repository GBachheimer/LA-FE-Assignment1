import React from 'react'
import { Accordion, AccordionSummary, Typography, Box  } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import RightDrawerAccordion from './RightDrawerAccordion'

const AccordionLayer = ({object, name}) => {
  return (
    <Accordion sx = {{marginTop: '1vh', marginBottom: '1vh'}} elevation = {0}>
        <AccordionSummary
            expandIcon = {<ExpandMoreIcon />}
        >   
            <Box display = 'flex' alignItems = 'center'>
                <ShoppingBagOutlinedIcon color = 'warning'/>
                <Typography sx = {{marginLeft: 2, fontWeight: 'bold'}}>
                    <Box sx={{ textTransform: 'capitalize', m: 1 }}>{name}</Box>
                </Typography>
            </Box>
        </AccordionSummary>
        {Object.entries(object).map((deepUserDetail) => {
            if (typeof(deepUserDetail[1]) === 'object') {
                return <RightDrawerAccordion user = {object}/>
            }
            return <FormTextField label = {deepUserDetail[0]} value = {deepUserDetail[1]} />
        })}
    </Accordion>
  )
}

export default AccordionLayer