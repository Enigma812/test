import { Animal } from "./animal";
import { BearMouth } from "./bear-mouth";
import { Mouth } from "./mouth";

export class Bear extends Animal {
    
    protected override mouth: Mouth;

    constructor(name: string) {
        super(name);
        this.mouth = new BearMouth();
    }
}