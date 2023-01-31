import React from 'react'
import { formHeader } from 'styles/formTemplate'
import { Box } from '@mui/material'
import CustomTypography from 'components/CustomTypography'

const FormHeader = ({title, subtitle}) => {
  return (
    <Box sx = {formHeader}>
        <CustomTypography variant = 'h5'>
            {title}
        </CustomTypography>
        <CustomTypography>
            {subtitle}
        </CustomTypography>
    </Box>
  )
}

export default FormHeader