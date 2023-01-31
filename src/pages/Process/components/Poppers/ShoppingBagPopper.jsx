import * as React from 'react'
import { popoverPaper, list, popoverItem, anchorOrigin, transformOrigin } from 'styles/process'
import { Typography, Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import RedCheckMark from 'assets/svg/RedCheckMark'
import Popover from '@mui/material/Popover'

const ShoppingBagPopper = ({shoppingBagAnchor, closeShoppingBagPopper, toggleRightDrawer, openRightDrawer}) => {

  return (
      <Popover
        open = {Boolean(shoppingBagAnchor)}
        anchorEl = {shoppingBagAnchor}
        anchorOrigin = {anchorOrigin}
        transformOrigin = {transformOrigin}
        onClose = {closeShoppingBagPopper}
        disablePortal 
        PaperProps = {{sx: popoverPaper}}
      >
        <List dense sx = {list}>
          {[['Card'], ['Products'], ['Products & Card', toggleRightDrawer]].map(item => {
            return (
              <ListItem disablePadding key = {item} id = {item}>
                <ListItemButton onClick = {item[1] ? item[1] : null}>
                  <ListItemText >
                    <Box sx = {popoverItem}>
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