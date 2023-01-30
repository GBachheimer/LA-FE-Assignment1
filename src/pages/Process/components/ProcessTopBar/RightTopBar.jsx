import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import { grey, red } from '@mui/material/colors';

const RightTopBar = ({topBarMenu, toggleShoppingBagPopper, toggleSettingsDrawer, shoppingBagAnchor}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      {topBarMenu.map((menuItem, index) => {
        return(
            <IconButton 
                key = {index} 
                sx = {{marginLeft: 0.5, marginRight: 0.5}}
                onClick = {index === 0 ? toggleShoppingBagPopper : index === 4 ? toggleSettingsDrawer : null}
                color = {clicked ? 'warning' : grey[400]}
            >
                {menuItem}
            </IconButton>
        );
      })}
    </>
  );
}

export default RightTopBar