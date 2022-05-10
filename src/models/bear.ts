import { Animal } from "./animal";
import { BearMouth } from "./bear-mouth";
import { Mouth } from "./mouth";

export class Bear extends Animal {

    private mouth: Mouth;

    constructor(name: string) {
        super(name);
        this.mouth = new BearMouth();
    }

    public override say(): string {
        return this.mouth.say();

    }
}