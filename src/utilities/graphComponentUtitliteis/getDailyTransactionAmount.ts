import TransactionInterface from "../../interfaces/transactionInterface";

const getDailyTransactionAmount = (dailyTransactions: Array<TransactionInterface>) => {
    return dailyTransactions.length;
}

export default getDailyTransactionAmount;