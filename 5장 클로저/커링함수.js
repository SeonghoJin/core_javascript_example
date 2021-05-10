var cuury3 = function(fun) {
    return function(a) {
        return function(b) {
            return fun(a, b);
        }
    }
}

var getMaxWith10 = cuury3(Math.max)(10);
console.log(getMaxWith10(8));
console.log(getMaxWith10(25));