import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import IntroSemiCircle from 'assets/svg/shapes/IntroSemiCircle'
import IntroTriangle from 'assets/svg/shapes/IntroTriangle'
import IntroCircle from 'assets/svg/shapes/IntroCircle'
import IntroBar from 'assets/svg/shapes/IntroBar'
import DotPattern from 'assets/svg/DotPattern'
import theme from 'styles/theme'

const IntroPage = ({color}) => {
  return (
    <Grid 
      container item 
      xs = {7} 
      sx = {{
        textAlign: 'center', 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: color
      }}
    >
        <Typography 
            variant = 'h4' 
            style = {{
            position: 'absolute', 
            marginTop: '39%', 
            marginLeft: '25%',
            marginRight: '15%',
            zIndex: 2, 
            textAlign: 'left', 
            color: theme.palette.text.primary
            }}
        >
            Get started with Coraly now and improve your workflow
        </Typography>
        <Box sx = {{position: 'absolute', width: '100%', height: '100%', zIndex: 1}}>
            <IntroCircle />
            <IntroSemiCircle />
            <IntroTriangle />
            <IntroBar />
        </Box>
        <DotPattern />
    </Grid>
  )
}

export default IntroPage