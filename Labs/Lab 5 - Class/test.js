function add (x, y) {
    //console.log(typeof x);
    let z;
    console.log(arguments.length);
    console.log('First argument: ' + arguments[0]);
    console.log('Second argument: ' + arguments[1]);
    if (x == undefined) x = 0;
    if (y == undefined) y = 0;
    if (typeof x == 'number' && typeof y == 'number') {
        return x + y;
    }
}

console.log(add(3,4));

//console.log(add('Hello ', 'World!'));

console.log(add(5));
