import React, { useState } from 'react'
import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer'
import ProcessDialog from './components/ProcessDialog/ProcessDialog'
import ProcessTopBar from './components/ProcessTopBar/ProcessTopBar'
import ProcessTable from './components/ProcessTable/ProcessTable'
import RightDrawer from './components/RightDrawer/RightDrawer'

const Process = ({users}) => {
  const [openRightDrawer, setOpenRightDrawer] = useState();
  const [openSettings, setOpenSettings] = useState(false);
  const [processDialogData, setProcessDialogData] = useState({});
  const [openTableCard, setOpenTableCard] = useState(false);

  const handleProcessDialogData = (user) => {
    setProcessDialogData(user)
  };

  const toggleTableCardDialog = () => {
		setOpenTableCard(!openTableCard);
	};

  const toggleRightDrawer = () => {
    setOpenRightDrawer(!openRightDrawer);
  };

  const toggleSettingsDrawer = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <>
      <ProcessTopBar 
        openRightDrawer = {openRightDrawer}
        toggleRightDrawer = {toggleRightDrawer} 
        openSettings = {openSettings}
        toggleSettingsDrawer = {toggleSettingsDrawer}
      />
      <RightDrawer
        openRightDrawer = {openRightDrawer} 
        toggleRightDrawer = {toggleRightDrawer}
        users = {users}
      />
      <SettingsDrawer 
        openSettings = {openSettings}
        toggleSettingsDrawer = {toggleSettingsDrawer}
        users = {users}
      />
      <ProcessTable 
        handleProcessDialogData = {handleProcessDialogData}
        toggleTableCardDialog = {toggleTableCardDialog}
        users = {users}
      />
      <ProcessDialog
				openTableCard = {openTableCard}
				toggleTableCardDialog = {toggleTableCardDialog}
        processDialogData = {processDialogData}
			/>
    </>
  )
}

export default Process