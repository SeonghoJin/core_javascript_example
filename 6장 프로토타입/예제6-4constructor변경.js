var NewConstructor = function() {
    console.log('this is new Constructor!')
};

var dataType = [1, 'test', true];

dataType.forEach(function(d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, d instanceof NewConstructor);
})