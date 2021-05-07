var a = 1;
var outer = function() {
    var b = 3;
    var inner = function() {
        console.log(b);
        var a = 3;
        debugger;
    };
    inner();
    console.log(a);
}

outer();
console.log(a);