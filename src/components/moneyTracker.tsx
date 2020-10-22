import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import getAccessToken from '../requests/accessToken';
import authenticateUser from '../requests/authenticateUser';

const MoneyTracker = () => {
    const [accesstok, setAccesstok] = useState('');
    const [authenticated, setAuthentication] = useState(false);
    const params = new URLSearchParams(window.location.search);
    const tempAuthCode = params.get('code');

    useEffect(() => {
        const getToken = async (tempAuthCode) => {
            const res = await getAccessToken(tempAuthCode);
            setAccesstok(res.data.access_token);
        }

        const getAuth = async (accesstok) => {
            const res = await authenticateUser(accesstok);
            setAuthentication(res);
        }

        accesstok ? getAuth(accesstok) : getToken(tempAuthCode);
    }, [accesstok]);

    if (!tempAuthCode) {
        return <Redirect to="/authorize" />
    }

    if (accesstok && authenticated) {
        const accessGiven = window.confirm("Have you given access from the app");
        if (accessGiven) {
            sessionStorage.setItem('accessToken', accesstok);
            return <Redirect to="/" />
        }
    }

    return <h1>Waiting...</h1>;
}

export default MoneyTracker;