function calculateMoney(amountTickets) {
    if (typeof amountTickets !== 'number' || amountTickets <= 0 || !Number.isInteger(amountTickets)) {
        return " Please provide a positive number as input.";
    }
    
    var totalSold = amountTickets * 120;
    var watchmanCost = 500;
    var lunchExpense = 8 * 50;
    var totalExpense = watchmanCost + lunchExpense;
    var remainingMoney = totalSold - totalExpense;
    
    return remainingMoney;
}

// Example usage:
console.log(calculateMoney(10)); // Output: 600
console.log(calculateMoney(-5)); // Output: Error: Please provide a positive integer as input.
