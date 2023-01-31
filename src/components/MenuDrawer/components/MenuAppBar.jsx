import React from 'react'
import { AppBar, appBar, toolbarBox1, toolbarBox2, mapBox, paper, avatar } from 'styles/menuAppBar'
import { Toolbar, Typography, Avatar, Paper, Box} from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const MenuAppBar = ({title, open}) => {
    let location = useLocation();
    location = location.pathname.split('/');
    let params = useParams();
    if (params.process && !location.includes(params.process)) {
        location.push(params.process);
    };

    return (
        <AppBar open = {open} sx = {appBar} elevation = {2}>
            <Toolbar>
                <Box sx = {toolbarBox1(open)}>
                    {location.map((param, index) => {
                        return (
                            <Box key = {param} sx = {mapBox}>
                                <Typography variant='h6' noWrap >
                                    {param}
                                </Typography>
                                {index > 0 ? <KeyboardArrowRightIcon /> : null}
                            </Box>
                        );
                    })}
                </Box>
                <Box sx = {toolbarBox2}>
                    <NotificationsOutlinedIcon />
                    <Paper elevation = {1} sx = {paper}>A</Paper>
                    <Avatar sx = {avatar} variant = 'square'>
                        LD
                    </Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MenuAppBar