import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/components/FormTextField'
import { SnackbarContext } from '../../../contexts/SnackbarContext'
import { auth } from '../../../config/firebase/firebase'
import { verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const ResetPasswordStep2 = ({actionCode}) => {
  const [password, setPassword] = useState("");
  const [confirmPass, setCorfirmPass] = useState("");
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);
  const navigate = useNavigate();

  useEffect(() => {
    verifyPasswordResetCode(auth, actionCode)
      .catch((error) => {
        handleMessage(`Something went wrong! ${error.message}`);
        handleSeverity("error");
        openSnackBar();
      });
  }, [])

  const handleUpdatePass = (event) => {
    event.preventDefault();
    if (password !== confirmPass) {
      handleMessage("Wrong confirmation password!");
      handleSeverity("error");
      openSnackBar();
      return;
    };
    confirmPasswordReset(auth, actionCode, password)
      .then(() => {
        handleMessage(`Password update successfuly!`);
        handleSeverity("success");
        openSnackBar();
        navigate("/login");
      })
      .catch((error) => {
        handleMessage(`Something went wrong! ${error.code}`);
        handleSeverity("error");
        openSnackBar();
      });
  }

  return (
      <FormTemplate
        title = "Insert new password"
        subtitle = "Enter your new password to access the platform"
        buttonColor = "warning"
        buttonText = "Create new password"
        buttonAction = {handleUpdatePass}
      >
        <FormTextField 
          label = "New password"
          value = {password}
          onChangeHandler = {(event) => setPassword(event.target.value)}
        />
        <FormTextField 
          label = "Confirm new password"
          value = {confirmPass}
          onChangeHandler = {(event) => setCorfirmPass(event.target.value)}
        />
      </FormTemplate>
  )
}

export default ResetPasswordStep2