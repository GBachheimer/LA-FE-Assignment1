import React from 'react'
import { drawerFooterContainer, drawerFootRight, saveButton } from 'styles/rightDrawer'
import { Box, Button, IconButton } from '@mui/material'
import { useTheme } from '@emotion/react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const DrawerFooter = ({toggleRightDrawer, nextUser, prevUser}) => {
    const theme = useTheme();
    return (
        <Box sx = {drawerFooterContainer}>
            <IconButton onClick = {prevUser} sx = {{marginBottom: 2, marginLeft: 2}}>
                <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton onClick = {nextUser} sx = {{marginBottom: 2}}>
                <KeyboardArrowRightIcon/>
            </IconButton>
            <Box sx = {drawerFootRight}>
                <Button variant = 'outlined' sx = {{marginRight: '1vh', borderRadius: 2,}} onClick = {toggleRightDrawer}>
                    Cancel
                </Button>
                <Button variant = 'contained' sx = {saveButton}>
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default DrawerFooter