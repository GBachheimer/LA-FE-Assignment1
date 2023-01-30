import React from 'react'
import { Typography } from '@mui/material'
import theme from 'styles/theme'

const CustomTypography = ({children, variant, style}) => {
    return (
        <Typography variant = {variant} sx = {{color: theme.palette.text.primary, ...style}}>
            {children}
        </Typography>
    )
}

export default CustomTypography