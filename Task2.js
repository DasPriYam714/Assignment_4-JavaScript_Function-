function checkName(inputName) {

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
console.log(checkName("Salman")); // Output: Bad inputName
console.log(checkName("Jafor")); // Output: Bad inputName
console.log(checkName("Tonoy")); // Output: Good inputName
console.log(checkName(123)); // Output: invalid
