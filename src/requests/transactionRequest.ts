import axios from 'axios'
import TransactionInterface from '../interfaces/transactionInterface';

const getTransaction = async (accessToken: string) => {
  const {data} = await axios({
    method: "GET",
    url: "https://api.monzo.com/transactions?expand[]=merchant&account_id=acc_00009l6r7RmbYfu4ywXXID",
    headers: {
      "authorization": `Bearer ${accessToken}`
    }
  });

  return data.transactions;
}

export default getTransaction;
