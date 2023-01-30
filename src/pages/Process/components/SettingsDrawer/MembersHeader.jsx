import React from 'react'
import { Box, Typography, Button, Autocomplete, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle'

const MembersHeader = ({searchUser, handleSearchUser}) => {

  return (
    <Box display = 'flex' justifyContent = 'space-between' alignItems = 'center' sx = {{height: '100px', paddingTop: '30px', paddingBottom: '30px'}}>
      <TextField
        label = {<Typography sx = {{display: 'flex', alignItems: 'center'}}><SearchOutlinedIcon fontSize = 'small'/>Search</Typography>}
        sx = {{width: '300px', '& .MuiOutlinedInput-root': {borderRadius: 3, }}}
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