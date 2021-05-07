// self를 사용하지 않고 call을 이용
var obj = {
    outer: function() {
        console.log(this);
        var innerFunc = function() {
            console.log(this);
        }
        innerFunc.call(this);
    }
}

obj.outer();

// bind 이용
var obj = {
    outer: function() {
        console.log(this);
        var innerFunc = function() {
            console.log(this);
        }.bind(this);
        innerFunc();
    }
}
obj.outer();