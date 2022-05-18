export class Buttons {
    public home: string;
    public menu: string;
    public bookmark: string;
    public account: string;
    public photo: string;
    public ren: string;
    public help: string;
    public map: string;

    constructor() {
        this.home = "Главная";
        this.menu = "Меню";
        this.bookmark = "Закладки";
        this.account = "Личный кабинет";
        this.photo = "фотогалерея";
        this.ren = "переименовать";
        this.help = "помощь";
        this.map = "карта сайта";
    }

    public translate(language: string) {
        if (language === "eng") {
            this.home = "Home";
            this.menu = "Menu";
            this.bookmark = "Bookmarks";
            this.account = "account";
            this.photo = "photos";
            this.ren = "rename";
            this.help = "help";
            this.map = "site map";
        }
        if (language === "rus") {
            this.home = "Главная";
            this.menu = "Меню";
            this.bookmark = "Закладки";
            this.account = "Личный кабинет";
            this.photo = "фотогалерея";
            this.ren = "переименовать";
            this.help = "помощь";
            this.map = "карта сайта";
        }
    }
}