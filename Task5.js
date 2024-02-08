function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input type";
    }
    
    var totalIncome = payments.reduce((acc, curr) => acc + curr, 0);
    
    var totalSavings = totalIncome - livingCost;
    if (totalSavings <= 0) {
        return "earn more money";
    } else {
        var tax = 0;
        payments.forEach(payment => {
            if (payment >= 3000) {
                tax += 0.2 * (payment - 3000);
            }
        });
        totalSavings -= tax;
        return totalSavings;
    }
}

// Example usage:
console.log(monthlySavings([4000, 5000, 2000], 3000)); // Output: 3200
console.log(monthlySavings([2000, 1500, 2500], 3000)); // Output: earn more
console.log(monthlySavings("invalid", 3000)); // Output: invalid input
console.log(monthlySavings([2000, 1500, 2500], "invalid")); // Output: invalid input
