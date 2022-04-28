export class Buttons {
    public home: string;
    public menu: string;
    public bookmark: string;

    constructor () {
        this.home = "Главная";
        this.menu = "Меню";
        this.bookmark = "Закладки";
    }

    public translate(language: string) {
        if (language === "eng") {
            this.home = "Home";
            this.menu = "Menu";
            this.bookmark = "Bookmarks";
        }
        if (language === "rus") {
            this.home = "Главная";
            this.menu = "Меню";
            this.bookmark = "Закладки";
        }
    }
}