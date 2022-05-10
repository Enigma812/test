import { Animal } from "./animal";
import { DogMouth } from "./dog-mouth";
import { Mouth } from "./mouth";

export class Dog extends Animal {
    public color: string;
    public age: number;

    private mouth: Mouth;

    constructor(name: string) {
        super(name);
        this.color = "черный";
        this.age = 3;
        this.mouth = new DogMouth();
    }

    public grow() {
        this.age = this.age + 1;
    }

    public override say(): string {
        return this.mouth.say();
    }
}