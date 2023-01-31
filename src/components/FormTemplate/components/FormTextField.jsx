import React from 'react'
import { TextField } from '@mui/material'
import { formTextField } from 'styles/formTemplate'

const FormTextField = ({label, value, onChangeHandler, type}) => {
  return (
    <TextField 
        required
        autoComplete = 'true'
        label = {label}
        value = {value ? value : ''}
        onChange = {onChangeHandler ? onChangeHandler : null}
        type = {type ? type : 'text'}
        sx = {formTextField}
    />
  )
}

export default FormTextField