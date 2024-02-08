function password(userDetails) {

    if (!userDetails || typeof userDetails !== 'object' ||
        !userDetails.name || !userDetails.birthYear || !userDetails.siteName ||
        typeof userDetails.birthYear !== 'number' || userDetails.birthYear.toString().length !== 4) {
        return "Provided details is invalid";
    }
    
    var providedPassword = userDetails.siteName + "#" + userDetails.name + "@" + userDetails.birthYear;
    
    return providedPassword;
}

// Example usage:
var userDetails = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(userDetails)); // Output: Google#kolimuddin@1999

var userDetailsMissing = { name: "kolimuddin", siteName: "google" };
console.log(password(userDetailsMissing)); // Output: invalid

var userDetailsInvalidYear = { name: "kolimuddin", birthYear: 99, siteName: "google" };
console.log(password(userDetailsInvalidYear)); // Output: invalid
