// это компонент с входной точкой во все приложение, когда приложение стартует, то запускается именно этот компонент, а внутри него отображается все остальное

// импорт нужных библиотек
import { Component, ViewEncapsulation } from '@angular/core';

// создание компонента точки входа в приложение
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'root',
  },
})
export class AppComponent {}
