import React from 'react'
import { Transition } from 'utils/transitionsDrawer'
import { Box, Dialog } from '@mui/material'

const ProcessTableDialog = ({openTableCard, toggleTableCardDialog}) => {
  return (
    <Box>
        <Dialog
        open = {openTableCard}
        TransitionComponent = {Transition}
        fullWidth = {true}
        maxWidth = 'xl'
        onClose = {toggleTableCardDialog}
        PaperProps = {{style: {borderRadius: 15, height: '80vh'}}}
        scroll = 'paper'
        >
            <Box display = 'flex' justifyContent = 'space-between' mt = {2}>

            </Box>
        </Dialog>
    </Box>
  )
}

export default ProcessTableDialog