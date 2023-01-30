import * as React from 'react'
import { Typography, Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import RedCheckMark from 'assets/svg/RedCheckMark'
import Popover from '@mui/material/Popover'

const ShoppingBagPopper = ({shoppingBagAnchor, closeShoppingBagPopper, toggleRightDrawer, openRightDrawer}) => {

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
            width: '250px', 
            height: '175px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }
        }}
      >
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[['Card'], ['Products'], ['Products & Card', toggleRightDrawer]].map(item => {
            return (
              <ListItem disablePadding key = {item} id = {item}>
                <ListItemButton onClick = {item[1] ? item[1] : null}>
                  <ListItemText >
                    <Box display = 'flex' justifyContent = 'space-between' alignItems = 'center'>
                      <Typography variant = 'body2'>
                        {item[0]}
                      </Typography>
                      {openRightDrawer && item[1] ? <RedCheckMark/>: null}
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