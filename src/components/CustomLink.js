import React from 'react'
import { Link } from 'react-router-dom'
import theme from '../styles/theme'

const CustomLink = ({children, to}) => {
    return (
        <Link to = {to} style = {{textDecoration: "none", color: theme.palette.text.link}}>
            {children}
        </Link>
    )
}

export default CustomLink