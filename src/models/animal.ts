import { Mouth } from "./mouth";

export abstract class Animal {
    public name: string;

    protected abstract mouth: Mouth;

    constructor(name: string) {
        this.name = name;
    }

    public rename(newName: string): void {
        this.name = newName;
    }

    public say(): string {
        return this.mouth.say();
    }
}
