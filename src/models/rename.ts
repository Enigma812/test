export class MainName {

    public mainName: string;

    constructor(mainName: string) {
        this.mainName = mainName;
    }

    public reMainName(newMainName: string): void {
        this.mainName = newMainName;
    }
}