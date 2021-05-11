var Grade = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
}
Grade.prototype = [];
var g = new Grade(100, 80);
g.push(90, 20);

delete g.length;
g.push(70);
console.log(g);