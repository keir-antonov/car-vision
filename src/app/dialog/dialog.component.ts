// импорт нужных библиотек
import { Component, ViewEncapsulation } from '@angular/core';

// создание компонента всплывающего окна
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {}
