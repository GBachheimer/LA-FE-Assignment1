import React, { useEffect, useState } from 'react'
import { Drawer, Box } from '@mui/material'
import { useTheme } from '@emotion/react'
import RightDrawerAccordion from './RightDrawerAccordion'
import DrawerFooter from './DrawerFooter'

const RightDrawer = ({openRightDrawer, toggleRightDrawer, users}) => {
  const theme = useTheme();
  const [user, setUser] = useState(users ? users[0]: null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setUser(users[position]);
  }, [position, users]);
  
  const nextUser = () => {
    if (position === users.length - 1) {
      setPosition(0);
    } else {
      setPosition(prevState => prevState + 1);
    }
  };
  
  const prevUser = () => {
    if (position === 0) {
      setPosition(users.length - 1);
    } else {
      setPosition(prevState => prevState - 1);
    }
  };

  return (
    <Drawer
      anchor = 'right'
      open = {openRightDrawer}
      onClose = {toggleRightDrawer}
      PaperProps = {{sx: {width: 400}, className: 'drawerScrollbar'}}
      hideBackdrop = {true}
      sx = {{zIndex: theme.zIndex.drawer - 101, position: 'relative'}}
      className = 'drawerScrollbar'
    > 
      <Box 
        sx = {{marginTop: 17, textAlign: 'center'}} 
      >
        <RightDrawerAccordion user = {user} />
      </Box>
      <DrawerFooter toggleRightDrawer = {toggleRightDrawer} nextUser = {nextUser} prevUser = {prevUser}/>
    </Drawer>
  )
}

export default RightDrawer