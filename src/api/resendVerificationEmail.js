import { sendEmailVerification } from 'firebase/auth'
import { auth } from 'config/firebase/firebase'

export const resendVerificationEmail = (handleMessage, handleSeverity, openSnackBar, setDone) => {
    sendEmailVerification(auth.currentUser, {
        url: 'http://localhost:3000/signup/2'
    })
    .then(() => {
        setDone(true);
    })
    .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/too-many-requests':
            handleMessage('Previous email is still valid. Search in spam/junk folder or try again later.');
            break;
          default:
            handleMessage('Create an account first!');
        }
        handleSeverity('warning');
        openSnackBar();
    });
};