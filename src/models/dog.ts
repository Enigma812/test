class Dog {
    public name: string;
    public color: string;
    public age: number;

    constructor() {
        this.name = "Шарик";
        this.color = "черный";
        this.age = 3;
    }

    public grow() {
        this.age = this.age + 1;
    }
}