import getDailyAmountSpent from "./getDailyAmountSpent";
import filter from "lodash/filter";
import monzoMoneyFormatter from "../monzoMoneyFormatter";

const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue
const getMonthlyAmountSpent = (yearlyTransactions: Array<any>): number[] => {
    const months: Array<string> = Object.keys(yearlyTransactions);
    const monthlySpending = months.map((month) => {
        const days = Object.keys(yearlyTransactions[month]);
        const dayTransactions = days.map((day) => {
            const dayTransaction = yearlyTransactions[month][day];
            const completedDayTransactions = filter(dayTransaction, 'settled');

            return getDailyAmountSpent(completedDayTransactions);
        }); //eg: [-10, 0, -88];

        return dayTransactions;
    });

    return monthlySpending.map(monthlySpending => {
        const monthlyTransactions = monthlySpending.flat();
        const filteredTransactions = monthlyTransactions.filter(cost => cost < 0)
        const totalAmount = filteredTransactions.reduce(reducer, 0);

        return parseFloat(monzoMoneyFormatter(totalAmount * -1));
    })

}

export default getMonthlyAmountSpent;