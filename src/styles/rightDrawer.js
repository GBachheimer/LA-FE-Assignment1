import theme from "./theme";
import { teal, grey } from "@mui/material/colors";

export const drawerFooterContainer = {
    height: '97%', 
    position: 'sticky',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
};

export const drawerFootRight = {
    width: '90%',
    marginRight: 2, 
    marginTop: 3,
    marginBottom: 3,
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
};

export const saveButton = {
    backgroundColor: theme.palette.text.link, 
    color: grey[50], 
    borderRadius: 2,               
    '&:hover': {backgroundColor: teal[400],},
};

export const rightDrawerPaper = {
    sx: {width: 400}, 
    className: 'drawerScrollbar'
};

export const rightDrawerStyle = {
    zIndex: theme.zIndex.drawer - 101, 
    position: 'relative'
};

export const rightDrawerContent = {
    marginTop: 17, 
    textAlign: 'center', 
    padding: '20px'
};