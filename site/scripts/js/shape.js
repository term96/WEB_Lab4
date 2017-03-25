function Shape() {
  this.fillColor = "#000000";
  this.borderColor = "#ff0000";
}

Shape.prototype.setFillColor = function(value) {
    if (value) {
        this.fillColor = value;
    }
};

Shape.prototype.getFillColor = function() {
    return this.fillColor;
};

Shape.prototype.setBorderColor = function(value) {
    if (value) {
        this.borderColor = value;
    }
};

Shape.prototype.getBorderColor = function() {
    return this.borderColor;
};