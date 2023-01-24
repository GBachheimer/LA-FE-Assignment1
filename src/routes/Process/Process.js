import * as React from 'react';
import { useState } from 'react';
import MenuDrawer from '../../components/MenuDrawer/MenuDrawer'
import ProcessTable from './components/ProcessTable/ProcessTable';
import ProcessTopBar from './components/ProcessTopBar/ProcessTopBar';
import RightDrawer from './components/RightDrawer/RightDrawer';
import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer';

const Process = () => {
  const [openRightDrawer, setOpenRightDrawer] = useState();
  const [openSettings, setOpenSettings] = useState(false);

  const toggleRightDrawer = () => {
    setOpenRightDrawer(!openRightDrawer);
  };

  const toggleSettingsDrawer = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <MenuDrawer>
      <ProcessTopBar 
        openRightDrawer = {openRightDrawer}
        toggleRightDrawer = {toggleRightDrawer} 
        openSettings = {openSettings}
        toggleSettingsDrawer = {toggleSettingsDrawer}
      />
      <RightDrawer
        openRightDrawer = {openRightDrawer} 
        toggleRightDrawer = {toggleRightDrawer} 
      />
      <SettingsDrawer 
        openSettings = {openSettings}
        toggleSettingsDrawer = {toggleSettingsDrawer}
      />
      <ProcessTable />
    </MenuDrawer>
  )
}

export default Process