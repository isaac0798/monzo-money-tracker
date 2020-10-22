import React, {useState, useEffect} from 'react';
import getBalance from '../../requests/balanceRequest';
import monzoMoneyFormatter from '../../utilities/monzoMoneyFormatter';
import '../../css/balanceComponent.css';

type balanceProps = {accessToken: string};
const Balance = ({accessToken}: balanceProps) => {
    const [balance, setBalance] = useState('');
  
    useEffect(() => {
      const getBalanceData = async (accessToken) => {
        const res = await getBalance(accessToken);
        if (res) {
          setBalance(monzoMoneyFormatter(res.balance));
          sessionStorage.setItem("balance", balance);
        }
      }
  
      getBalanceData(accessToken);
    }, []);
  
    return <div id="balanceComponent">You have £{balance}</div>
}

export default Balance;