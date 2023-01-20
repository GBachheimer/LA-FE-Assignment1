import React from 'react'
import { Box } from '@mui/system'

const IntroBar = () => {
  return (
    <Box sx = {{position: "absolute"}} bottom = "-15%" right = "-3%">
      <svg width="350" height="300" viewBox="0 0 350 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="150" width="320" height="100" rx="50" transform="rotate(-15 -13 82.0459)" fill="#2CCFBC"/>
      </svg>
    </Box>
  )
}

export default IntroBar