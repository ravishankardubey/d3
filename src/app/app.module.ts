import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as d3 from 'd3';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestD3Component } from './components/test-d3/test-d3.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BindingDataComponent } from './components/binding-data/binding-data.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { LoadExternalDataComponent } from './components/load-external-data/load-external-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TestD3Component,
    LandingPageComponent,
    BindingDataComponent,
    DisplayDataComponent,
    LoadExternalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
