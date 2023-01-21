import React from 'react'
import { Grid, CardContent, Typography, Card } from '@mui/material'
import CardIcon from '../../../resources/svg/CardIcon'

const ProcessCard = ({backgroundColor, processName}) => {
  return (
    <Card sx={{ minWidth: 170, minHeight: 170, marginLeft: "2vh", marginTop: "2vh", backgroundColor: backgroundColor }}>
      <CardContent sx = {{textAlign: "center"}}>
        <CardIcon />
        <Typography sx={{ fontSize: 18, color: "white" }} gutterBottom>
          {processName}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProcessCard