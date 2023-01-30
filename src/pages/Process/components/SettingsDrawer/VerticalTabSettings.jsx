import React, { useState } from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { settingsOptions } from 'api/data'
import { a11yProps } from 'utils/TabPanel'
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
    <Box sx = {{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '80vh' }} m = {2}>
      <Tabs
        orientation = 'vertical'
        value = {value}
        onChange = {handleChange}
        sx = {{ borderLeft: 1, borderRight: 1, borderColor: 'divider', '& .MuiTab-root.Mui-selected': {color: red[400] }, marginTop: 4, minWidth: 200 }}
        TabIndicatorProps = {{sx: {left: '0px', background: red[300]}}}
      >
        {settingsOptions.map((item, index) => {
          return (
            <Tab 
              key = {index} 
              label = {
                <Typography sx = {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
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