import { Box } from '@mui/material'
import React from 'react'

const IntroCircle = () => {
  return (
    <Box sx = {{position: "absolute"}} top = "-10%" left = "-10%">
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="150" fill="#F93E6C"/>
      </svg>
    </Box>
  )
}

export default IntroCircle