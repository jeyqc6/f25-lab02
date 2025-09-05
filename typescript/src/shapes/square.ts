import { Shape } from "./shape";

export class Square implements Shape { 
    constructor(private sideLen: number) {}
    computeArea(): number {
        return this.sideLen * this.sideLen;
    }
}