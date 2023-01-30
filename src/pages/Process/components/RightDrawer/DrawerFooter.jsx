import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import { grey, teal } from '@mui/material/colors'
import { useTheme } from '@emotion/react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const DrawerFooter = ({toggleRightDrawer, nextUser, prevUser}) => {
    const theme = useTheme();
    return (
        <Box 
            sx = {{height: '97%', position: 'sticky'}} 
            display = 'flex' 
            justifyContent = 'start' 
            alignItems = 'end'
        >
            <IconButton 
                onClick = {prevUser} 
                sx = {{marginBottom: 2, marginLeft: 2}}
            >
                <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton 
                onClick = {nextUser} 
                sx = {{marginBottom: 2}}
            >
                <KeyboardArrowRightIcon/>
            </IconButton>
            <Box 
                sx = {{width: '90%'}} 
                mr = {2} 
                my = {3} 
                display = 'flex' 
                justifyContent = 'end' 
                alignItems = 'end'
            >
                <Button 
                    variant = 'outlined' 
                    sx = {{marginRight: '1vh', borderRadius: 2,}}
                    onClick = {toggleRightDrawer}
                >
                    Cancel
                </Button>
                <Button
                    variant = 'contained' 
                    sx = {{
                        backgroundColor: theme.palette.text.link, 
                        color: grey[50], 
                        borderRadius: 2,               
                        '&:hover': {backgroundColor: teal[400],},
                    }}
                >
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default DrawerFooter