import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

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
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
