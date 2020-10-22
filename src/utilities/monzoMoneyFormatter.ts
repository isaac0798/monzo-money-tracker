const monzoMoneyFormatter = (amount: number) => {
    const length = amount.toString().length;
    return [amount.toString().slice(0,length - 2), '.', amount.toString().slice(length - 2)].join('');
}
 
export default monzoMoneyFormatter;