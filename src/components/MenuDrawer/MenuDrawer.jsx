import React, { useState, useContext } from 'react'
import { menuDrawerMainBox, drawer, drawerHeader, drawerList, menuDrawerAvatar, menuItem, menuLogo, drawerHeaderContainer } from 'styles/menuDrawer'
import { Box, Avatar, List, IconButton } from '@mui/material'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { handleSignout } from 'api/auth/handleSignout'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { mainMenu } from 'data/data'
import DrawerHeader from 'components/styledComponents/DrawerHeader'
import SignoutIcon from 'assets/svg/menuIcons/SignoutIcon'
import Drawer from 'components/styledComponents/Drawer'
import MenuAppBar from './components/MenuAppBar'
import CoralyLogo from 'assets/svg/CoralyLogo'
import MenuItem from './components/MenuItem'
import MenuIcon from 'assets/svg/MenuIcon'

const MenuDrawer = ({children}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext)

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx = {menuDrawerMainBox}>
      <MenuAppBar title = 'test' open = {open} />
      <Drawer variant = 'permanent' open = {open} sx = {drawer}>
        <DrawerHeader sx = {drawerHeader}>
          <IconButton onClick = {handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List sx = {drawerList} >
          <MenuItem>
            <Avatar sx  = {menuDrawerAvatar} variant = 'square'>
              LD
            </Avatar>
          </MenuItem>
          {mainMenu.map(menuItem => {
            return (
            <MenuItem key = {menuItem[0]} text = {menuItem[0]} open = {open} >
              {menuItem[1]}
            </MenuItem>
            );
          })}
          <MenuItem text = 'Sign out' open = {open} onClick = {() => handleSignout(handleMessage, handleSeverity, openSnackBar, navigate)}>
              <SignoutIcon />
          </MenuItem>
        </List>
        <MenuItem style = {menuItem}>
          <CoralyLogo 
            width = '75' 
            height = '75' 
            centerX = { open ? '-60' : '-25' }
            style = {menuLogo} 
            color = {theme.palette.primary.main} />
        </MenuItem>
      </Drawer>
      <Box component = 'main' sx = {drawerHeaderContainer}>
        {children}
      </Box>
    </Box>
  );
}

export default MenuDrawer