import React from 'react'
import { dialogLeftContainer, leftSection1, companyData, companyRightBox, divider1, companyData2 } from 'styles/processDialog';
import { Box, Divider, Typography, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FormTextField from 'components/FormTemplate/components/FormTextField';

const DialogLeftContent = ({processDialogData}) => {
    return (
        <Box sx = {dialogLeftContainer}>
            <Box sx = {leftSection1}>
                <Typography variant = 'body2'>Startform Name</Typography>
                <FormTextField label = 'Email'/>
                <FormTextField label = 'Description test' multiline />
            </Box>
            <Box sx = {leftSection1}>
                <Typography variant = 'body2'>Company data</Typography>
                <Box sx = {companyData}>
                    <Box sx = {companyData2}>
                        <DescriptionOutlinedIcon/>
                        <Divider orientation = 'vertical' sx = {divider1}/>
                    </Box>
                    <Box sx = {companyRightBox}>
                        <FormTextField label = 'Company name' />
                        <FormTextField label = 'Surname'/>
                        <RadioGroup defaultValue = 'first' sx = {{marginTop: 1}}>
                            <FormControlLabel value = 'company' label = 'Company' control = {<Radio />} />
                            <FormControlLabel value = 'person' label = 'Person' control = {<Radio />} />
                        </RadioGroup>
                    </Box>
                </Box>
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value = 'female' control = {<Radio />} label = 'Female' />
                        <FormControlLabel value = 'male' control = {<Radio />} label = 'Male' />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default DialogLeftContent