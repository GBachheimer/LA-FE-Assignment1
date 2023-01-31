import React, { useEffect, useState } from 'react'
import { rightDrawerPaper, rightDrawerStyle } from 'styles/rightDrawer'
import { Drawer, Box } from '@mui/material'
import RightDrawerAccordion from './RightDrawerAccordion'
import DrawerFooter from './DrawerFooter'

const RightDrawer = ({openRightDrawer, toggleRightDrawer, users}) => {
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
      PaperProps = {rightDrawerPaper}
      hideBackdrop = {true}
      sx = {rightDrawerStyle}
      className = 'drawerScrollbar'
    > 
      <Box sx = {{marginTop: 17, textAlign: 'center', padding: '20px'}}>
        <RightDrawerAccordion user = {user} />
      </Box>
      <DrawerFooter 
        toggleRightDrawer = {toggleRightDrawer} 
        nextUser = {nextUser} 
        prevUser = {prevUser}
      />
    </Drawer>
  )
}

export default RightDrawer