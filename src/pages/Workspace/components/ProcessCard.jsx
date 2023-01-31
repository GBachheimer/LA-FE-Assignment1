import React from 'react'
import  { processCard, processLockedIcon, processCardContent, processTitle } from 'styles/workspace'
import { CardContent, Typography, Card, Button } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import CardIcon from 'assets/svg/CardIcon'

const ProcessCard = (props) => {
  return (
    <Button onClick = {() => props.handleButton(props.processPrivacy, props.processName)} >
      <Card sx = {processCard(props.borderColor, props.borderStyle, props.backgroundColor)} elevation = {0}>
        { props.processPrivacy === 'private' ? <LockIcon sx = {processLockedIcon} /> : null }
        <CardContent sx = {processCardContent}>
          {props.icon ? props.icon : <CardIcon />}
          <Typography sx = {processTitle(props.textColor)} gutterBottom>
            {props.processName}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  )
}

export default ProcessCard 