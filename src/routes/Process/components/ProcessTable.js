import React from 'react'
import { Table, TableCell, TableRow, TableBody, Paper, TableContainer } from '@mui/material'
import { users } from '../../../data/data';

const ProcessTable = () => {

  return (
    <TableContainer component={Paper} sx = {{marginTop: 10}}>
      <Table sx = {{ minWidth: 650 }}>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1  } }}
            >
              <TableCell component="th" scope="row" sx = {{border: "1px solid black"}}>{user.project}</TableCell>
              <TableCell align="left" sx = {{border: "1px solid black"}}>{user.name}</TableCell>
              <TableCell align="left" sx = {{border: "1px solid black"}}>{user.email}</TableCell>
              <TableCell align="left" sx = {{border: "1px solid black"}}>{user.phone}</TableCell>
              <TableCell align="left" sx = {{border: "1px solid black"}}>{user.randomId}</TableCell>
              <TableCell align="left" sx = {{border: "1px solid black"}}>{user.supervizor}</TableCell>
              <TableCell align="left" sx = {{border: "1px solid black"}}>{user.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProcessTable