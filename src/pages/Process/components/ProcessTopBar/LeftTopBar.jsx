import React from 'react'
import { leftTopBar, leftButton, divider } from 'styles/processTopBar'
import { Box, Button, Divider } from '@mui/material'

const LeftTopBar = ({topBarOptions, topBarItemAction}) => {
  return(
    <>
      {topBarOptions.map((optionItem) => {
        return (
            <Box key = {optionItem[0]} sx = {leftTopBar}>
                <Button 
                    onClick = {topBarItemAction} 
                    startIcon = {optionItem[1]} 
                    sx = {leftButton} 
                    size = 'small'
                    endIcon = {optionItem[2] ? optionItem[2] : null}
                >
                    {optionItem[0]}
                </Button>
                <Divider orientation = 'vertical' sx = {divider}/>
            </Box>
        );
      })}
    </>
  );
}

export default LeftTopBar