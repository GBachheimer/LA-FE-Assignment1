import React from 'react'
import { Dialog, Box, Divider } from '@mui/material'
import { Transition } from '../../../../utils/transitionsDrawer'
import SettingsDrawerHeader from './SettingsDrawerHeader'
import SettingsDrawerContent from './SettingsDrawerContent'
import VerticalTabSettings from './VerticalTabSettings'

const SettingsDrawer = ({openSettings, toggleSettingsDrawer}) => {
  return (
    <Box>
      <Dialog
        open = {openSettings}
        TransitionComponent = {Transition}
        fullWidth = "xl"
        maxWidth = "xl"
        onClose = {toggleSettingsDrawer}
        PaperProps = {{style: {borderRadius: 15}}}
        scroll = "paper"
      >
        <SettingsDrawerHeader toggleSettingsDrawer = {toggleSettingsDrawer}/>
        <Box display = "flex" justifyContent = "space-between" mt = {2}>
          <VerticalTabSettings/>
          <Divider orientation = "vertical" flexItem variant = "middle"/>
          <SettingsDrawerContent/>
        </Box>
      </Dialog>
    </Box>
  )
}

export default SettingsDrawer