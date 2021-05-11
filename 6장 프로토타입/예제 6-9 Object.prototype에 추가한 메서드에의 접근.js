Object.prototype.getEntries = function() {
    var res = [];
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            res.push([prop, this[prop]]);
        }
    }
    return res;
}

var data = [
    ['object', { a: 1 }],
    ['number', 345]
]

data.forEach(function(datum) {
    console.log(datum[1].getEntries());
})