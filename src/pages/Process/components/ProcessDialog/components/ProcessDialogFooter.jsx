import React from 'react'
import { dialogFooterTypo, dialogfooterButtons, buttonRadius } from 'styles/processDialog'
import { Box, Typography, Button } from '@mui/material'
import { dialogFoorter } from 'styles/processDialog'

const ProcessDialogFooter = () => {
    return (
        <Box sx = {dialogFoorter}>
            <Typography variant = 'body2' sx = {dialogFooterTypo}>
                Fase ID: 123123i214y12312ui3
            </Typography>
            <Box sx = {dialogfooterButtons}>
                <Button variant = 'outlined' sx = {buttonRadius}>
                    Cancel
                </Button>
                <Button color = 'secondary' variant = 'contained' sx = {buttonRadius}>
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default ProcessDialogFooter