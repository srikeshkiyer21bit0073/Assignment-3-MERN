function sortStringAlphabetically(inputString) {
    // Convert the string to an array of characters, sort it, and join it back to a string
    var sortedString = inputString.split('').sort().join('');
    
    return sortedString;
  }
  
  var input = 'webmaster';
  var sortedOutput = sortStringAlphabetically(input);
  console.log(sortedOutput); // Output: 'abeemrstw'
  