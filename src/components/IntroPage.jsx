import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import IntroSemiCircle from 'assets/svg/shapes/IntroSemiCircle'
import IntroTriangle from 'assets/svg/shapes/IntroTriangle'
import IntroCircle from 'assets/svg/shapes/IntroCircle'
import IntroBar from 'assets/svg/shapes/IntroBar'
import DotPattern from 'assets/svg/DotPattern'
import { gridContainer, text, box } from 'styles/introPage'

const IntroPage = ({color}) => {
  return (
    <Grid container item xs = {7} sx = {gridContainer(color)}>
        <Typography variant = 'h4' style = {text}>
            Get started with Coraly now and improve your workflow
        </Typography>
        <Box sx = {box}>
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