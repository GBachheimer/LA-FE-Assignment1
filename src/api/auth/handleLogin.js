import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from 'config/firebase/firebase'

export const handleLogin = (handleMessage, handleSeverity, openSnackBar, email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        if (!userCredential.user.emailVerified) {
            handleMessage('Please verify your email!');
            handleSeverity('warning');
            openSnackBar();
            signOut(auth);
            return;
        };
        handleMessage('Login successful!');
        handleSeverity('success');
        openSnackBar();
        navigate('/workspace');
    })
    .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        switch (errorCode) {
            case 'auth/missing-email':
                handleMessage('Please provide an email!');
                break;
            case 'auth/wrong-password':
                handleMessage('Wrong password!');
                break;
            case 'auth/invalid-email':
                handleMessage('Wrong email address!');
                break;
            case 'auth/internal-error':
                handleMessage('Please provide a valid email or password!');
                break;
            case 'auth/user-not-found':
                handleMessage('This account doesn\'t exists!');
                break;
            default: 
                handleMessage('There was a problem, please try again!');
        };
        handleSeverity('error');
        openSnackBar();
    });
};