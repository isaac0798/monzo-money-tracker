import axios from 'axios';
import authenticateUser from './authenticateUser';

interface Balance {
  balance: number
  total_balance: number
  balance_including_flexible_savings: number
  currency: string
  spend_today: number
  local_currency: string
  local_exchange_rate: 0
  local_spend: local_spend
}

interface local_spend {
  [index: number]: spendObject
}

interface spendObject {
  spend_today: number
  currency: string
}

const getBalance = async (accessToken: string) => {
  try {
    const {data} = await axios({
      method: "GET",
      url: "https://api.monzo.com/balance?account_id=acc_00009l6r7RmbYfu4ywXXID",
      headers: {
        "authorization": `Bearer ${accessToken}`
      }
    });

    console.log(data);
    return data as Balance;
  } catch (error) { 
    console.log(error);
    authenticateUser(accessToken);
  }
}

export default getBalance;
