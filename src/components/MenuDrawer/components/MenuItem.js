import React from 'react'
import { ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({children, open, text, ...restProps}) => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate("/workspace");
    };

  return (
    <ListItem disablePadding {...restProps} sx = {{ display: 'block'}}>
        <ListItemButton
            sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}
            onClick = {handleButton}
        >
            <ListItemIcon
                sx = {{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: "white"
                }}
            >
                {children}
            </ListItemIcon>
            {text && <ListItemText primary = {text} sx = {{ opacity: open ? 1 : 0, color: "white" }} />}
        </ListItemButton>
    </ListItem>
  )
}

export default MenuItem