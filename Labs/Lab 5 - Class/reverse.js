//Write a JavaScript function that reverses a number. 
function reverse(n) {
    let str = n + "";
    console.log(str.split(''));
    console.log(str.split('').reverse());
    str = str.split('').reverse().join('');
    return Number(str);

}

console.log(reverse(14635));