import React from 'react'
import { TextField, Select, MenuItem, Box, FormControl, InputLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { addProcessPaper, dialogContent, dialogAction, dialogAction2 } from 'styles/workspace'
import { Transition } from 'utils/transitionsDrawer'

const NewProcessDialog = ({open, closeDialog, processName, handleProcessName, handleCreateProcess, pickColor, handlePickColor, processPrivacy, handleProcessPrivacy}) => {
  return (
      <Dialog
        open = {open}
        TransitionComponent = {Transition}
        keepMounted
        onClose = {closeDialog}
        aria-describedby = 'alert-dialog-slide-description'
        PaperProps = {{style: addProcessPaper}}
      >
        <DialogTitle>{'Create a new process'}</DialogTitle>
        <DialogContent>
          <TextField
            sx = {dialogContent}
            required
            autoComplete = 'true'
            label = 'Process name'
            value = {processName}
            onChange = {handleProcessName}
            fullWidth
            autoFocus
          />
          <Box sx = {{marginTop: '2vh'}}>
            <FormControl fullWidth>
              <InputLabel id = 'pickColor'>Pick color</InputLabel>
                <Select
                  label = 'Pick color'
                  labelId = 'pickColor'
                  value = {pickColor}
                  onChange = {handlePickColor}
                  sx = {{borderRadius: 3}}
                  required
                >
                  <MenuItem value= 'blue'>Blue</MenuItem>
                  <MenuItem value= 'red'>Red</MenuItem>
                  <MenuItem value = 'green'>Green</MenuItem>
                  <MenuItem value = 'purple'>Purple</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx = {{marginTop: '2vh'}}>
            <FormControl fullWidth>
              <InputLabel id = 'processPrivacy'>Process privacy</InputLabel>
                <Select
                  label = 'Process privacy'
                  labelId = 'processPrivacy'
                  value = {processPrivacy}
                  onChange = {handleProcessPrivacy}
                  sx = {{borderRadius: 3}}
                  required
                >
                  <MenuItem value= 'public'>Public</MenuItem>
                  <MenuItem value= 'private'>Private</MenuItem>
                </Select>
              </FormControl>
            </Box>
        </DialogContent>
        <DialogActions>
          <Button variant = 'outlined' onClick = {closeDialog} sx = {dialogAction}>
            Cancel
          </Button>
          <Button onClick = {handleCreateProcess} sx = {dialogAction2}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default NewProcessDialog
