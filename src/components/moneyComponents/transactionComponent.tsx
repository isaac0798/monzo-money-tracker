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
    const [year, setYear] = useState('2019');
  
    useEffect(() => {
      const getTransactionData = async (accessToken) => {
        const res = await getTransaction(accessToken);
        setTransaction(res);
      }
  
      getTransactionData(accessToken);
    }, [accessToken]);

    const updateYear = (event => setYear(event.target.value))

    if ((transactions).length) {
      sessionStorage.setItem('transactions', JSON.stringify(transactions)); 
      const sortedTransactions= sortTransactionsByMonth(transactions);

      const years = Object.keys(sortedTransactions)
      return (
        <div id="trComponents">
          <TableComponent tableData={transactions} />
          <div id="rhComponents">
            <select id="yearSelector" onChange={(event) => {
              updateYear(event)
            }}>{years.map((x,y) => <option key={y}>{x}</option>)}</select>
            <GraphComponent graphData={sortedTransactions} year={year} />
            <CategoryComponent graphData={sortedTransactions} year={year} />
          </div>
        </div>
      );
    }

    return <h1>Waiting</h1>
}

export default Transaction;