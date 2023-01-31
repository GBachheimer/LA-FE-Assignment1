import { red } from '@mui/material/colors'

export const membersHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    height: '80px', 
    paddingTop: '20px', 
    paddingBottom: '20px',
};

export const textFieldLabel = {
    display: 'flex', 
    alignItems: 'center',
};

export const textField = {
    width: '300px', 
    '& .MuiOutlinedInput-root': {borderRadius: 3, },
};

export const tabContainer = { 
    flexGrow: 1, 
    bgcolor: 'background.paper', 
    display: 'flex', 
    height: '80vh',
    margin: 2,
};

export const tabs = { 
    borderLeft: 1, 
    borderRight: 1, 
    borderColor: 'divider', 
    '& .MuiTab-root.Mui-selected': {color: red[400] }, 
    marginTop: 4, 
    minWidth: 200,
};

export const tabIndicator = {
    sx: {
        left: '0px', 
        background: red[300],
    },
};

export const tabTypo = {
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'left',
};