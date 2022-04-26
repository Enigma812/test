import { Component } from '@angular/core';
import { Cat } from '../models/cat';
import { Buttonhome } from '../models/buttonhome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'test';
  public cat: Cat;
  public cat2: Cat;
  public rus: Buttonhome;

  constructor() {
      this.cat = new Cat('Мурка');
      this.cat2 = new Cat('Маруся');
      this.rus = new Buttonhome();
  }
}
