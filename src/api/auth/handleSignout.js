import { auth } from "config/firebase/firebase";
import { signOut } from "firebase/auth";

export const handleSignout = (handleMessage, handleSeverity, openSnackBar, navigate) => {
    signOut(auth)
    .then(() => {
    handleMessage('Sign out successfuly!');
    handleSeverity('success');
    openSnackBar();
    navigate('/login');
    })
    .catch((error) => {
    handleMessage('Sign out error!');
    handleSeverity('error');
    openSnackBar();
    });
};