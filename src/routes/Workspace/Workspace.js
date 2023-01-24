import { Typography, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { useState, useId } from 'react'
import MenuDrawer from '../../components/MenuDrawer/MenuDrawer'
import ProcessCard from './components/ProcessCard'
import AddIcon from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors';
import NewProcessDialog from './components/NewProcessDialog'
import { SnackbarContext } from '../../contexts/SnackbarContext'
import { useNavigate, Outlet } from 'react-router-dom'

const Workspace = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [processName, setProcessName] = useState("");
  const [pickColor, setPickColor] = useState("");
  const [allProceses, setAllProceses] = useState([]);
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);
  const [processPrivacy, setProcessPrivacy] = useState();
  const name = "Fabrizio Nillo";
  const id = useId();
  const navigate = useNavigate();

  const openCreateProcessDialog = () => {
    setOpenDialog(true);
  };

  const closeCreateProcessDialog = () => {
    setOpenDialog(false)
  };

  const handleProcessPrivacy = (event) => {
    setProcessPrivacy(event.target.value);
  };

  const handleProcessName = (event) => {
    setProcessName(event.target.value)
  };

  const handlePickColor = (event) => {
    setPickColor(event.target.value)
  };

  const handleCreateProcess = () => {
    if (processName === "" || pickColor === "" || processPrivacy === "") {
      handleMessage("Please fill the required fields!");
      handleSeverity("error");
      openSnackBar();
      return;
    };
    if (allProceses.filter(process => process.name === processName).length > 0) {
      handleMessage("This name already exists, please choose another.");
      handleSeverity("error");
      openSnackBar();
      return;
    };
    const newProcess = { id: id, name: processName, pickedColor: pickColor, processPrivacy: processPrivacy };
    setAllProceses([ ...allProceses, newProcess ]);
    closeCreateProcessDialog();
  };

  const handleProcessButton = (processPrivacy, processName) => {
    if (processPrivacy === "private") {
      handleMessage("This is a private process.");
      handleSeverity("error");
      openSnackBar();
      return;
    };
    navigate(`/workspace/${processName}`);
  };

  const addIcon = <AddIcon sx = {{ color: grey[600] }}/>;

  return (
    <MenuDrawer>
      <Grid container item xs = {12} mt = {2} direction = "column">
        <Typography variant = "h5" ml = {2}>
          Welcome, {name}
        </Typography>
        <Grid item mt = {2} ml = {2}>
          <Typography variant = "body2" maxWidth = "40%">
            Work with your team mates, take track of your process 
            and close all tasks
          </Typography>
        </Grid>
        <Grid container item xs = {12} direction = "row" id = "processContainer">
          <ProcessCard 
            handleButton = {openCreateProcessDialog}
            backgroundColor = {grey[50]}
            processName = "Cretate a new process"
            borderColor = {grey[300]}
            borderStyle = "dashed"
            textColor = {grey[600]}
            icon = {addIcon}
          />
          {allProceses.map(process => {
            return (
              <ProcessCard key = {process.name}
                backgroundColor = {process.pickedColor}
                processName = {process.name}
                handleButton = {handleProcessButton}
                processPrivacy = {process.processPrivacy}
              />
            );
          })}
        </Grid>
      </Grid>
      <NewProcessDialog 
        closeDialog = {closeCreateProcessDialog} 
        open = {openDialog} 
        processName = {processName}
        handleProcessName = {handleProcessName}
        pickColor = {pickColor}
        handlePickColor = {handlePickColor}
        handleCreateProcess = {handleCreateProcess}
        processPrivacy = {processPrivacy}
        handleProcessPrivacy = {handleProcessPrivacy}
      />
      <Outlet />
    </MenuDrawer>
  )
}

export default Workspace