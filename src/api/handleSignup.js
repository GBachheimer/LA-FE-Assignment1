import { resendVerificationEmail } from './resendVerificationEmail'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'config/firebase/firebase'

export const handleSignup = (handleMessage, handleSeverity, openSnackBar, email, password, repeatPass, setDone) => {
    if (password !== repeatPass) {
      handleMessage('Wrong confirmation password!');
      handleSeverity('error');
      openSnackBar();
      return;
    };
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        if (userCredentials.user) {
            resendVerificationEmail(handleMessage, handleSeverity, openSnackBar, setDone);
        };
    })
    .then(() => {
        handleMessage('Please verify your email address before login!');
        handleSeverity('success');
        openSnackBar();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' | ' + errorMessage);
        switch (errorCode) {
        case 'auth/invalid-email' || 'auth/missing-email':
            handleMessage('Please provide a valid email address!');
            break;
        case 'auth/email-already-in-use':
            handleMessage('This email is already assigned to another account. If you are the owner please login!');
            break;
        case 'auth/weak-password':
            handleMessage('Please provide a strong password!');
            break;
        case 'auth/internal-error':
            handleMessage('Please provide a password!');
            break;
        default:
            handleMessage('There was a problem, please try again!');
        }
        handleSeverity('error');
        openSnackBar();
    });
};