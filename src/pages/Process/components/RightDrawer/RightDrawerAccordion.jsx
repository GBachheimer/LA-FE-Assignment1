import React from 'react'
import { Typography } from '@mui/material'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import AccordionLayer from './AccordionLayer'


const RightDrawerAccordion = ({user}) => {
    return (
        Object.entries(user).map((userDetail) => {
            if (userDetail[0] === 'id') {
                return <Typography>{userDetail[0]}: {userDetail[1]}</Typography>;
            }
            if (typeof(userDetail[1]) === 'object') {
                return ( <AccordionLayer object = {userDetail[1]} name = {userDetail[0]}/> );
            }
            return <FormTextField label = {userDetail[0]} value = {userDetail[1]} />
        })
    )
}

export default RightDrawerAccordion