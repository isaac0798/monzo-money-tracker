const validatePassword = (passwordSelecter: string) => {
    const passwordAttempt = document.getElementById(passwordSelecter) as HTMLInputElement;

    if (!passwordAttempt) {
        return false;
    }

    if (passwordAttempt.value === process.env.REACT_APP_PASSWORD){
        sessionStorage.setItem("isAuth", "true");
        return true; 
    }

    return false;
}

export default validatePassword