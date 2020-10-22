import TransactionInterface from "../../interfaces/transactionInterface";
import monzoMoneyFormatter from "../monzoMoneyFormatter";
import map from "lodash/map";

const getDailyAmountSpent = (dailyTransactions: Array<TransactionInterface>): number => {
    return map(dailyTransactions, (dailyTransaction: TransactionInterface) => {
        return dailyTransaction.amount;
    });
}

export default getDailyAmountSpent;