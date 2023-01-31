import React from 'react'
import { menuItemContainer, listItemButton, listItemIcon, listItemText } from 'styles/menuDrawer'
import { ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({children, open, text, ...restProps}) => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/workspace');
    };

    return (
        <ListItem disablePadding {...restProps} sx = {menuItemContainer}>
            <ListItemButton sx = {listItemButton(open)} onClick = {handleButton}>
                <ListItemIcon sx = {listItemIcon(open)}>
                    {children}
                </ListItemIcon>
                {text && <ListItemText primary = {text} sx = {listItemText(open)} />}
            </ListItemButton>
        </ListItem>
    )
}

export default MenuItem