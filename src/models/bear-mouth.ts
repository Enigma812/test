import { Mouth } from "./mouth";

export class BearMouth implements Mouth {
    public say(): string {
        return 'Grrrr';
    }

}