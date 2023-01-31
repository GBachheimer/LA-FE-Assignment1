import React from 'react'
import { Box, Typography, Button, Autocomplete, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { membersHeader, textFieldLabel, textField } from 'styles/processSettings';

const MembersHeader = ({searchUser, handleSearchUser}) => {

  return (
    <Box sx = {membersHeader}>
      <TextField
        label = {<Typography sx = {textFieldLabel}><SearchOutlinedIcon fontSize = 'small'/>Search</Typography>}
        sx = {textField}
        value = {searchUser}
        onChange = {handleSearchUser}
        type = 'search'
      />
      <Typography variant = 'body2' ml = {-20}>
        Members
      </Typography>
      <Button sx = {{borderRadius: 2}} variant = 'contained' size = 'small' color = 'warning' startIcon = {<AddCircleIcon/>}>
        Invite
      </Button>
  </Box>
  )
}

export default MembersHeader