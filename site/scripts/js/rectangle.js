function Rectangle(x1, y1, x2, y2) {
    Shape.apply(this);
    this.x = 20;
    this.y = 20;
    this.width = 80;
    this.height = 30;
    if (x1 !== undefined && !isNaN(+x1) && x2 !== undefined && !isNaN(+x2)) {
        this.x = Math.min(x1, x2);
        this.width = Math.max(x1, x2) - this.x;
    }
    if (y1 !== undefined && !isNaN(+y1) && y2 !== undefined && !isNaN(+y2)) {
        this.y = Math.min(y1, y2);
        this.height = Math.max(y1, y2) - this.y;
    }
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = this.borderColor;
    context.stroke();
};

Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.calculatePerimeter = function() {
    return 2 * this.width + 2 * this.height;
};