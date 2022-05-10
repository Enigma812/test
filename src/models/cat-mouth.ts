import { Mouth } from "./mouth";

export class CatMouth implements Mouth {
    public say(): string {
        return 'Meauw';
    }
}