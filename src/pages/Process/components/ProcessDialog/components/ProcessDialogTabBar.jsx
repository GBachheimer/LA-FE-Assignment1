import React from 'react'
import { dialogTabBar, tabBarTabs, tabIndicator, tabTypo } from 'styles/processDialog'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { a11yProps } from 'utils/a11yProps'
import {red} from '@mui/material/colors'
import MenuSpecial from 'assets/svg/processDialogMenu/MenuSpecial'
import Comments from 'assets/svg/processDialogMenu/Comments'
import Agrafa from 'assets/svg/processDialogMenu/Agrafa'
import Link from 'assets/svg/processDialogActions/Link'
import Rows from 'assets/svg/processDialogMenu/Rows'
import Bag from 'assets/svg/processDialogMenu/Bag'

const ProcessDialogTabBar = ({menuValue, handleMenuValue}) => {
    return (
        <Box sx = {dialogTabBar}>
            <Tabs
                orientation = 'vertical'
                value = {menuValue}
                onChange = {handleMenuValue}
                sx = {tabBarTabs}
                TabIndicatorProps = {tabIndicator}
            >
                <Tab label = {<Typography sx = {tabTypo}><Bag color = {menuValue === 0 ? red[300] : null}/></Typography>} {...a11yProps(0)}/>
                <Tab label = {<Typography sx = {tabTypo}><Rows color = {menuValue === 1 ? red[300] : null}/></Typography>} {...a11yProps(1)}/>
                <Tab label = {<Typography sx = {tabTypo}><Comments color = {menuValue === 2 ? red[300] : null}/></Typography>} {...a11yProps(2)}/>
                <Tab label = {<Typography sx = {tabTypo}><Agrafa color = {menuValue === 3 ? red[300] : null}/></Typography>} {...a11yProps(3)}/>
                <Tab label = {<Typography sx = {tabTypo}><Link color = {menuValue === 4 ? red[300] : null}/></Typography>} {...a11yProps(4)}/>
                <Tab label = {<Typography sx = {tabTypo}><MenuSpecial color = {menuValue === 5 ? red[300] : null}/></Typography>} {...a11yProps(5)}/>
            </Tabs>
        </Box>
    )
}

export default ProcessDialogTabBar
