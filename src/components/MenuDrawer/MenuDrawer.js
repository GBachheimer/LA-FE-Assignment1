import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Avatar, List, CssBaseline, IconButton } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MenuItem from './components/MenuItem'
import { red } from '@mui/material/colors';
import MenuAppBar from './components/MenuAppBar';
import MenuIcon from '../../resources/svg/MenuIcon';
import CoralyLogo from '../../resources/svg/CoralyLogo';
import WorkspaceIcon from '../../resources/menuIcons/WorkspaceIcon';
import FilesIcon from '../../resources/menuIcons/FilesIcon';
import DatabaseIcon from '../../resources/menuIcons/DatabaseIcon';
import ArrowsIcon from '../../resources/menuIcons/ArrowsIcon';
import RobotIcon from '../../resources/menuIcons/RobotIcon';
import TreeIcon from '../../resources/menuIcons/TreeIcon';
import FAQIcon from '../../resources/menuIcons/FAQIcon';
import SignoutIcon from '../../resources/menuIcons/SignoutIcon';
import ConectionsIcon from '../../resources/menuIcons/ConectionsIcon';

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MenuDrawer = ({children}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const menu = [
    ['Workspace', <WorkspaceIcon />], 
    ['Connections', <ConectionsIcon />], 
    ['Files', <FilesIcon />], 
    ['Database', <DatabaseIcon />], 
    ['Arrows', <ArrowsIcon />], 
    ['Robot', <RobotIcon />], 
    ['Tree', <TreeIcon />], 
    ['FAQ', <FAQIcon />], 
    ['Sign out', <SignoutIcon />]
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MenuAppBar title = "test" open = {open} />
      <Drawer variant="permanent" open={open} sx = {{position: "relative"}}>
        <DrawerHeader sx = {{backgroundColor: theme.palette.primary.main}}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List sx = {{ height: "100%", backgroundColor: theme.palette.primary.main }} >
          <MenuItem>
            <Avatar sx={{ bgcolor: red[200], borderRadius: "10px" }} variant="square">
              LD
            </Avatar>
          </MenuItem>
          {menu.map((menuItem, index) => {
            return <MenuItem key = {menuItem[0]} text = {menuItem[0]} open = {open} >
              {menuItem[1]}
            </MenuItem>
          })}
        </List>
        <MenuItem style = {{backgroundColor: theme.palette.primary.main}}>
          <CoralyLogo 
            width = "75" 
            height = "75" 
            centerX = "-25" 
            centerY = "-25" 
            style={{ position: "absolute", bottom: "0" }} 
            color = {theme.palette.primary.main} />
        </MenuItem>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default MenuDrawer