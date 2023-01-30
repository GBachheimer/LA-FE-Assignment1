import React, { useState } from 'react'
import { Table, TableCell, TableRow, TableBody, Paper, TableContainer, Avatar } from '@mui/material'
import { grey } from '@mui/material/colors'
import ProcessTableDialog from '../ProcessDialog/ProcessDialog'
import theme from 'styles/theme'

const ProcessTable = ({users, handleProcessDialogData, toggleTableCardDialog}) => {

	const stringAvatar = (name) => {
		return {
		  sx: {
			bgcolor: theme.palette.primary.main,
			width: 24,
			height: 24,
			fontSize: 10,
			marginRight: 2,
		  },
		  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}

	return (
		<>
			<TableContainer component={Paper} sx = {{marginTop: 10}}>
				<Table sx = {{ minWidth: 650 }} size = 'small'>
					<TableBody>
						{Array.from(users).map((user, index) => {
							return (
								<TableRow
									key = {index}
									onClick = {() => {toggleTableCardDialog(); handleProcessDialogData(user)}}
								>	
									{Object.entries(user).map(([key, value], index) => {
										if (key === 'name' && typeof(value) !== 'object') {
											return ( 
												<TableCell key = {key} align = 'left' sx = {{border: `1px solid ${grey[400]}`, fontSize: 14, display: 'flex', alignItems: 'center'}}>
													<Avatar {...stringAvatar(value)} />
													{value}
												</TableCell>
											);
										};
										if (typeof(value) !== 'object') {
											return <TableCell key = {key} align = 'left' sx = {{border: `1px solid ${grey[400]}`, fontSize: 14}}>{value}</TableCell>
										};
										return null;
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default ProcessTable