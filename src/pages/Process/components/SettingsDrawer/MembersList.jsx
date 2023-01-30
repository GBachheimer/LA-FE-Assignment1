import React, { useState } from 'react';
import { Box, TableCell, IconButton, Table, TableBody, TableContainer, Paper, TableRow, Checkbox } from '@mui/material';
import { grey } from '@mui/material/colors';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EnhancedTableHead from './EnhancedTableHead';
import SelectPermission from './SelectPermission';

const MemberList = ({users, searchUser}) => {
  const [selected, setSelected] = useState([]);
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchUser));

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    switch (selectedIndex) {
      case -1:
        newSelected = newSelected.concat(selected, name);
        break;
      case 0:
        newSelected = newSelected.concat(selected.slice(1));
        break;
      case selected.length - 1:
        newSelected = newSelected.concat(selected.slice(0, -1));
        break;
      case (selectedIndex > 0):
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
        break;
      default: return;
    };
    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box sx = {{ width: '100%' }}>
      <Paper sx = {{ width: '100%', mb: 2 }}>
        <TableContainer style={{ maxHeight: 530 }}>
          <Table
            sx = {{ minWidth: 600 }}
            aria-labelledby = "tableTitle"
            size = 'small'
            stickyHeader 
          >
            <EnhancedTableHead
              numSelected = {selected.length}
              onSelectAllClick = {handleSelectAllClick}
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
                          onClick = {() => handleClick(user.name)}
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