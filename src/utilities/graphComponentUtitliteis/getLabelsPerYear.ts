const getLabelsPerYear = (yearlyTransactions: Array<any>): Array<string> => {
    return Object.keys(yearlyTransactions);
}

export default getLabelsPerYear;