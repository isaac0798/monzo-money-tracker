import React from 'react';
import UnauthorizedPage from './unauthorizedHomePage';
import MoneyInfoComponent from './moneyComponents/moneyInfoCompenent';

const HomePage = () => {
    if (!sessionStorage.getItem('accessToken')) {
        return <UnauthorizedPage />
    }

    return <MoneyInfoComponent accessToken={sessionStorage.getItem('accessToken') || ''} />
}

export default HomePage;