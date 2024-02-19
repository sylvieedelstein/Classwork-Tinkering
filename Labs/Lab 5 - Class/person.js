function Person(name, age) {
    this.name = name;
    this.age = age;
    this.address = {

    }
}

let p1 = new Person('John Doe', 34);
console.log(p1.name);

console.log(p1['name']['']);