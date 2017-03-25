function Triangle(x1, y1, x2, y2, x3, y3) {
    Shape.apply(this);
    this.x1 = 20;
    this.y1 = 20;
    this.x2 = 100;
    this.y2 = 20;
    this.x3 = 60;
    this.y3 = 100;
    if (x1 !== undefined && !isNaN(+x1)) {
        this.x1 = +x1;
    }
    if (y1 !== undefined && !isNaN(+y1)) {
        this.y1 = +y1;
    }
    if (x2 !== undefined && !isNaN(+x2)) {
        this.x2 = +x2;
    }
    if (y2 !== undefined && !isNaN(+y2)) {
        this.y2 = +y2;
    }
    if (x3 !== undefined && !isNaN(+x3)) {
        this.x3 = +x3;
    }
    if (y3 !== undefined && !isNaN(+y3)) {
        this.y3 = +y3;
    }
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.draw = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.lineTo(this.x3, this.y3);
    context.closePath();
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = this.borderColor;
    context.stroke();
};

Triangle.prototype.calculateArea = function() {
    var sides = this.getSideLengths();
    var semiPerimeter = this.calculatePerimeter() / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - sides[0])
            * (semiPerimeter - sides[1]) * (semiPerimeter - sides[2]));
};

Triangle.prototype.calculatePerimeter = function() {
    var sides = this.getSideLengths();
    return sides[0] + sides[1] + sides[2];
};

Triangle.prototype.getSideLengths = function() {
    function calculateSide(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    
    var sideLengths = [
        calculateSide(this.x1, this.y1, this.x2, this.y2),
        calculateSide(this.x1, this.y1, this.x3, this.y3),
        calculateSide(this.x3, this.y3, this.x2, this.y2)
    ];
    return sideLengths;
};