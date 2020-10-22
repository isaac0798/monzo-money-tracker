import axios from 'axios';

const authenticateUser = async (accessToken: string) => {
    console.log(`Bearer ${accessToken}`)
    const {data} = await axios.get('https://api.monzo.com/ping/whoami', {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    console.log(data.authenticated);
    return data.authenticated;
}

export default authenticateUser;