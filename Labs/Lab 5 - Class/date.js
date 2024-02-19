let now = new Date();
let otherDate = new Date('2023','8','26','0','0','0','0');
let myDate = new Date(1123243425245);
console.log(otherDate);
console.log(myDate);

var now2 = new Date();
var utcDate = new Date( (now.getTime() + (now.getTimezoneOffset() *)))