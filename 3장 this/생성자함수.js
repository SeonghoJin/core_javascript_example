var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
    console.log(this);
}

var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);

console.log(Cat(3, 5));
console.log(global.name);