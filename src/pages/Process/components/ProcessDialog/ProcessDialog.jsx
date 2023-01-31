import React from 'react'
import { Transition } from 'utils/transitionsDrawer'
import { Box, Dialog } from '@mui/material'
import ProcessDialogContent from './components/ProcessDialogContent'
import ProcessDialogTopBar from './components/ProcessDialogTopBar'
import ProcessDialogFooter from './components/ProcessDialogFooter'
import { dialogPaper } from 'styles/processDialog'

const ProcessDialog = ({openTableCard, toggleTableCardDialog, processDialogData}) => {
  return (
      <Dialog
        open = {openTableCard}
        TransitionComponent = {Transition}
        fullWidth = {true}
        maxWidth = 'xl'
        onClose = {toggleTableCardDialog}
        PaperProps = {{style: dialogPaper}}
        scroll = 'paper'
      >
        <ProcessDialogTopBar toggleTableCardDialog = {toggleTableCardDialog}/>
        <ProcessDialogContent processDialogData = {processDialogData}/>
        <ProcessDialogFooter />
      </Dialog>
  )
}

export default ProcessDialog