import { grey, teal } from "@mui/material/colors";
import theme from "./theme";

export const workspaceGridMain = {
    marginTop: 2,
};

export const nameTypography = {
    marginLeft: 2
};

export const subtitle = {
    marginTop: 2,
    marginLeft: 2,
};

export const addProcessPaper = {
    borderRadius: 15, 
    width: '50%'
};

export const dialogContent = {
    marginTop: '2vh',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: 3,
            },
    },
};

export const dialogAction = {
    borderRadius: 2, 
    marginRight: '2vh', 
    marginBottom: '2vh'
};

export const dialogAction2 = {
    backgroundColor: theme.palette.text.link, 
    color: grey[50], 
    borderRadius: 2, 
    marginRight: '2vh', 
    marginBottom: '2vh',   
    '&:hover': {
      backgroundColor: teal[400],
      boxShadow: 'none',
    },
};

export const processCard = (borderColor, borderStyle, backgroundColor) => { 
    return {
        width: 170, 
        height: 170, 
        backgroundColor: backgroundColor, 
        borderRadius: 3,
        borderColor: borderColor ? borderColor : 'none',
        borderStyle: borderStyle ? borderStyle : 'none',
        position: 'relative',
    }
};

export const processLockedIcon = {
    color: grey[50], 
    position: 'absolute', 
    left: 2, 
    top: 4
};

export const processCardContent = { 
    textAlign: 'center', 
    paddingTop: '30%'
};

export const processTitle = (textColor) => {
    return { 
        fontSize: 18, 
        color: textColor ? textColor : 'white', 
        marginTop: '0.5vh' 
    }
};