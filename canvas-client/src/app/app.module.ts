import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ActionBarComponent} from './action-bar/action-bar.component';
import {CanvasComponent} from './canvas/canvas.component';
import {StatiscticsComponent} from './statisctics/statisctics.component';
import {LeftImagesComponent} from './left-images/left-images.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    CanvasComponent,
    StatiscticsComponent,
    LeftImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
