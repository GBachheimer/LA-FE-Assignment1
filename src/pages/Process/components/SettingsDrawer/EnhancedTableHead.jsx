import React from 'react'
import { TableRow, TableHead, TableCell, Checkbox, Typography, Box, IconButton  } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const EnhancedTableHead = (props) => {
    const { onSelectAllClick, numSelected, rowCount } = props;
  
    return (
        <TableHead sx = {{backgroundColor: '#F6F8FA'}}>
            <TableRow>
            <TableCell padding = 'checkbox'>
                <Checkbox
                    color = 'warning'
                    indeterminate = {numSelected > 0 && numSelected < rowCount}
                    checked = {rowCount > 0 && numSelected === rowCount}
                    onChange = {onSelectAllClick}
                    inputProps = {{'aria-label': 'select all desserts',}}
                />
            </TableCell>
                <TableCell align = 'left'>Name</TableCell>
                <TableCell align = 'left'>Email</TableCell>
                <TableCell align = 'left'>
                    <Box display = 'flex' alignItems = 'center'>
                        <Typography>Permissions</Typography>
                        <IconButton sx = {{marginLeft: 1}}>
                            <InfoOutlinedIcon fontSize = 'small' />
                        </IconButton>
                    </Box>
                </TableCell>
                <TableCell align = 'left'></TableCell>
            </TableRow>
        </TableHead>
    );
  }

  export default EnhancedTableHead