import React from 'react';

import Balance from './balanceComponent';
import Transaction from './transactionComponent';
import '../../css/moneyInfoComponent.css';
import UnauthorizedPage from '../unauthorizedHomePage';

type moneyProps = {accessToken: string};
const MoneyInfoComponent = ({accessToken}: moneyProps) => {
    if (!accessToken) {
        return <UnauthorizedPage />;
    }
    return (
        <div id="moneyInfoComponent">
            <Balance accessToken={accessToken} />
            <Transaction accessToken={accessToken} /> 
        </div>
    )
}

export default MoneyInfoComponent;