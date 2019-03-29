import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BodyComponent } from './body/body.component';
import { PictureSecComponent } from './body/picture-sec/picture-sec.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolBarComponent,
    BodyComponent,
    PictureSecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
