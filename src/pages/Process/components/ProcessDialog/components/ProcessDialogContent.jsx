import React, { useState } from 'react'
import { dialogContent } from 'styles/processDialog'
import { Box, Divider } from '@mui/material'
import ProcessDialogLeft from './ProcessDialogLeft'
import ProcessDialogRight from './ProcessDialogRight'
import ProcessDialogTabBar from './ProcessDialogTabBar'

const ProcessDialogContent = ({processDialogData}) => {
    const [menuValue, setMenuValue] = useState(0);
  
    const handleMenuValue = (event, newValue) => {
        setMenuValue(newValue);
    };

    return (
        <Box sx = {dialogContent}>
            <ProcessDialogLeft processDialogData = {processDialogData}/>
            <Divider orientation = 'vertical' />
            <ProcessDialogRight menuValue = {menuValue}/>
            <Divider orientation = 'vertical' />
            <ProcessDialogTabBar handleMenuValue = {handleMenuValue} menuValue = {menuValue}/>
        </Box>
    )
}

export default ProcessDialogContent