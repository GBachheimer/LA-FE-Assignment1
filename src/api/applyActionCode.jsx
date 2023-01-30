import React, { useContext, useState, useEffect } from 'react'
import { SnackbarContext } from 'contexts/SnackbarContext'
import { auth } from 'config/firebase/firebase'
import PageNotFound from 'pages/PageNotFound/PageNotFound'

const applyActionCode = (Component) => {
  return (props) => {
    const [actionCode, setActionCode] = useState(false);
    const { handleMessage, handleSeverity, openSnackBar } = useContext(SnackbarContext);

    useEffect(() => {
        applyActionCode(auth, props.actionCode)
        .then(() => {
            handleMessage('Email verified successfuly!');
            handleSeverity('success');
            openSnackBar();
            setActionCode(true);
        })
        .catch((error) => {
            handleMessage(error.message);
            handleSeverity('error');
            openSnackBar();
        });
    }, [props.actionCode]);

    if (!actionCode) {
        return <PageNotFound />
    };

    return <Component {...props} />
  }
}

export default applyActionCode