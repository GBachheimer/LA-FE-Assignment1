import React from 'react'
import { Box, Typography, Button, Autocomplete, TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const MembersHeader = () => {
  const members = ["Member one", "Member Two", "Member three", "Member Four", "Member five"];

  return (
    <Box display = "flex" justifyContent = "space-between" sx = {{width: "70vw"}}>
      <Autocomplete
        freeSolo
        disableClearable
        options = {members.map((option) => option)}
        renderInput = {(params) => (
          <TextField
            {...params}
            label = "Search input"
            sx = {{width: "500%"}}
            InputProps = {{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <Typography variant = "body2" mt = {2} ml = {2}>
        Members
      </Typography>
      <Button variant = "contained" size = "small" color = "warning" startIcon = {<AddCircleIcon/>}>
        Invite
      </Button>
  </Box>
  )
}

export default MembersHeader