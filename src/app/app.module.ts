import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShopImageComponent } from './shop-image/shop-image.component';
import { IronImageComponent } from './iron-image/iron-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopImageComponent,
    IronImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
