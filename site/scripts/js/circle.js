function Circle(centerX, centerY, radius) {
    Shape.apply(this);
    this.centerX = 50;
    this.centerY = 50;
    this.radius = 20;
    if (centerX !== undefined && !isNaN(+centerX)) {
        this.centerX = +centerX;
    }
    if (centerY !== undefined && !isNaN(+centerY)) {
        this.centerY = +centerY;
    }
    if (radius !== undefined && !isNaN(+radius) && radius >= 0) {
        this.radius = +radius;
    }
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = this.borderColor;
    context.stroke();
};

Circle.prototype.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
};