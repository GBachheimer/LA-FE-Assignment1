import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const SettingsDrawerHeader = ({toggleSettingsDrawer}) => {
  return (
    <Box display = 'flex' justifyContent = 'space-between' position = 'fixed'>
        <Typography variant = 'h5' sx = {{position: 'fixed', left: 50, top: 70}}>
            Settings
        </Typography>
        <IconButton onClick = {toggleSettingsDrawer} sx = {{position: 'fixed', top: 70, right: 50}}>
            <CloseIcon />
        </IconButton>
    </Box>
  )
}

export default SettingsDrawerHeader