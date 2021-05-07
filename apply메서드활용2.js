function a() {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function(arg) {
        console.log(arg);
    });
}

a(1, 2, 3);