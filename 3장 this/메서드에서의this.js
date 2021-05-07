var obj = {
    methodA: function() { console.log(this); },
    inner: {
        methodB: function() { console.log(this); }
    }
}

obj.methodA();
obj.inner.methodB();