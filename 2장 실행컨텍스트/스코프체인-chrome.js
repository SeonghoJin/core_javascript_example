var a = 1;
var outer = function() {
    console.dir(outer);
    var b = 2;
    var inner = function() {
        console.log(b);
        debugger;
    };
    inner();
    console.log(a);
}

outer();