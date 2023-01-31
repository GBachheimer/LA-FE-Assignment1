import theme from "./theme"
import { red } from '@mui/material/colors'

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

