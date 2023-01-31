import theme from "./theme";
import { grey } from "@mui/material/colors";

export const topBarContainer = { 
    zIndex: theme.zIndex.drawer + 1, 
    position: 'fixed'
};

export const appBar = {
    margin: '-23px', 
    minWidth: '96vw', 
    bgcolor: grey[50], 
    color: grey[700]
};

export const rightToolbar = {                 
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
}

export const addButton = {
    marginLeft: 1, 
    marginRight: 1
};

export const leftTopBar = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export const leftButton = {
    fontSize: 12, 
    minWidth: '7%', 
    color: grey[700]
};

export const divider = {
    height: '50px', 
    marginLeft: 1, 
    marginRight: 1
};

export const rightTopBarIcon = {
    marginLeft: 0.5, 
    marginRight: 0.5
};