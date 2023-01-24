import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import SettingsDrawerContent from './SettingsDrawerContent';
import { red } from '@mui/material/colors';
import { settingsOptions } from '../../../../data/data';
import MembersHeader from './MembersHeader';
import MembersList from './MembersList';

export const a11yProps = (index) => {
  return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const VerticalTabSettings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx = {{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "80vh" }} m = {2}>
      <Tabs
        orientation = "vertical"
        value = {value}
        onChange = {handleChange}
        sx = {{ borderLeft: 1, borderColor: 'divider', borderRight: 1 }}
        TabIndicatorProps = {{sx: {left: "0px", background: red[300]}}}
      >
        {settingsOptions.map((item, index) => {
          return (
            <Tab 
              icon = {Object.entries(item)[0][1]}
              iconPosition = "start"
              key = {index} 
              label = {
                <Typography sx = {{textAlign : 'left', width: "90%"}}>
                  {Object.keys(item)[0]}
                </Typography>
              }
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      <SettingsDrawerContent value = {value} index = {8}>
        <MembersHeader />
        <MembersList/>
      </SettingsDrawerContent>
    </Box>
  )
}

export default VerticalTabSettings