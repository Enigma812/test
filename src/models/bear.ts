import { Animal } from "./animal";

export class Bear extends Animal {
    constructor(name: string) {
        super(name);
    }

    public override say(): string {
        return 'Grrr';
    }
}