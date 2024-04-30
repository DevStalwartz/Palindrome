function isPalindrome(x) {
    // Convert the number to a string
    const numStr = x.toString();

    
for (let i=0, j=numStr.length - 1; i< j; i++, j--) {
        if (numStr[i] !== numStr[j]) {
                        return false;
                      }
    }
    // if the loop completes without returning false , it's a palindrome
    return true;
  }
  
  // Example usage:
  console.log(isPalindrome(121)); // Output: true
  console.log(isPalindrome(-121)); // Output: false
  