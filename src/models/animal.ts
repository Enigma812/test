export abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public rename(newName: string): void {
        this.name = newName;
    }

    public abstract say(): string;
}
