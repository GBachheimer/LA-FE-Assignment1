import React from 'react'
import { Box, Button, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { grey, teal } from '@mui/material/colors';

const DrawerFooter = ({toggleRightDrawer}) => {
    const theme = useTheme();
    return (
        <Box 
            sx = {{height: "97%"}} 
            display = "flex" 
            justifyContent = "start" 
            alignItems = "end"
        >
            <IconButton 
                onClick = {toggleRightDrawer} 
                sx = {{marginLeft: 2, marginBottom: 2}}
            >
                <ArrowForwardIosIcon/>
            </IconButton>
            <Box 
                sx = {{width: "90%"}} 
                mr = {2} 
                my = {2} 
                display = "flex" 
                justifyContent = "end" 
                alignItems = "end"
            >
                <Button 
                    variant = "outlined" 
                    sx = {{marginRight: "1vh", borderRadius: 2,}}
                >
                    Cancel
                </Button>
                <Button
                    variant = "contained" 
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