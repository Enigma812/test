export class Buttonhome {
    public home: string;
    public menu: string;
    public bookmark: string;

    constructor () {
        this.home = "Главная";
        this.menu = "Меню";
        this.bookmark = "Закладки"
    }

    public translate() {
        this.home = "Home";
        this.menu = "Menu";
        this.bookmark = "Bookmarks";
    }

    public retranslate() {
        this.home = "Главная";
        this.menu = "Меню";
        this.bookmark = "Закладки"
    }
}