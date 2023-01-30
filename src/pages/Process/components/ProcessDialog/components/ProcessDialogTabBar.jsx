import React, { useState } from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { a11yProps } from 'utils/TabPanel';
import {red} from '@mui/material/colors';
import ProcessDialogRight from './ProcessDialogRight';
import Bag from 'assets/svg/processDialogMenu/Bag';
import Rows from 'assets/svg/processDialogMenu/Rows';
import Comments from 'assets/svg/processDialogMenu/Comments';
import Agrafa from 'assets/svg/processDialogMenu/Agrafa';
import Link from 'assets/svg/processDialogActions/Link';
import MenuSpecial from 'assets/svg/processDialogMenu/MenuSpecial';
import ProcessDialogPhaseMenu from './ProcessDialogPhaseMenu';

const ProcessDialogTabBar = ({menuValue, handleMenuValue}) => {
    return (
        <Box sx = {{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width: '4%', height: '100%'}}>
            <Tabs
                orientation = 'vertical'
                value = {menuValue}
                onChange = {handleMenuValue}
                sx = {{'& .MuiTab-root.Mui-selected': {color: red[400] }}}
                TabIndicatorProps = {{sx: {left: '0px', background: red[300]}}}
            >
                <Tab label = {<Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}><Bag color = {menuValue === 0 ? red[300] : null}/></Typography>} {...a11yProps(0)}/>
                <Tab label = {<Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}><Rows color = {menuValue === 1 ? red[300] : null}/></Typography>} {...a11yProps(1)}/>
                <Tab label = {<Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}><Comments color = {menuValue === 2 ? red[300] : null}/></Typography>} {...a11yProps(2)}/>
                <Tab label = {<Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}><Agrafa color = {menuValue === 3 ? red[300] : null}/></Typography>} {...a11yProps(3)}/>
                <Tab label = {<Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}><Link color = {menuValue === 4 ? red[300] : null}/></Typography>} {...a11yProps(4)}/>
                <Tab label = {<Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}><MenuSpecial color = {menuValue === 5 ? red[300] : null}/></Typography>} {...a11yProps(5)}/>
            </Tabs>
        </Box>
    )
}

export default ProcessDialogTabBar
