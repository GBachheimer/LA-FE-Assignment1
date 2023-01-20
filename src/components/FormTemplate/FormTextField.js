import React from 'react'
import { TextField } from '@mui/material'

const FormTextField = ({label, value, onChangeHandler, type}) => {
  return (
    <TextField 
        required
        autoComplete = "true"
        id = "outlined-required"
        label = {label}
        value = {value}
        onChange = {onChangeHandler}
        type = {type}
        sx = {{width: "100%", marginTop: "2vh",
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: 3,
            },
        }}}
    />
  )
}

export default FormTextField