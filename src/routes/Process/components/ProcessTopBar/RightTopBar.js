import React from 'react'
import { IconButton } from '@mui/material';

const RightTopBar = ({topBarMenu, toggleShoppingBagPopper}) => {
  return (
    <>
      {topBarMenu.map((menuItem, index) => {
        return(
            <IconButton 
                key = {index} 
                sx = {{marginLeft: 0.5, marginRight: 0.5}}
                onClick = {index === 0 ? toggleShoppingBagPopper : null}
            >
                {menuItem}
            </IconButton>
        );
      })}
    </>
  );
}

export default RightTopBar