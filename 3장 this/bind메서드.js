var func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
}
func(1, 2, 3, 4);

var bindFunc = func.bind({ x: 1 });
bindFunc(5, 6, 7, 8)

var bindFunc2 = func.bind({ x: 2 }, 1, 2);
bindFunc2(3, 4);
bindFunc2(5, 6);