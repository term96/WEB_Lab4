import {Shape} from "./shape";

export class Rectangle extends Shape {
  protected x: number = 20;
  protected y: number = 20;
  protected width: number = 80;
  protected height: number = 30;
  constructor(x1: number, y1: number, x2: number, y2: number) {
    super();
    if (x1 !== undefined && !isNaN(+x1) && x2 !== undefined && !isNaN(+x2)) {
        this.x = Math.min(x1, x2);
        this.width = Math.max(x1, x2) - this.x;
    }
    if (y1 !== undefined && !isNaN(+y1) && y2 !== undefined && !isNaN(+y2)) {
        this.y = Math.min(y1, y2);
        this.height = Math.max(y1, y2) - this.y;
    }
  }
  public draw(): void {
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = this.borderColor;
    context.stroke();
  }
  public calculateArea(): number {
    return this.width * this.height;
  }
  public calculatePerimeter(): number {
    return 2 * this.width + 2 * this.height;
  }
}
