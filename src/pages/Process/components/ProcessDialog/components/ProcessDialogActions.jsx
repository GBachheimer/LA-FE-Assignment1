import React from 'react'
import { Box, Divider, IconButton, Button } from '@mui/material'
import { processDialogActions } from 'api/data'
import Close from 'assets/svg/processDialogActions/Close'
import Eye from 'assets/svg/processDialogActions/Eye'

const ProcessDialogActions = ({toggleTableCardDialog}) => {
    return (
        <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
            <Button startIcon = {<Eye/>} color = 'warning' size = 'small'>
                KO Motivation
            </Button>
            {processDialogActions.map(icon => <IconButton>{icon}</IconButton>)}
            <Divider orientation = 'vertical' flexItem sx = {{marginLeft: '10px', marginRight: '10px'}}/>
            <IconButton onClick = {toggleTableCardDialog}>
                <Close />
            </IconButton>
        </Box>
    )
}

export default ProcessDialogActions