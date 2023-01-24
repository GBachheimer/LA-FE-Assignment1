import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const SettingsDrawerHeader = ({toggleSettingsDrawer}) => {
  return (
    <Box display = "flex" justifyContent = "space-between">
        <Typography variant = "h5" mt = {2} ml = {2}>
            Settings
        </Typography>
        <IconButton onClick = {toggleSettingsDrawer} sx = {{marginRight: 2, marginTop: 1}}>
            <CloseIcon />
        </IconButton>
    </Box>
  )
}

export default SettingsDrawerHeader