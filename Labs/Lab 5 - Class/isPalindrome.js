//Write a JavaScript function that checks whether a passed string is a palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(w) {
    return w === w.split('').reverse().join('');
}

console.log(isPalindrome('aba'));