import { styled } from "@mui/material"
import MuiAppBar from '@mui/material/AppBar'
import { drawerWidth } from "./menuDrawer";
import { teal } from "@mui/material/colors";

export const AppBar = styled(MuiAppBar, {
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

export const appBar = {
    backgroundColor: 'white', 
    color: 'black', 
    position: 'fixed'
};

export const toolbarBox1 = (open) => {
    return {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        minWidth: '50%',
        transform: !open ? 'translateX(10%)' : 'revert'
    }
};

export const mapBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const toolbarBox2 = {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
};

export const paper = {
    width: '30px', 
    textAlign: 'center', 
    marginLeft: '1rem', 
    marginRight: '1rem'
};

export const avatar = { 
    bgcolor: teal[200], 
    borderRadius: '5px', 
    height: 30, 
    width: 30, 
    fontSize: '0.6rem' 
};