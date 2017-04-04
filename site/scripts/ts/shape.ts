import {IShape} from "./ishape";
// cSpell:ignore ishape
export abstract class Shape implements IShape {
  protected fillColor: string = "#000000";
  protected borderColor: string = "#ff0000";
  public setFillColor(color: string): void {
    if (color) {
      this.fillColor = color;
    }
  }
  public getFillColor(): string {
    return this.fillColor;
  }
  public setBorderColor(color: string): void {
    if (color) {
      this.borderColor = color;
    }
  }
  public getBorderColor(): string {
    return this.borderColor;
  }
  public abstract draw(): void;
  public abstract calculateArea(): void;
  public abstract calculatePerimeter(): void;
}
