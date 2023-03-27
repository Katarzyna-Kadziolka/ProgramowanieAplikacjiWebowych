import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './spending-box/box.component';
import { SpendingBoxComponent } from './spending-box/spending-box/spending-box.component';
import { ChartSpendingBoxComponent } from './spending-box/chart-spending-box/chart-spending-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    SpendingBoxComponent,
    ChartSpendingBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
