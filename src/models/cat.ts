import { Animal } from './animal';
import { CatMouth } from './cat-mouth';
import { Mouth } from './mouth';

export class Cat extends Animal {

    protected override mouth: Mouth;

    constructor(name: string) {
        super(name);
        this.mouth = new CatMouth();
    }
}