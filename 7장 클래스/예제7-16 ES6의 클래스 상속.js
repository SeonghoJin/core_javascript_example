var Rectangle = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.width;
    }
}

var Square = class extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    getArea() {
        console.log('size is:', super.getArea());
    }
}

var square = new Square(3);
square.getArea();