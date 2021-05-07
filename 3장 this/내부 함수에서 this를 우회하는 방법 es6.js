var obj = {
    outer: function() {
        var innerFunc2 = () => {
            console.log(this);
        }
        innerFunc2();
    }
}
obj.outer();