import React, { useContext, useEffect } from 'react'
import FormTemplate from '../../../components/FormTemplate/FormTemplate'
import FormTextField from '../../../components/FormTemplate/components/FormTextField'
import { useNavigate } from 'react-router-dom'
import { SnackbarContext } from '../../../contexts/SnackbarContext'
import { applyActionCode } from 'firebase/auth'
import { auth } from '../../../config/firebase/firebase'

const SignupFormStep2 = ({name, handleName, surname, handleSurname, workspace, handleWorkspace, actionCode}) => {
  const navigate = useNavigate();
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);

  useEffect(() => {
    applyActionCode(auth, actionCode)
      .then(() => {
        handleMessage("Email verified successfuly!");
        handleSeverity("success");
        openSnackBar();
      })
      .catch((error) => {
        handleMessage(error.message);
        handleSeverity("error");
        openSnackBar();
      });
  }, []);

  const handleSubmit2 = () => {
    //save info to firebase database then
    if (name !== "" && surname !== "" && workspace !== "") {
      navigate("/workspace");
    } else {
      handleMessage("Please fill all the required fields!");
      handleSeverity("warning");
      openSnackBar();
    };
  };

  return (
      <FormTemplate
        title = "Complete your profile"
        subtitle = "Insert all your info to procced with your workspace"
        buttonColor = "success"
        buttonText = "Complete now"
        buttonAction = {handleSubmit2}
      >
        <FormTextField 
          label = "Workspace"
          value = {workspace}
          onChangeHandler = {handleWorkspace}
        />
        <FormTextField 
          label = "Name"
          value = {name}
          onChangeHandler = {handleName}
        />
        <FormTextField 
          label = "Surname"
          value = {surname}
          onChangeHandler = {handleSurname}
        />
      </FormTemplate>
  )
}

export default SignupFormStep2