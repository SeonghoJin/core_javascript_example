var outer = (function() {
    var a = 1;
    var inner = function() {
        return ++a;
    }
    return inner;
})();

console.log(outer());
console.log(outer());
outer = null;