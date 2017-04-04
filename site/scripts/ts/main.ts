import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Shape} from "./shape";
import {Triangle} from "./triangle";

function addListeners(): void {
    let shape = document.getElementById("shape_selector");
    shape.addEventListener("change", showParameters);
    let inputs: HTMLElement[] = Array.prototype.slice.call(document.getElementsByTagName("input"));
    for (let input of inputs) {
        input.addEventListener("change", draw);
    }
}

function draw(): void {
    let select = <HTMLSelectElement> document.getElementById("shape_selector");
    let option = (<HTMLOptionElement> select.options[select.selectedIndex]).value;
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
        default:
            break;
    }
}

function drawCircle(): void {
    let radius = (<HTMLInputElement> document.getElementById("radius")).value;
    let centerX = (<HTMLInputElement> document.getElementById("center_x")).value;
    let centerY = (<HTMLInputElement> document.getElementById("center_y")).value;
    let circle = new Circle(+centerX, +centerY, +radius);
    setShapeColors(circle);
    circle.draw();
    showShapeInfo(circle);
}

function drawRectangle(): void {
    let x1 = (<HTMLInputElement> document.getElementById("rectangle_x1")).value;
    let y1 = (<HTMLInputElement> document.getElementById("rectangle_y1")).value;
    let x2 = (<HTMLInputElement> document.getElementById("rectangle_x2")).value;
    let y2 = (<HTMLInputElement> document.getElementById("rectangle_y2")).value;
    let rectangle = new Rectangle(+x1, +y1, +x2, +y2);
    setShapeColors(rectangle);
    rectangle.draw();
    showShapeInfo(rectangle);
}

function drawTriangle(): void {
    let x1 = (<HTMLInputElement> document.getElementById("triangle_x1")).value;
    let y1 = (<HTMLInputElement> document.getElementById("triangle_y1")).value;
    let x2 = (<HTMLInputElement> document.getElementById("triangle_x2")).value;
    let y2 = (<HTMLInputElement> document.getElementById("triangle_y2")).value;
    let x3 = (<HTMLInputElement> document.getElementById("triangle_x3")).value;
    let y3 = (<HTMLInputElement> document.getElementById("triangle_y3")).value;
    let triangle = new Triangle(+x1, +y1, +x2, +y2, +x3, +y3);
    setShapeColors(triangle);
    triangle.draw();
    showShapeInfo(triangle);
}

function setShapeColors(shape: Shape): void {
    let fillColor = (<HTMLInputElement> document.getElementById("fill_color")).value;
    let borderColor = (<HTMLInputElement> document.getElementById("border_color")).value;
    shape.setFillColor(fillColor);
    shape.setBorderColor(borderColor);
}

function showParameters(): void {
    let select = <HTMLSelectElement> document.getElementById("shape_selector");
    let option = (<HTMLOptionElement> select.options[select.selectedIndex]).value;
    let circleDiv = document.getElementById("circle_parameters");
    let rectangleDiv = document.getElementById("rectangle_parameters");
    let triangleDiv = document.getElementById("triangle_parameters");
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

function showShapeInfo(shape: Shape): void {
    let paragraphs: HTMLElement[] = Array.prototype.slice.call(document.getElementsByTagName("p"));
    for (let paragraph of paragraphs) {
        paragraph.style.display = "block";
    }
    let area = document.getElementById("area");
    area.innerHTML = String(shape.calculateArea());
    let perimeter = document.getElementById("perimeter");
    perimeter.innerHTML = String(shape.calculatePerimeter());
}

addListeners();
