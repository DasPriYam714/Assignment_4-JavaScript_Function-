function deleteInvalids(inputArr) {

    if (!Array.isArray(inputArr)) {
        return " Input should be an array.";
    }
    
    
    var numberCheck = inputArr.filter(function(element) {
        return typeof element === 'number' && !isNaN(element);
    });
    
    return numberCheck;
}

// Example usage:
console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined])); // Output: [1, 12, 0, -1]
console.log(deleteInvalids("invalid input")); // Output: Error: Input must be an array.
