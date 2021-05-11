var Person = function(name) {
    this._name = name;
};

Person.prototype.getName = function() {
    return this._name;
}

var suzi = new Person("Suzi");
console.log(suzi.__proto__.getName());
console.log(Person.prototype === suzi.__proto__);
console.log(suzi.__proto__.getName.call(suzi));