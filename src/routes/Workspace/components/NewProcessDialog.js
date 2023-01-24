import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Select, MenuItem, Box, FormControl, InputLabel } from '@mui/material';
import theme from '../../../styles/theme';
import { grey, teal } from '@mui/material/colors';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NewProcessDialog = ({open, closeDialog, processName, handleProcessName, handleCreateProcess, pickColor, handlePickColor, processPrivacy, handleProcessPrivacy}) => {
  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDialog}
        aria-describedby="alert-dialog-slide-description"
        PaperProps = {{style: {borderRadius: 15, width: "50%"}}}
      >
        <DialogTitle>{"Create a new process"}</DialogTitle>
        <DialogContent>
          <TextField
            sx = {{
              marginTop: "2vh",
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderRadius: 3,
                    },
              }
            }}
            required
            autoComplete = "true"
            label = "Process name"
            value = {processName}
            onChange = {handleProcessName}
            fullWidth
            autoFocus
          />
          <Box sx = {{marginTop: "2vh"}}>
            <FormControl fullWidth>
              <InputLabel id = "pickColor">Pick color</InputLabel>
                <Select
                  label="Pick color"
                  labelId = "pickColor"
                  value = {pickColor}
                  onChange = {handlePickColor}
                  sx = {{borderRadius: 3}}
                  required
                >
                  <MenuItem value= "blue">Blue</MenuItem>
                  <MenuItem value= "red">Red</MenuItem>
                  <MenuItem value="green">Green</MenuItem>
                  <MenuItem value="purple">Purple</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx = {{marginTop: "2vh"}}>
            <FormControl fullWidth>
              <InputLabel id = "processPrivacy">Process privacy</InputLabel>
                <Select
                  label="Process privacy"
                  labelId = "processPrivacy"
                  value = {processPrivacy}
                  onChange = {handleProcessPrivacy}
                  sx = {{borderRadius: 3}}
                  required
                >
                  <MenuItem value= "public">Public</MenuItem>
                  <MenuItem value= "private">Private</MenuItem>
                </Select>
              </FormControl>
            </Box>
        </DialogContent>
        <DialogActions>
          <Button 
            variant = "outlined" 
            onClick = {closeDialog} 
            sx = {{
              borderRadius: 2, 
              marginRight: "2vh", 
              marginBottom: "2vh"
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick = {handleCreateProcess} 
            sx = {{
              backgroundColor: theme.palette.text.link, 
              color: grey[50], 
              borderRadius: 2, 
              marginRight: "2vh", 
              marginBottom: "2vh",   
              '&:hover': {
                backgroundColor: teal[400],
                boxShadow: 'none',
              },
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default NewProcessDialog
