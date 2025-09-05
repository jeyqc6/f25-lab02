import { Shape } from "./shape";

export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    
    computeArea(): number {
        return this.width * this.height;
    }
}