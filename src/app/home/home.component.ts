// импорт нужных библиотек
import { Component, ViewEncapsulation } from '@angular/core';

// создание компонента главной страницы входа
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
