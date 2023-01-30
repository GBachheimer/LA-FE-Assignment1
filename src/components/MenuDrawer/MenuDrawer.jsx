import React, { useState, useContext } from 'react'
import { Box, Avatar, List, CssBaseline, IconButton } from '@mui/material'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { styled, useTheme } from '@mui/material/styles'
import { auth } from 'config/firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { red } from '@mui/material/colors'
import { signOut } from 'firebase/auth'
import { mainMenu } from 'api/data'
import SignoutIcon from 'assets/svg/menuIcons/SignoutIcon'
import MenuAppBar from './components/MenuAppBar'
import CoralyLogo from 'assets/svg/CoralyLogo'
import MenuItem from './components/MenuItem'
import MuiDrawer from '@mui/material/Drawer'
import MenuIcon from 'assets/svg/MenuIcon'

export const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MenuDrawer = ({children}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext)

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        handleMessage('Sign out successfuly!');
        handleSeverity('success');
        openSnackBar();
        navigate('/login');
      })
      .catch((error) => {
        handleMessage('Sign out error!');
        handleSeverity('error');
        openSnackBar();
      });
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <MenuAppBar title = 'test' open = {open} />
      <Drawer variant='permanent' open={open} sx = {{position: 'relative'}}>
        <DrawerHeader sx = {{backgroundColor: theme.palette.primary.main}}>
          <IconButton onClick = {handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List sx = {{ height: '100%', backgroundColor: theme.palette.primary.main }} >
          <MenuItem>
            <Avatar sx={{ bgcolor: red[200], borderRadius: '10px', marginLeft: 0 }} variant='square'>
              LD
            </Avatar>
          </MenuItem>
          {mainMenu.map((menuItem, index) => {
            return <MenuItem key = {menuItem[0]} text = {menuItem[0]} open = {open} >
              {menuItem[1]}
            </MenuItem>
          })}
          <MenuItem text = 'Sign out' open = {open} onClick = {handleSignout}>
              <SignoutIcon />
          </MenuItem>
        </List>
        <MenuItem style = {{backgroundColor: theme.palette.primary.main}}>
          <CoralyLogo 
            width = '75' 
            height = '75' 
            centerX = { open ? '-60' : '-25' }
            style={{ position: 'absolute', bottom: '0' }} 
            color = {theme.palette.primary.main} />
        </MenuItem>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3, }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default MenuDrawer