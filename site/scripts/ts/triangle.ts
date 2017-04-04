import {Shape} from "./shape";

export class Triangle extends Shape {
  protected x1: number = 20;
  protected y1: number = 20;
  protected x2: number = 100;
  protected y2: number = 20;
  protected x3: number = 60;
  protected y3: number = 100;
  constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    super();
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
  public draw(): void {
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    let context = canvas.getContext("2d");
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
  }
  public calculateArea(): number {
    let sides = this.getSideLengths();
    let semiPerimeter = this.calculatePerimeter() / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - sides[0])
            * (semiPerimeter - sides[1]) * (semiPerimeter - sides[2]));
  }
  public calculatePerimeter(): number {
    let sides = this.getSideLengths();
    return sides[0] + sides[1] + sides[2];
  }
  private getSideLengths(): number[] {
    function calculateSide(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    let sideLengths = [
        calculateSide(this.x1, this.y1, this.x2, this.y2),
        calculateSide(this.x1, this.y1, this.x3, this.y3),
        calculateSide(this.x3, this.y3, this.x2, this.y2),
    ];
    return sideLengths;
  }
}
