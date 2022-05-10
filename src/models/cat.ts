import { Animal } from './animal';
import { CatMouth } from './cat-mouth';
import { Mouth } from './mouth';

export class Cat extends Animal {

    private mouth: Mouth;

    constructor(name: string) {
        super(name);
        this.mouth = new CatMouth();
    }

    public override say(): string {
        return this.mouth.say();
    }
}