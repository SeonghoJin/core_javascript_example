var curry5 = func => a => b => c => d => e => func(a, b, c, d, e);

var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));
