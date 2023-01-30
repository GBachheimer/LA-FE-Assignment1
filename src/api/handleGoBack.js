export const handleGoBack = (navigate, user) => {
    if (user) {
      navigate('/workspace');
    } else {
      navigate('/login');
    };
};