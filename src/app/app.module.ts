import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BodyComponent } from './body/body.component';
import { PictureSecComponent } from './body/picture-sec/picture-sec.component';
import { PopularComponent } from './body/popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolBarComponent,
    BodyComponent,
    PictureSecComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
