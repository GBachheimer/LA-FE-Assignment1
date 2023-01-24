import React from 'react'
import { TextField } from '@mui/material'

const FormTextField = ({label, value, onChangeHandler, type}) => {
  return (
    <TextField 
        required
        autoComplete = "true"
        id = "outlined-required"
        label = {label}
        value = {value ? value : ""}
        onChange = {onChangeHandler ? onChangeHandler : null}
        type = {type ? type : "text"}
        sx = {{
          width: "95%", 
          marginTop: "1vh",
          marginLeft: "1vh",
          marginBottom: "1vh",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: 3,
                },
          }
        }}
    />
  )
}

export default FormTextField