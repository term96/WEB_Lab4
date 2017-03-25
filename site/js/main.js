addListeners();

function addListeners() {
    var shape = document.getElementById("shape_selecter");
    shape.addEventListener("change", showParameters);
    
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener("change", draw);
    }
}

function draw() {
    var select = document.getElementById("shape_selecter");
    var option = select.options[select.selectedIndex].value;
    switch (option) {
        case "Circle":
            drawCircle();
            break;
        case "Rectangle":
            drawRectangle();
            break;
        case "Triangle":
            drawTriangle();
            break;
    }
}

function drawCircle() {
    var radius = document.getElementById("radius").value;
    var centerX = document.getElementById("center_x").value;
    var centerY = document.getElementById("center_y").value;
    
    var circle = new Circle(centerX, centerY, radius);
    setShapeColors(circle);
    circle.draw();
    showShapeInfo(circle);
}

function drawRectangle() {
    var x1 = document.getElementById("rectangle_x1").value;
    var y1 = document.getElementById("rectangle_y1").value;
    var x2 = document.getElementById("rectangle_x2").value;
    var y2 = document.getElementById("rectangle_y2").value;
    
    var rectangle = new Rectangle(x1, y1, x2, y2);
    setShapeColors(rectangle);
    rectangle.draw();
    showShapeInfo(rectangle);
}

function drawTriangle() {
    var x1 = document.getElementById("triangle_x1").value;
    var y1 = document.getElementById("triangle_y1").value;
    var x2 = document.getElementById("triangle_x2").value;
    var y2 = document.getElementById("triangle_y2").value;
    var x3 = document.getElementById("triangle_x3").value;
    var y3 = document.getElementById("triangle_y3").value;
    
    var triangle = new Triangle(x1, y1, x2, y2, x3, y3);
    setShapeColors(triangle);
    triangle.draw();
    showShapeInfo(triangle);
}

function setShapeColors(shape) {
    var fillColor = document.getElementById("fill_color").value;
    var borderColor = document.getElementById("border_color").value;
    shape.setFillColor(fillColor);
    shape.setBorderColor(borderColor);
}

function showParameters() {
    var select = document.getElementById("shape_selecter");
    var option = select.options[select.selectedIndex].value;
    
    var circleDiv = document.getElementById("circle_parameters");
    var rectangleDiv = document.getElementById("rectangle_parameters");
    var triangleDiv = document.getElementById("triangle_parameters");
    switch (option) {
        case "Circle":
            circleDiv.style.display = "block";
            rectangleDiv.style.display = "none";
            triangleDiv.style.display = "none";
            break;
        case "Rectangle":
            rectangleDiv.style.display = "block";
            circleDiv.style.display = "none";
            triangleDiv.style.display = "none";
            break;
        case "Triangle":
            triangleDiv.style.display = "block";
            circleDiv.style.display = "none";
            rectangleDiv.style.display = "none";
            break;
        default:
            circleDiv.style.display = "none";
            rectangleDiv.style.display = "none";
            triangleDiv.style.display = "none";
    }
}

function showShapeInfo(shape) {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; ++i) {
        paragraphs[i].style.display = "block";
    }
    
    var area = document.getElementById("area");
    area.innerHTML = String(shape.calculateArea());
    var perimeter = document.getElementById("perimeter");
    perimeter.innerHTML = String(shape.calculatePerimeter());
}
