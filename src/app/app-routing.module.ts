// это файл с роутингом по всему приложению

// импорт нужных компонентов и модулей
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CamsComponent } from './cams/cams.component';
import { VideoComponent } from './video/video.component';

// создание роутингов приложения
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cams',
    component: CamsComponent,
  },
  {
    path: 'cams/:videoId',
    component: VideoComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

// регистрация созданных роутингов в приложении
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
