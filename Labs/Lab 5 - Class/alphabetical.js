/**Write a JavaScript function that returns a string that has letters in
 * alphabetical order.
 */
function alphabetical(w) {
    return w.toLowerCase().split('').sort().join('');
}

console.log(alphabetical('JavaScript'));