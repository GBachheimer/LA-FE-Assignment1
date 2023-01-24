import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Typography, Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const ShoppingBagPopper = ({shoppingBagAnchor, closeShoppingBagPopper, toggleDrawer}) => {

  return (
      <Popover
        open = {Boolean(shoppingBagAnchor)}
        anchorEl = {shoppingBagAnchor}
        anchorOrigin = {{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin = {{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose = {closeShoppingBagPopper}
        disablePortal 
        PaperProps = {{
          sx: {
            width: "250px", 
            height: "175px",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
          }
        }}
      >
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[["Card"], ["Products"], ["Products & Card", toggleDrawer]].map(item => {
            return (
              <ListItem disablePadding key = {item} id = {item}>
                <ListItemButton onClick = {item[1] ? item[1] : null}>
                  <ListItemText >
                    <Box display = "flex" justifyContent = "space-between" alignItems = "center">
                      <Typography variant = "body2">
                        {item[0]}
                      </Typography>
                    </Box>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Popover>
  );
}

export default ShoppingBagPopper