function checkInputName(inputName) {

    if (typeof inputName !== 'string') {
        return "invalid input name";
    }
    
    
    var lastChar = inputName[inputName.length - 1];
    var vowelCheck = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (vowelCheck.includes(lastChar)) {
        return "Name is good.";
    } else {
        return "Name is bad.";
    }
}

// Example usage:
console.log(checkInputName("Salman")); // Output: Bad inputName
console.log(checkInputName("Jafor")); // Output: Bad inputName
console.log(checkInputName("Tonoy")); // Output: Good inputName
console.log(checkInputName(123)); // Output: invalid
