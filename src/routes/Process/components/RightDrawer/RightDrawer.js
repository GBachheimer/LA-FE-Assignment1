import React from 'react'
import { Drawer, Box } from '@mui/material'
import { useTheme } from '@emotion/react';
import RightDrawerAccordion from './RightDrawerAccordion';
import "../../procesStyle.css"
import { rightDrawerData } from '../../../../data/data';
import DrawerFooter from './DrawerFooter';

const RightDrawer = ({openRightDrawer, toggleRightDrawer, children}) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor = "right"
      open = {openRightDrawer}
      onClose = {toggleRightDrawer}
      PaperProps = {{sx: {width: 400}, className: "drawerScrollbar"}}
      hideBackdrop = {true}
      sx = {{zIndex: theme.zIndex.drawer - 101, position: "relative"}}
      className = "drawerScrollbar"
    > 
      <Box 
        sx = {{marginTop: 17}} 
        display = "flex" 
        justifyContent = "center" 
        flexDirection = "column"
      >
        {rightDrawerData.map((cathegory) => {
          return <RightDrawerAccordion icon = {cathegory.icon} cathegory = {cathegory.name}/>
        })}
      </Box>
      <DrawerFooter toggleRightDrawer = {toggleRightDrawer}/>
    </Drawer>
  )
}

export default RightDrawer