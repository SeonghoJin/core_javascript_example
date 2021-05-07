var obj1 = {
    outer: function() {
        console.log(this); // (1) 
        var innerFunc = function() {
            console.log(this); // (2) (3)
        }
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();
    }
};

obj1.outer();

// (1) -- obj1
// (2) -- 전역객체
// (3) -- obj2