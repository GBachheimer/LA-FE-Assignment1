import React from 'react'
import { Table, TableCell, TableRow, TableBody, Paper, TableContainer, Avatar } from '@mui/material'
import { tableWidth, tableContainer, tableCell, tableCell2 } from 'styles/processTable'
import { stringAvatar } from 'utils/stringAvatar'

const ProcessTable = ({users, handleProcessDialogData, toggleTableCardDialog}) => {
	return (
		<>
			<TableContainer component={Paper} sx = {tableContainer}>
				<Table sx = {tableWidth} size = 'small'>
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
												<TableCell key = {key} align = 'left' sx = {tableCell}>
													<Avatar {...stringAvatar(value)} />
													{value}
												</TableCell>
											);
										};
										if (typeof(value) !== 'object') {
											return (
												<TableCell key = {key} align = 'left' sx = {tableCell2}>
													{value}
												</TableCell>
											);
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