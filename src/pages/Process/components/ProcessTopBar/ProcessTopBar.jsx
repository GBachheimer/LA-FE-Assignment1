import React, { useState } from 'react'
import { Box, AppBar, Toolbar, Button } from '@mui/material'
import { topBarOptions, topBarMenu } from 'api/data'
import { grey } from '@mui/material/colors'
import { useTheme } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ShoppingBagPopper from '../Poppers/ShoppingBagPopper'
import RightTopBar from './RightTopBar'
import LeftTopBar from './LeftTopBar'

const TopBar = ({topBarItemAction, toggleRightDrawer, toggleSettingsDrawer, openRightDrawer}) => {
    const [shoppingBagAnchor, setShoppingBagAnchor] = useState(null);
    const theme = useTheme();

    const toggleShoppingBagPopper = (event) => {
        if (!shoppingBagAnchor) {
            setShoppingBagAnchor(event.currentTarget);
        } else {
            setShoppingBagAnchor(null);
        }
    };

    const closeShoppingBagPopper = () => {
        setShoppingBagAnchor(null);
    };

  return (
    <Box sx = {{ zIndex: theme.zIndex.drawer + 1, position: 'relative'}}>
        <AppBar 
            position = 'static' 
            sx = {{margin: '-23px', minWidth: '103%', bgcolor: grey[50], color: grey[700]}} 
            elevation = {1}
        >
            <Toolbar>
                <LeftTopBar 
                    topBarOptions = {topBarOptions} 
                    topBarItemAction = {topBarItemAction}
                />
                <Box 
                    display = 'flex' 
                    justifyContent = 'end' 
                    alignItems = 'center' 
                    sx = {{width: '100%'}}
                >
                    <RightTopBar 
                        topBarMenu = {topBarMenu} 
                        toggleShoppingBagPopper = {toggleShoppingBagPopper}
                        toggleSettingsDrawer = {toggleSettingsDrawer}
                        shoppingBagAnchor = {shoppingBagAnchor}
                    />
                    <Button 
                        startIcon = {<AddCircleOutlineIcon />} 
                        sx = {{marginLeft: 1, marginRight: 1}} color = 'warning'
                        onClick = {toggleSettingsDrawer}
                    >
                        Add
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        <ShoppingBagPopper 
            shoppingBagAnchor = {shoppingBagAnchor}
            closeShoppingBagPopper = {closeShoppingBagPopper}
            toggleRightDrawer = {toggleRightDrawer}
            openRightDrawer = {openRightDrawer}
        />
    </Box>
  )
}

export default TopBar