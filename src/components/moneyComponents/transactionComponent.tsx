import React, {useState, useEffect} from 'react';

import getTransaction from '../../requests/transactionRequest';
import TableComponent from './transactionComponents/tableComponents';
import GraphComponent from './transactionComponents/graphComponents';
import CategoryComponent from './transactionComponents/categoryComponents';
import sortTransactionsByMonth from '../../utilities/sortTransactionsByMonth';
import '../../css/transactionComponent.css';

type transactionProps = {accessToken: string}
const Transaction = ({accessToken}: transactionProps) => {
    const [transactions, setTransaction] = useState([]);
  
    useEffect(() => {
      const getTransactionData = async (accessToken) => {
        const res = await getTransaction(accessToken);
        setTransaction(res);
      }
  
      getTransactionData(accessToken);
    }, [accessToken]);

    if ((transactions).length) {
      sessionStorage.setItem('transactions', JSON.stringify(transactions)); 
      const sortedTransactions= sortTransactionsByMonth(transactions);
      return (
        <div id="trComponents">
          <TableComponent tableData={transactions} />
          <div id="rhComponents">
            <GraphComponent graphData={sortedTransactions} />
            <CategoryComponent graphData={sortedTransactions} />
          </div>
        </div>
      );
    }

    return <h1>Waiting</h1>
}

export default Transaction;