import getDailyTransactionAmount from "./getDailyTransactionAmount";
import filter from "lodash/filter";
;

const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

const getMonthlyTransactionCount = (yearlyTransaction: Array<any>): number[] => {
    const months: Array<string> = Object.keys(yearlyTransaction);
    const dailyTransactionByMonth = months.map((month) => {
        const days = Object.keys(yearlyTransaction[month]);
        const dayTransactions = days.map((day) => {
            const dayTransaction = yearlyTransaction[month][day];
            const completedDayTransactions = filter(dayTransaction, 'settled');

            return getDailyTransactionAmount(completedDayTransactions);
        });

        return dayTransactions;
    });

    return dailyTransactionByMonth.map((transaction) => {
        return transaction.reduce(reducer);
    });
}

export default getMonthlyTransactionCount;