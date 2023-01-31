import React, { useState } from 'react'
import { Box, TableCell, IconButton, Table, TableBody, TableContainer, Paper, TableRow, Checkbox } from '@mui/material'
import { handleSelectAllClick, handleClick } from 'utils/handleSelectMembers'
import { grey } from '@mui/material/colors'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import EnhancedTableHead from './EnhancedTableHead'
import SelectPermission from './SelectPermission'

const MemberList = ({users, searchUser}) => {
  const [selected, setSelected] = useState([]);
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchUser));
  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box sx = {{ width: '100%' }}>
      <Paper sx = {{ width: '100%', mb: 2 }}>
        <TableContainer style = {{ maxHeight: 530 }}>
          <Table sx = {{ minWidth: 600 }} aria-labelledby = "tableTitle" size = 'small' stickyHeader>
            <EnhancedTableHead
              numSelected = {selected.length}
              onSelectAllClick = {(event) => handleSelectAllClick(event, users, setSelected)}
              rowCount = {Array.from(users).length}
              user = {users[0]}
            />
            <TableBody>
                {filteredUsers.map((user, index) => {
                  const isItemSelected = isSelected(user.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role = "checkbox"
                      aria-checked = {isItemSelected}
                      tabIndex = {-1}
                      key = {user.name}
                      selected = {isItemSelected}
                    >
                      <TableCell padding = "checkbox">
                        <Checkbox
                          color = "warning"
                          checked = {isItemSelected}
                          inputProps = {{
                            'aria-labelledby': labelId,
                          }}
                          onClick = {() => handleClick(user.name, selected, setSelected)}
                        />
                      </TableCell>
                      <TableCell
                        component = "th"
                        id = {labelId}
                        scope = "row"
                        padding = "none"
                      >
                        {user.name}
                      </TableCell>
                      <TableCell align = "left">{user.email}</TableCell>
                      <TableCell align = "left">
                        <SelectPermission />
                      </TableCell>
                      <TableCell align = "right"><IconButton><DeleteForeverOutlinedIcon fontSize = 'small' color = {grey[400]}/></IconButton></TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default MemberList