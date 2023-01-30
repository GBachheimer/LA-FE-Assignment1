import React from 'react'
import { Box, Avatar, AvatarGroup, Button, Typography, Chip, IconButton, Divider } from '@mui/material'
import theme from 'styles/theme'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Person from 'assets/svg/processDialogMenu/Person';
import Databse from 'assets/svg/processDialogMenu/Databse';
import Arrow from 'assets/svg/Arrow';
import { grey } from '@mui/material/colors';

const DialogLeftTopBar = () => {
    const date = new Date();
    const formattedDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
    return (
        <Box sx = {{width: '93%', height: '20%', display: 'flex', flexDirection: 'column', margin: 'auto'}}>
            <Box sx = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx = {{display: 'flex', alignItems: 'center'}}>
                    <AvatarGroup max={5} sx={{'& .MuiAvatar-root': { width: 32, height: 32, fontSize: 18, backgroundColor: theme.palette.primary.main},}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                    </AvatarGroup>
                    <IconButton size = 'small' color = 'warning'>
                        <AddCircleOutlineRoundedIcon />
                    </IconButton>
                </Box>
                <Box sx = {{diplay: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Arrow/>
                    <Arrow/>
                    <Button endIcon = {<ArrowDropDownRoundedIcon/>} sx = {{color: grey[600], fontSize: 16}}>
                        Chapter one
                    </Button>
                </Box>
                <Box sx = {{display: 'flex', alignItems: 'center'}}>
                    <CalendarTodayOutlinedIcon sx = {{color: grey[600]}} fontSize = 'small'/>
                    <Typography variant = 'body2' sx = {{color: grey[600], marginLeft: '0.2rem'}}>{formattedDate}</Typography>
                </Box>
            </Box>
            <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <Chip label = 'Label 1' color = 'primary' size = 'small'/>
                <Chip label = 'Label 2' color = 'warning' sx = {{marginLeft: 1, marginRight: 1}} size = 'small'/>
                <Chip label = 'Label 3' color = 'secondary' size = 'small'/>
                <IconButton size = 'small' color = 'warning'>
                    <AddCircleOutlineRoundedIcon />
                </IconButton>
            </Box>
            <Box sx = {{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
                <Button startIcon = {<Person/>} endIcon = {<ArrowDropDownRoundedIcon/>} sx = {{fontSize: 14, color: grey[600]}}>
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