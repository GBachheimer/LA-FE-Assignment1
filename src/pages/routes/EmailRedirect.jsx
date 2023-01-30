import React from 'react'
import { useLocation } from 'react-router-dom'
import ResetPassword from 'pages/ResetPassword/ResetPassword'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import Signup from 'pages/Signup/Signup'

const EmailRedirect = () => {
    const location = useLocation();
    const getParameterByName = new URLSearchParams(location.search);
    const mode = getParameterByName.get('mode');
    const actionCode = getParameterByName.get('oobCode');
    const continueUrl = getParameterByName.get('continueUrl');
    const lang = getParameterByName.get('lang') || 'en';

    return (
        <>
            {mode && mode === 'resetPassword' && 
                <ResetPassword step = '2'
                    actionCode = {actionCode}
                />
            }
            {mode && mode === 'verifyEmail' &&
                <Signup step = '2'
                    actionCode = {actionCode}
                />
            }
            {!mode && <PageNotFound />}
        </>
    );
}

export default EmailRedirect