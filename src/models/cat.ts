export class Cat {
    public name: string;


    constructor(name: string) {
       this.name = name;
    }

    public rename(newName: string) {
        this.name = newName;
    }
}