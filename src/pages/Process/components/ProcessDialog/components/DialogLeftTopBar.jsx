import React from 'react'
import { leftTopBarConatiner, leftTopBarLine1, line1Item1, avatarGroup, line1Item2, line1Button, line2Typo, leftTopBarLine2, middleChip, selectVendors } from 'styles/processDialog'
import { Box, Avatar, AvatarGroup, Button, Typography, Chip, IconButton, Divider } from '@mui/material'
import { formattedDate } from 'utils/dateFormat';
import { grey } from '@mui/material/colors';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Databse from 'assets/svg/processDialogMenu/Databse';
import Person from 'assets/svg/processDialogMenu/Person';
import Arrow from 'assets/svg/Arrow';

const DialogLeftTopBar = () => {
    return (
        <Box sx = {leftTopBarConatiner}>
            <Box sx = {leftTopBarLine1}>
                <Box sx = {line1Item1}>
                    <AvatarGroup max = {5} sx = {avatarGroup}>
                        <Avatar alt = 'Remy Sharp' src = '/static/images/avatar/1.jpg' />
                        <Avatar alt = 'Travis Howard' src = '/static/images/avatar/2.jpg'/>
                        <Avatar alt = 'Cindy Baker' src = '/static/images/avatar/3.jpg'/>
                        <Avatar alt = 'Agnes Walker' src = '/static/images/avatar/4.jpg'/>
                        <Avatar alt = 'Trevor Henderson' src = '/static/images/avatar/5.jpg'/>
                        <Avatar alt = 'Trevor Henderson' src = '/static/images/avatar/5.jpg'/>
                    </AvatarGroup>
                    <IconButton size = 'small' color = 'warning'>
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </Box>
                <Box sx = {line1Item2}>
                    <Arrow/>
                    <Arrow/>
                    <Button endIcon = {<ArrowDropDownRoundedIcon/>} sx = {line1Button}>
                        Chapter one
                    </Button>
                </Box>
                <Box sx = {line1Item1}>
                    <CalendarTodayOutlinedIcon sx = {{color: grey[600]}} fontSize = 'small'/>
                    <Typography variant = 'body2' sx = {line2Typo}>{formattedDate}</Typography>
                </Box>
            </Box>
            <Box sx = {leftTopBarLine2}>
                <Chip label = 'Label 1' color = 'primary' size = 'small'/>
                <Chip label = 'Label 2' color = 'warning' sx = {middleChip} size = 'small'/>
                <Chip label = 'Label 3' color = 'secondary' size = 'small'/>
                <IconButton size = 'small' color = 'warning'>
                    <AddCircleOutlineRoundedIcon />
                </IconButton>
            </Box>
            <Box sx = {leftTopBarLine2}>
                <Button startIcon = {<Person/>} endIcon = {<ArrowDropDownRoundedIcon/>} sx = {selectVendors}>
                    Select Vendors
                </Button>
                <Divider orientation = 'vertical' />
                <Box sx = {{marginLeft: 2}}>
                    <Chip icon = {<Databse/>} label = '#database_object_1' />
                    <Chip icon = {<Databse/>} label = '#db_object_1' sx = {{marginLeft: 2}}/>
                </Box>
            </Box>
            <Divider />
        </Box>
    )
}

export default DialogLeftTopBar