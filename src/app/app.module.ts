import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { ShopImageComponent } from './shop-image/shop-image.component';
import { IronImageComponent } from './iron-image/iron-image.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { InMemoryDataApiService } from './in-memory-data-api.service';
import { TeamService } from './team.service'
import { TableUsersComponent } from './table-users/table-users.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopImageComponent,
    IronImageComponent,
    TeamCardComponent,
    TableUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataApiService)
  ],
  providers: [
    TeamService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
