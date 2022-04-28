import { Component } from '@angular/core';
import { Cat } from '../models/cat';
import { Buttons } from '../models/buttons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'test';
  public cat: Cat;
  public cat2: Cat;
  public buttons: Buttons;

  constructor() {
      this.cat = new Cat('Мурка');
      this.cat2 = new Cat('Маруся');
      this.buttons = new Buttons();
  }
}
