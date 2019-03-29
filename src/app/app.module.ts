import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BodyComponent } from './body/body.component';
import { PictureSecComponent } from './body/picture-sec/picture-sec.component';
import { PopularComponent } from './body/popular/popular.component';
import { LatestComponent } from './body/latest/latest.component';
import { ShopComponent } from './body/shop/shop.component';
import { WhatIsComponent } from './body/what-is/what-is.component';
import { ReviewComponent } from './body/review/review.component';
import { BlogComponent } from './body/blog/blog.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolBarComponent,
    BodyComponent,
    PictureSecComponent,
    PopularComponent,
    LatestComponent,
    ShopComponent,
    WhatIsComponent,
    ReviewComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
