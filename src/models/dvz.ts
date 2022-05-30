import { IEngine } from "./engine.interface";

export class Dvz implements IEngine {
    private kpd: number;

    constructor(kpd: number) {
        this.kpd = kpd;
    }

    public ignite(oil: number): number {
        return oil * this.kpd;
    }
}