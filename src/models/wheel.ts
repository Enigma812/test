import { IWheel } from "./wheel.interface";

export class Wheel implements IWheel {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public spin(energy: number): number {
        return energy / this.radius;
    }
}