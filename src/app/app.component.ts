import { Component } from '@angular/core';
import { Cat } from '../models/cat';
import { Buttons } from '../models/buttons';
import { Dog } from '../models/dog';
import { Animal } from 'src/models/animal';
import { Bear } from 'src/models/bear';
import { f } from './functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = 'test';
  public band: Animal[];
  public cat: Cat;
  public dog: Dog;
  public numbers: number[]
  public buttons: Buttons;

  constructor() {
    this.cat = new Cat('Мурка');
    this.dog = new Dog('Шарик');
    this.band = [this.cat, new Dog('Тузик'), new Bear('Потапыч')];
    this.numbers = [1, 2, 3, 4, 5];
    this.buttons = new Buttons();
  }

  public f(x: number): number {
    return f(x);
  }
}
