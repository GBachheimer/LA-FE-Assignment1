import React from 'react'
import { Box, Typography } from '@mui/material'

const SettingsDrawerContent = ({children, value, index, ...other}) => {
  return (
    <div
        role = 'tabpanel'
        hidden = {value !== index}
        id = {`full-width-tabpanel-${index}`}
        aria-labelledby = {`full-width-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box sx = {{ p: 3, width: '80vw' }}>
            <Typography>{children}</Typography>
        </Box>
        )}
    </div>
  )
}

export default SettingsDrawerContent