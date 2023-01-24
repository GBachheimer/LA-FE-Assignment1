import { Box, Typography } from '@mui/material'
import React from 'react'

const SettingsDrawerContent = ({children, value, index, ...other}) => {
  return (
    <div
        role = "tabpanel"
        hidden = {value !== index}
        id = {`full-width-tabpanel-${index}`}
        aria-labelledby = {`full-width-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
  )
}

export default SettingsDrawerContent