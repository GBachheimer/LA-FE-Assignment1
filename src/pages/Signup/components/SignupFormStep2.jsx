import React, { useContext } from 'react'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { useNavigate } from 'react-router-dom'
import FormTextField from 'components/FormTemplate/components/FormTextField'
import FormTemplate from 'components/FormTemplate/FormTemplate'

const SignupFormStep2 = ({name, handleName, surname, handleSurname, workspace, handleWorkspace}) => {
  const navigate = useNavigate();
  const {handleMessage, handleSeverity, openSnackBar} = useContext(SnackbarContext);

  const handleAdditionalInfo = () => {
    //save info to firebase database/firestore then
    if (name !== '' && surname !== '' && workspace !== '') {
      navigate(`/workspace`);
    } else {
      handleMessage('Please fill all the required fields!');
      handleSeverity('warning');
      openSnackBar();
    };
  };

  return (
      <FormTemplate
        title = 'Complete your profile'
        subtitle = 'Insert all your info to procced with your workspace'
        buttonColor = 'success'
        buttonText = 'Complete now'
        buttonAction = {handleAdditionalInfo}
      >
        <FormTextField 
          label = 'Workspace'
          value = {workspace}
          onChangeHandler = {handleWorkspace}
        />
        <FormTextField 
          label = 'Name'
          value = {name}
          onChangeHandler = {handleName}
        />
        <FormTextField 
          label = 'Surname'
          value = {surname}
          onChangeHandler = {handleSurname}
        />
      </FormTemplate>
  )
}

export default SignupFormStep2