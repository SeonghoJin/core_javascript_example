// 생성자
var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};
// 프로토타입 메서드
Rectangle.prototype.getArea = function() {
        return this.width * this.height;
    }
    // 스태틱 메서드
Rectangle.isRectangle = function(instance) {
    return instance instanceof Rectangle &&
        instance.width > 0 && instance.height > 0;
}

var rect1 = new Rectangle(3, 4);
console.log(rect1.getArea());
//console.log(rect1.isRectangle(rect1));
console.log(Rectangle.isRectangle(rect1));