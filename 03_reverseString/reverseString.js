const reverseString = function(string) {
    // split string into array of characters
    let characterArray = Array.from(string);
    // reverse array
    let reversedArray = characterArray.reverse();
    // create a variable string for the array
    let finalString = '';
    // for each char in the reversed Array, add the new character to it
    for (character of reversedArray) {
        finalString += character;
    }
    return finalString;
};


// apparently also string . reverse . join

// Do not edit below this line
module.exports = reverseString;
