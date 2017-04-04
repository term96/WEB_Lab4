import {Shape} from "./shape";

export class Circle extends Shape {
  protected centerX: number = 50;
  protected centerY: number = 50;
  protected radius: number = 20;
  constructor(centerX: number, centerY: number, radius: number) {
    super();
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
  public draw(): void {
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = this.borderColor;
    context.stroke();
  }
  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  };
  public calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
