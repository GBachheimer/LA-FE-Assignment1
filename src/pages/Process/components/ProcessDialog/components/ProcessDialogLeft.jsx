import React from 'react'
import { Box } from '@mui/material'
import { dialogLeft } from 'styles/processDialog'
import DialogLeftContent from './DialogLeftContent'
import DialogLeftTopBar from './DialogLeftTopBar'

const ProcessDialogLeft = ({processDialogData}) => {
    return (
        <Box sx = {dialogLeft}>
            <DialogLeftTopBar />
            <DialogLeftContent processDialogData = {processDialogData}/>
        </Box>
    )
}

export default ProcessDialogLeft