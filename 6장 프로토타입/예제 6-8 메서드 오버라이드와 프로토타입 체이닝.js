var arr = [1, 2];
console.log(Array.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(arr));
console.log(arr.toString());

arr.toString = function() {
    return this.join('_');
}

console.log(arr.toString());