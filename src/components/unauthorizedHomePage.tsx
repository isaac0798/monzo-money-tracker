import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import '../css/UnauthorizedPage.css';
import validatePassword from '../validators/validatePassword';
import Welcome from '../components/welcomeComponent';

const UnauthorizedPage = () => {
    const [redirect, setRedirect] = useState(false);
    const handleSubmit = (isValid) => {
       setRedirect(true); 
    }

    if (redirect) {
        return <Redirect to="/authorize" />
    }

    return (
        <div className="App">
            <Welcome message="Hello Isaac!, Lets save that money! If you are Isaac 👀" />
            <input type="password" id="passwordInserter" />
            <input type="submit" onClick={() => {
                const isValid = validatePassword("passwordInserter");
                handleSubmit(isValid);
            }} />
        </div>
    );
}

export default UnauthorizedPage;