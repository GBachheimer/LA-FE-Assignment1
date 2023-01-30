import React from 'react'
import { Box, Divider, Typography, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FormTextField from 'components/FormTemplate/components/FormTextField';

const DialogLeftContent = ({processDialogData}) => {
    return (
        <Box sx = {{marginLeft: '3%', display: 'flex', flexDirection: 'column', width: '94%', height: '80%', overflow: 'scroll'}}>
            <Box sx = {{display: 'flex', flexDirection: 'column'}}>
                <Typography variant = 'body2'>Startform Name</Typography>
                <FormTextField label = "Email"/>
                <FormTextField label = "Description test" multiline />
            </Box>
            <Box sx = {{display: 'flex', flexDirection: 'column'}}>
                <Typography variant = 'body2'>Company data</Typography>
                <Box sx = {{display: 'flex', flexDirection: 'row'}}>
                    <Box sx = {{display: 'flex', flexDirection: 'column', width: '10%', alignItems: 'center', marginTop: 1}}>
                        <DescriptionOutlinedIcon/>
                        <Divider orientation = 'vertical' sx = {{border: 2, borderColor: 'divider', marginTop: 1, maxHeight: '78%'}}/>
                    </Box>
                    <Box sx = {{display: 'flex', flexDirection: 'column', marginTop: 1, width: '90%'}}>
                        <FormTextField label = "Company name" />
                        <FormTextField label = "Surname"/>
                        <RadioGroup name="use-radio-group" defaultValue="first" sx = {{marginTop: 1}}>
                            <FormControlLabel value="company" label="Company" control={<Radio />} />
                            <FormControlLabel value="person" label="Person" control={<Radio />} />
                        </RadioGroup>
                    </Box>
                </Box>
                <Box>
                <FormControl>
                    <FormLabel id="controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default DialogLeftContent