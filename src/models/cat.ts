import { Animal } from './animal';

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    public override say(): string {
        return 'Meaw';
    }
}