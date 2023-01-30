import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const ProcessDialogFooter = () => {
    return (
        <Box sx = {{height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant = 'body2' sx = {{marginLeft: '20px'}}>
                Fase ID: 123123i214y12312ui3
            </Typography>
            <Box sx = {{display: 'flex', justifyContent: 'space-between', width: '200px', marginRight: '20px'}}>
                <Button variant = 'outlined' sx = {{borderRadius: '10px'}}>
                    Cancel
                </Button>
                <Button color = 'secondary' variant = 'contained' sx = {{borderRadius: '10px'}}>
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default ProcessDialogFooter