// 생성자
var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};
// 프로토타입 메서드
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}
var rect = new Rectangle(3, 4);
console.log(rect.getArea());

var Square = function(width) {
    Rectangle.call(this, width, width);
}
Square.prototype = new Rectangle();

var sq = new Square(5);
console.log(sq.getArea());