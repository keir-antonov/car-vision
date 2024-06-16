// это главный модуль всего приложения, в котором регистрируются все компоненты и модули

// импорт нужных библиотек
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CamsComponent } from './cams/cams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { VideoComponent } from './video/video.component';
import { DialogComponent } from './dialog/dialog.component';

// регистрация нужных модулей и компонентов в приложении
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CamsComponent,
    VideoComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
