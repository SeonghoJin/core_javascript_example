var Grade = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.lnegth = args.length;
}
Grade.prototype = [];
var g = new Grade(100, 80);
console.dir(Grade.prototype.__proto__);