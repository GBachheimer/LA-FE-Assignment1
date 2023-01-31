import React from 'react'
import { dialogActionsContainer, dialogActionsDivider } from 'styles/processDialog'
import { Box, Divider, IconButton, Button } from '@mui/material'
import { processDialogActions } from 'data/data'
import Close from 'assets/svg/processDialogActions/Close'
import Eye from 'assets/svg/processDialogActions/Eye'

const ProcessDialogActions = ({toggleTableCardDialog}) => {
    return (
        <Box sx = {dialogActionsContainer}>
            <Button startIcon = {<Eye/>} color = 'warning' size = 'small'>
                KO Motivation
            </Button>
            {processDialogActions.map(icon => <IconButton>{icon}</IconButton>)}
            <Divider orientation = 'vertical' flexItem sx = {dialogActionsDivider}/>
            <IconButton onClick = {toggleTableCardDialog}>
                <Close />
            </IconButton>
        </Box>
    )
}

export default ProcessDialogActions