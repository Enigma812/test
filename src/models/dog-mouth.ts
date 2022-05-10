import { Mouth } from "./mouth";

export class DogMouth implements Mouth {
    public say(): string {
        return 'Woof';
    }
}