import React from 'react'
import { CardContent, Typography, Card, Button } from '@mui/material'
import CardIcon from '../../../resources/svg/CardIcon'
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';

const ProcessCard = ({backgroundColor, processName, handleButton, borderColor, borderStyle, textColor, icon, processPrivacy}) => {
  return (
    <Button onClick = {() => handleButton(processPrivacy)} >
      <Card 
        sx={{ 
          width: 170, 
          height: 170, 
          backgroundColor: backgroundColor, 
          borderRadius: 3,
          borderColor: borderColor ? borderColor : "none",
          borderStyle: borderStyle ? borderStyle : "none",
          position: "relative",
        }} 
        elevation = {0}
      >
        { processPrivacy === "private" ? <LockIcon sx = {{color: grey[50], position: "absolute", left: 2, top: 4}} /> : null }
        <CardContent sx = {{ textAlign: "center", paddingTop: "30%"}}>
          {icon ? icon : <CardIcon />}
          <Typography 
            sx={{ 
              fontSize: 18, 
              color: textColor ? textColor : "white", 
              marginTop: "0.5vh" 
            }} 
            gutterBottom
          >
            {processName}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  )
}

export default ProcessCard