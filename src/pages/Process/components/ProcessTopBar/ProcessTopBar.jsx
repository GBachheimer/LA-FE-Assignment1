import React, { useState } from 'react'
import { topBarContainer, appBar, rightToolbar, addButton } from 'styles/processTopBar'
import { Box, AppBar, Toolbar, Button } from '@mui/material'
import { topBarOptions, topBarMenu } from 'data/data'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ShoppingBagPopper from '../Poppers/ShoppingBagPopper'
import RightTopBar from './RightTopBar'
import LeftTopBar from './LeftTopBar'

const TopBar = ({topBarItemAction, toggleRightDrawer, toggleSettingsDrawer, openRightDrawer}) => {
    const [shoppingBagAnchor, setShoppingBagAnchor] = useState(null);

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
    <Box sx = {topBarContainer}>
        <AppBar position = 'static' sx = {appBar} elevation = {1}>
            <Toolbar>
                <LeftTopBar topBarOptions = {topBarOptions} topBarItemAction = {topBarItemAction}/>
                <Box sx = {rightToolbar}>
                    <RightTopBar 
                        topBarMenu = {topBarMenu} 
                        toggleShoppingBagPopper = {toggleShoppingBagPopper}
                        toggleSettingsDrawer = {toggleSettingsDrawer}
                        shoppingBagAnchor = {shoppingBagAnchor}
                    />
                    <Button 
                        startIcon = {<AddCircleOutlineIcon />} 
                        sx = {addButton} 
                        color = 'warning'
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