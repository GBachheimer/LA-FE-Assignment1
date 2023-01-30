import React from 'react'
import { Box, Button, Divider } from '@mui/material'
import { grey } from '@mui/material/colors'

const LeftTopBar = ({topBarOptions, topBarItemAction}) => {
  return(
    <>
      {topBarOptions.map((optionItem) => {
        return (
            <Box 
              key = {optionItem[0]} 
              display = 'flex' 
              justifyContent = 'center' 
              alignItems = 'center'
            >
                <Button 
                    onClick = {topBarItemAction} 
                    startIcon = {optionItem[1]} 
                    sx = {{fontSize: 12, minWidth: '7%', color: grey[700]}} 
                    size = 'small'
                    endIcon = {optionItem[2] ? optionItem[2] : null}
                >
                    {optionItem[0]}
                </Button>
                <Divider 
                    orientation = 'vertical' 
                    sx ={{height: '50px', marginLeft: 1, marginRight: 1}}
                />
            </Box>
        );
      })}
    </>
  );
}

export default LeftTopBar