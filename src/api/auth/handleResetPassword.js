import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from 'config/firebase/firebase'

export const handleResetPass = (handleMessage, handleSeverity, openSnackBar, email, setDone) => {
    sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login'
    })
    .then(() => {
        handleMessage('Password reset email sent!');
        handleSeverity('success');
        openSnackBar();
        setDone(true);
    })
    .catch((error) => {
        const errorCode = error.code;
        handleMessage('Something went wrong!');
        if(errorCode === 'auth/missing-email' || errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found') {
            handleMessage('Please provide a valid email address!');
        };
        handleSeverity('error');
        openSnackBar();
    });
};