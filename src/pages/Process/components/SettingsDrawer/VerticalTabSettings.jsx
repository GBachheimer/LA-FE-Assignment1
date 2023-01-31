import React, { useState } from 'react'
import { tabContainer, tabs, tabIndicator, tabTypo } from 'styles/processSettings'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { settingsOptions } from 'data/data'
import { a11yProps } from 'utils/a11yProps'
import SettingsDrawerContent from './SettingsDrawerContent'
import MembersHeader from './MembersHeader'
import MembersList from './MembersList'

const VerticalTabSettings = ({users}) => {
  const [value, setValue] = useState(0);
  const [searchUser, setSearchUser] = useState('');

  const handleSearchUser = (event) => {
    setSearchUser(event.target.value);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx = {tabContainer}>
      <Tabs
        orientation = 'vertical'
        value = {value}
        onChange = {handleChange}
        sx = {tabs}
        TabIndicatorProps = {tabIndicator}
      >
        {settingsOptions.map((item, index) => {
          return (
            <Tab 
              key = {index} 
              label = {
                <Typography sx = {tabTypo}>
                  {Object.entries(item)[0][1]}
                  {Object.keys(item)[0]}
                </Typography>
              }
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      <SettingsDrawerContent value = {value} index = {8}>
        <MembersHeader searchUser = {searchUser} handleSearchUser = {handleSearchUser}/>
        <MembersList users = {users} searchUser = {searchUser}/>
      </SettingsDrawerContent>
    </Box>
  )
}

export default VerticalTabSettings