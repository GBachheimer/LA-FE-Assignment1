import React, { useContext, useState } from 'react'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { handleUpdatePass } from 'api/auth/handleUpdatePass'
import { useNavigate } from 'react-router-dom'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import FormTemplate from 'components/FormTemplate/FormTemplate'

const ResetPasswordStep2 = ({actionCode}) => {
  const [password, setPassword] = useState('');
  const [confirmPass, setCorfirmPass] = useState('');
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);
  const navigate = useNavigate();

  return (
      <FormTemplate
        title = 'Insert new password'
        subtitle = 'Enter your new password to access the platform'
        buttonColor = 'warning'
        buttonText = 'Create new password'
        buttonAction = {() => handleUpdatePass(handleMessage, handleSeverity, openSnackBar, password, confirmPass, navigate, actionCode)}
      >
        <FormTextField 
          label = 'New password'
          value = {password}
          onChangeHandler = {(event) => setPassword(event.target.value)}
          type = 'password'
        />
        <FormTextField 
          label = 'Confirm new password'
          value = {confirmPass}
          onChangeHandler = {(event) => setCorfirmPass(event.target.value)}
          type = 'password'
        />
      </FormTemplate>
  )
}

export default ResetPasswordStep2