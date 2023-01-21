import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, Typography, Avatar, Paper, Box} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from '../MenuDrawer';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { teal } from '@mui/material/colors';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MenuAppBar = ({title, open}) => {
  return (
      <AppBar position="fixed" open={open} sx = {{backgroundColor: "white", color: "black"}}>
        <Toolbar>
          <Box display = "flex" justifyContent = "start" alignItems = "start" minWidth = "10%" sx = {{transform: !open ? "translateX(50%)" : "revert"}}>
            <Typography variant="h6" noWrap >
              {title}
            </Typography>
          </Box>
          <Box display = "flex" justifyContent = "end" alignItems = "center" width = "100%">
            <NotificationsOutlinedIcon />
            <Paper elevation={1} sx = {{width: "30px", textAlign: "center", marginLeft: "1rem", marginRight: "1rem"}}>
              A
            </Paper>
            <Avatar sx={{ bgcolor: teal[200], borderRadius: "5px", height: 30, width: 30, fontSize: "0.6rem" }} variant = "square">
              LD
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default MenuAppBar