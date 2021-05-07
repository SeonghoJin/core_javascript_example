var addCoffee = function(name) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(name);
        }, 500);
    });
};

var coffeeMaker = async function() {
    var coffeeList = '';
    coffeeList += await addCoffee('에소프레소');
    console.log(coffeeList);
    coffeeList += await addCoffee('아메리카노');
    console.log(coffeeList);
    coffeeList += await addCoffee('카페모카');
    console.log(coffeeList);
    coffeeList += await addCoffee('카페라떼');
    console.log(coffeeList);
}
coffeeMaker();