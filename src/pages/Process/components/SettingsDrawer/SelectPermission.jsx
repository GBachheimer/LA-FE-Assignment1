import React, { useState } from 'react';
import { Box, FormControl, Popover, Button, Chip } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const SelectPermission = () => {
  const [permission, setPermission] = useState('user');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setPermission(event.target.value);
  };

  return (
    <Box sx = {{ minWidth: 60 }}>
      <FormControl>
        <Chip
            label = {permission}
            size = 'small'
            icon = {<KeyboardArrowDownOutlinedIcon/>}
            onClick = {handleClick}
            color = {permission === 'user' ? 'primary' : permission === 'admin' ? 'warning' : 'secondary'}
            sx = {{fontSize: 12}}
        />
        <Popover
            open = {Boolean(anchorEl)}
            anchorEl = {anchorEl}
            onClose = {handleClose}
            anchorOrigin = {{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Button value = 'user' onClick = {handleChange} size = 'small' variant = 'text' sx = {{fontSize: 12}}>User</Button>
            <Button value = 'admin' onClick = {handleChange} size = 'small' variant = 'text' sx = {{fontSize: 12}}>Admin</Button>
            <Button value = 'readonly' onClick = {handleChange} size = 'small' variant = 'text' sx = {{fontSize: 12}}>Read only</Button>
        </Popover>
      </FormControl>
    </Box>
  );
}

export default SelectPermission