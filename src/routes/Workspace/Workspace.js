import { Typography, Grid, Card, CardContent,CardActions, Button } from '@mui/material'
import React from 'react'
import MenuDrawer from '../../components/MenuDrawer/MenuDrawer'
import ProcessCard from './components/ProcessCard'

const Workspace = () => {
  const name = "Fabrizio Nillo"
  return (
    <MenuDrawer>
      <Grid container item xs = {12} mt = {2} direction = "column">
        <Typography variant = "h5" ml = {2}>
          Welcome, {name}
        </Typography>
        <Grid item mt = {2} ml = {2}>
          <Typography variant = "body2" maxWidth = "40%">
            Work with your team mates, take track of your process 
            and close all tasks
          </Typography>
        </Grid>
        <Grid container item xs = {12} direction = "row">
          <ProcessCard backgroundColor = "green" processName = "test"/>
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
          <ProcessCard />
        </Grid>
      </Grid>
    </MenuDrawer>
  )
}

export default Workspace