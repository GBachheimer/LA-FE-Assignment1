import { teal } from "@mui/material/colors";

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