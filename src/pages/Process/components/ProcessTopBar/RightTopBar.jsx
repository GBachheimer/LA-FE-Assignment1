import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { rightTopBarIcon } from 'styles/processTopBar';

const RightTopBar = ({topBarMenu, toggleShoppingBagPopper, toggleSettingsDrawer}) => {
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
                sx = {rightTopBarIcon}
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