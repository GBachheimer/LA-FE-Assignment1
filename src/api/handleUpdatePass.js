import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth'
import { auth } from 'config/firebase/firebase'

export const handleUpdatePass = (handleMessage, handleSeverity, openSnackBar, password, confirmPass, navigate, actionCode) => {
    verifyPasswordResetCode(auth, actionCode)
    .catch((error) => {
      handleMessage(`Something went wrong! ${error.message}`);
      handleSeverity('error');
      openSnackBar();
    });

    if (password !== confirmPass) {
      handleMessage('Wrong confirmation password!');
      handleSeverity('error');
      openSnackBar();
      return;
    };

    confirmPasswordReset(auth, actionCode, password)
      .then(() => {
        handleMessage(`Password update successfuly!`);
        handleSeverity('success');
        openSnackBar();
        navigate('/login');
      })
      .catch((error) => {
        handleMessage(`Something went wrong! ${error.code}`);
        handleSeverity('error');
        openSnackBar();
      });
}