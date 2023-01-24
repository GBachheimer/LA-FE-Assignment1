import React from 'react'
import { useState } from 'react';
import { Table, TableCell, TableRow, TableBody, Paper, TableContainer } from '@mui/material'
import { users } from '../../../../data/data';
import ProcessTableDialog from './ProcessTableDialog';

const ProcessTable = () => {
  const [openTableCard, setOpenTableCard] = useState();

  const toggleTableCardDialog = () => {
    setOpenTableCard(!openTableCard);
  };

  return (
    <>
      <TableContainer component={Paper} sx = {{marginTop: 10}}>
        <Table sx = {{ minWidth: 650 }}>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key = {user.name}
                sx = {{ '&:last-child td, &:last-child th': { border: 1  } }}
                onClick = {toggleTableCardDialog}
              >
                <TableCell component = "th" scope="row" sx = {{border: "1px solid black"}}>{user.project}</TableCell>
                <TableCell align = "left" sx = {{border: "1px solid black"}}>{user.name}</TableCell>
                <TableCell align = "left" sx = {{border: "1px solid black"}}>{user.email}</TableCell>
                <TableCell align = "left" sx = {{border: "1px solid black"}}>{user.phone}</TableCell>
                <TableCell align = "left" sx = {{border: "1px solid black"}}>{user.randomId}</TableCell>
                <TableCell align = "left" sx = {{border: "1px solid black"}}>{user.supervizor}</TableCell>
                <TableCell align = "left" sx = {{border: "1px solid black"}}>{user.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ProcessTableDialog
        openTableCard = {openTableCard}
        toggleTableCardDialog = {toggleTableCardDialog}
      />
    </>
  )
}

export default ProcessTable