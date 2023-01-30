import React from 'react'
import { Dialog, Box, Divider } from '@mui/material'
import { Transition } from 'utils/transitionsDrawer'
import SettingsDrawerContent from './SettingsDrawerContent'
import SettingsDrawerHeader from './SettingsDrawerHeader'
import VerticalTabSettings from './VerticalTabSettings'
import 'pages/Process/procesStyle.css'

const SettingsDrawer = ({openSettings, toggleSettingsDrawer, users}) => {
  return (
    <Box>
      <Dialog
        open = {openSettings}
        TransitionComponent = {Transition}
        fullWidth = 'xl'
        maxWidth = 'xl'
        onClose = {toggleSettingsDrawer}
        PaperProps = {{style: {borderRadius: 15}}}
        scroll = 'paper'
      >
        <SettingsDrawerHeader toggleSettingsDrawer = {toggleSettingsDrawer}/>
        <Box display = 'flex' justifyContent = 'space-between' mt = {2}>
          <VerticalTabSettings users = {users}/>
        </Box>
      </Dialog>
    </Box>
  )
}

export default SettingsDrawer