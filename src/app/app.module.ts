import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapDirectionsComponent } from './map-directions/map-directions.component';
import { MapDirectionsListComponent } from './map-directions-list/map-directions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDirectionsComponent,
    MapDirectionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
