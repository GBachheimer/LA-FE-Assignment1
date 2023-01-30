import { Box } from '@mui/material'
import React from 'react'
import DialogLeftContent from './DialogLeftContent'
import DialogLeftTopBar from './DialogLeftTopBar'

const ProcessDialogLeft = ({processDialogData}) => {
    return (
        <Box sx = {{width: '48%', height: '100%'}}>
            <DialogLeftTopBar />
            <DialogLeftContent processDialogData = {processDialogData}/>
        </Box>
    )
}

export default ProcessDialogLeft