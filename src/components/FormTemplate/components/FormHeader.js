import React from 'react'
import { Box } from '@mui/material'
import CustomTypography from '../../CustomTypography'

const FormHeader = ({title, subtitle}) => {
  return (
    <Box mb = {3}>
        <CustomTypography variant = "h5">
            {title}
        </CustomTypography>
        <CustomTypography>
            {subtitle}
        </CustomTypography>
    </Box>
  )
}

export default FormHeader