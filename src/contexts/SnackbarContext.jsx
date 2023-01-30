import React, { createContext, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

export const SnackbarContext = createContext();

export const SnackbarProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState();
    const [severity, setSeverity] = useState('info');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        closeSnackBar();
    };
    
    const openSnackBar = () => {
        setOpen(true);
    };

    const closeSnackBar = () => {
        setOpen(false)
    }

    const handleMessage = (message) => {
        setMessage(message)
    };

    const handleSeverity = (severity) => {
        setSeverity(severity);
    };

    return (
        <SnackbarContext.Provider value = {{message, open, severity, openSnackBar, handleMessage, handleSeverity, closeSnackBar}}>
            {children}
            <Snackbar open = {open} autoHideDuration = {6000} onClose = {handleClose}>
                <Alert onClose = {handleClose} severity = {severity} sx = {{ width: '100%' }}>
                {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};