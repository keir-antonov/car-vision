// импорт нужных библиотек
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';

// создание компонента просмотра камеры
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent implements OnInit, OnDestroy {
  // создание различных переменных
  public videoId: string = '';

  public videoTitle: string = '';

  private timerId: any = null;

  private _sub: Subscription = Subscription.EMPTY;

  // конструктор компонента с нужными сервисами(сервис для роутинга + сервис для всплывающего окна)
  constructor(
    private _activateRoute: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  // этот метод сработает, когда компонент создастся(пользователь выберет нужную камеру на предыдущем шаге и нажмет "просмотреть")
  public ngOnInit(): void {
    // первым делом из роутинга надо достать id видео, так как компонент один и универсальный, он испоьзуется во всех четырех доступных камерах
    this._sub = this._activateRoute.params.subscribe((params) => {
      this.videoId = params['videoId'] + '.mp4';

      // в зависимости от того, какую камеру хочет просмотреть пользователь,
      // будет выбран заголовок("Камера 1" или "Камера 2"...) + будет показано нужное видео
      switch (this.videoId) {
        case 'crash-1.mp4':
          this.videoTitle = 'Камера 1';
          // вызов всплывающего окна во время дтп
          this.timerId = setTimeout(() => this._openDialog(), 7500);
          break;
        case 'crash-2.mp4':
          this.videoTitle = 'Камера 2';
          this.timerId = setTimeout(() => this._openDialog(), 9500);
          break;
        case 'crash-3.mp4':
          this.videoTitle = 'Камера 3';
          this.timerId = setTimeout(() => this._openDialog(), 20500);
          break;
        case 'crash-4.mp4':
          this.videoTitle = 'Камера 4';
          this.timerId = setTimeout(() => this._openDialog(), 13500);
          break;
        default:
          this.videoTitle = 'Камера';
          break;
      }
    });
  }

  // этот метод сработает, когда компонент уничтожится(пользователь нажмет кнопку "назад")
  public ngOnDestroy(): void {
    this._sub.unsubscribe();
    // остановка таймера
    clearTimeout(this.timerId);
  }

  // метод вызова всплывающего окошка
  private _openDialog(): void {
    this._dialog.open(DialogComponent, {
      width: '250px',
      hasBackdrop: false,
    });
  }
}
