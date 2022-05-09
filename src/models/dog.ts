import { Animal } from "./animal";

export class Dog extends Animal {
    public color: string;
    public age: number;

    constructor(name: string) {
        super(name);
        this.color = "черный";
        this.age = 3;
    }

    public grow() {
        this.age = this.age + 1;
    }

    public override say(): string {
        return 'Woof';
    }
}