import { Box } from '@mui/material'
import React from 'react'

const IntroTriangle = () => {
  return (
    <Box sx = {{position: "absolute"}} right = "-20%">
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M222.917 1.39482C237.788 -2.58995 251.396 11.0183 247.412 25.8897L191.824 233.346C187.839 248.217 169.25 253.198 158.363 242.312L6.49486 90.4432C-4.39176 79.5565 0.589225 60.9673 15.4606 56.9825L222.917 1.39482Z" fill="#00C3F9"/>
      </svg>
    </Box>
  )
}

export default IntroTriangle