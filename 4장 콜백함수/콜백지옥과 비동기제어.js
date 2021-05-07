setTimeout(function(name) {
    var coffeList = name;
    console.log(coffeList);

    setTimeout(function(name) {
        coffeList += ', ' + name;
        console.log(coffeList);

        setTimeout(function(name) {
            coffeList += ', ' + name;
            console.log(coffeList);

            setTimeout(function(name) {
                coffeList += ', ' + name;
                console.log(coffeList)
            }, 500, '카페라떼')
        }, 500, '카페모카')
    }, 500, '아메리카노')
}, 500, '에스프레소')