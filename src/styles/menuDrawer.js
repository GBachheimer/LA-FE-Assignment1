import theme from "./theme";
import { red } from '@mui/material/colors'
import styled from "@emotion/styled";
import MuiDrawer from '@mui/material/Drawer'

export const menuDrawerMainBox = {
    display: 'flex'
};

export const drawer = {
    position: 'relative'
};

export const drawerHeader = {
    backgroundColor: theme.palette.primary.main
};

export const drawerList = {
    height: '100%', 
    backgroundColor: theme.palette.primary.main
};

export const menuDrawerAvatar = { 
    bgcolor: red[200], 
    borderRadius: '10px', 
    marginLeft: 0 
};

export const menuItem = {
    backgroundColor: theme.palette.primary.main
};

export const menuLogo = { 
    position: 'absolute', 
    bottom: '0' 
};

export const drawerHeaderContainer = { 
    flexGrow: 1, 
    p: 3, 
    marginTop: 8
};

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


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

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

export const menuItemContainer = { 
    display: 'block'
};

export const listItemButton = (open) => {
    return {
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
    }
};

export const listItemIcon = (open) => {
    return {
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
        color: 'white'
    }
};

export const listItemText = (open) => { 
    return {
        opacity: open ? 1 : 0, color: 'white',
    }
};

