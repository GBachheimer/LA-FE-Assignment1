import React from 'react'
import { Link } from 'react-router-dom';

const MenuDrawer = () => {

  return (
    <div>
        <Link to = "/signup">Signup</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/resetPassword">Reset Password</Link>
        <Link to = "/workspace">Workspace</Link>
        <Link to = "/process">Process</Link>
    </div>
  )
}

export default MenuDrawer