import axios from 'axios';

const badAuthCode = "unauthorized.bad_authorization_code.used";
const getAccessToken = async (authCode: string) => {
    const formData = new FormData();
    formData.append('grant_type', 'authorization_code');
    formData.append('client_id', 'oauth2client_00009zGLt53akZSyOSkcwD');
    formData.append('client_secret', 'mnzconf.f+gZU2CGBbYlb37a4Bulown83xR1sIomwXECw2wPFxoPrqEF6dzcVToLyhXGV5hQ4nVMXxMkMcYxIoqkUe5/');
    formData.append('redirect_uri', 'http://localhost:3600/moneytracker');
    formData.append('code', `${authCode}`);

    const response = await axios.post(
        "https://api.monzo.com/oauth2/token", 
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    console.log(response);
    return response;
}

export default getAccessToken;