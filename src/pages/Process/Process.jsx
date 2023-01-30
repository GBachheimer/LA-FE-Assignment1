import React, { useState, useMemo } from 'react'
import SettingsDrawer from './components/SettingsDrawer/SettingsDrawer'
import ProcessDialog from './components/ProcessDialog/ProcessDialog'
import ProcessTopBar from './components/ProcessTopBar/ProcessTopBar'
import ProcessTable from './components/ProcessTable/ProcessTable'
import RightDrawer from './components/RightDrawer/RightDrawer'
import MenuDrawer from 'components/MenuDrawer/MenuDrawer'
import getUsers from 'api/getUsers'

const Process = () => {
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

  const TableWithUsers = useMemo(() => getUsers(ProcessTable), []);
  const RightDrawerWithUsers = useMemo(() => getUsers(RightDrawer), []);
  const SettingsDrawerWithUsers = useMemo(() => getUsers(SettingsDrawer), []);

  return (
    <MenuDrawer>
      <ProcessTopBar 
        openRightDrawer = {openRightDrawer}
        toggleRightDrawer = {toggleRightDrawer} 
        openSettings = {openSettings}
        toggleSettingsDrawer = {toggleSettingsDrawer}
      />
      <RightDrawerWithUsers
        openRightDrawer = {openRightDrawer} 
        toggleRightDrawer = {toggleRightDrawer}
      />
      <SettingsDrawerWithUsers 
        openSettings = {openSettings}
        toggleSettingsDrawer = {toggleSettingsDrawer}
      />
      <TableWithUsers 
        handleProcessDialogData = {handleProcessDialogData}
        toggleTableCardDialog = {toggleTableCardDialog}
      />
      <ProcessDialog
				openTableCard = {openTableCard}
				toggleTableCardDialog = {toggleTableCardDialog}
        processDialogData = {processDialogData}
			/>
    </MenuDrawer>
  )
}

export default Process