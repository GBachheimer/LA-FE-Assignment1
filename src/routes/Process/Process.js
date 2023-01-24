import * as React from 'react';
import { useState } from 'react';
import MenuDrawer from '../../components/MenuDrawer/MenuDrawer'
import ProcessTable from './components/ProcessTable';
import ProcessTopBar from './components/ProcessTopBar/ProcessTopBar';
import RightDrawer from './components/RightDrawer/RightDrawer';

const Process = () => {
  const [openDrawer, setOpenDrawer] = useState();
  const toggleDrawer = () => {
      setOpenDrawer(!openDrawer);
  };

  return (
    <MenuDrawer>
        <ProcessTopBar toggleDrawer = {toggleDrawer} opened = {openDrawer}/>
        <RightDrawer opened = {openDrawer} toggleDrawer = {toggleDrawer} />
        <ProcessTable />
    </MenuDrawer>
  )
}

export default Process