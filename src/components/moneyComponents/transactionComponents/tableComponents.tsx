import React, {useState} from 'react';
import moment from 'moment';
import TransactionInterface from '../../../interfaces/transactionInterface';
import monzoMoneyFormatter from '../../../utilities/monzoMoneyFormatter';
import '../../../css/transactionTable.css';

type tableProps = {tableData: Array<TransactionInterface>};
const TableComponent = ({tableData}: tableProps) => {
    return (
        <table id="transactionTable">
          <caption id="transcaionCaption">All transactions</caption>
          <thead>
            <tr>
              <th className="transactionHeader">
                Category
               </th>
              <th className="transactionHeader">Date</th>
              <th className="transactionHeader">Amount</th>
              <th className="transactionHeader">Description</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0).reverse().map((transaction: TransactionInterface) => (
              <tr className="transactionRow">
                <td id= "categoryData">{transaction.category}</td>
                <td id="dateData">{moment(transaction.created).format('DD/MM/YYYY-HH:mm')}</td>
                <td id="amountData">{monzoMoneyFormatter(transaction.amount)}</td>
                <td id="descriptionData">{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
    );
}

export default TableComponent;