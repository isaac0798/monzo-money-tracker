import moment from 'moment';
import reduce from 'lodash/reduce';
import TransactionInterface from '../interfaces/transactionInterface';

const sortTransactions = (transactions: Array<TransactionInterface>): [] => {
    return reduce(transactions, (result, value, key) => {
        const year = moment(value.created).format('YYYY');
        if (!result[year]) {
            result[year] = [];
        }
        
        const month = moment(value.created).format('MMMM');
        if (!result[year][month]) {
            result[year][month] = [];
        }

        const day = moment(value.created).format('DD');
        if (!result[year][month][day]) {
            result[year][month][day] = [];    
        }
        result[year][month][day].push(value);

        return result;
    }, {});
}

export default sortTransactions;