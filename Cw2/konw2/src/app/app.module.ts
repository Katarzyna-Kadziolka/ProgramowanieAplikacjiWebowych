import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBoxComponent } from './spending-box/app-box.component';
import { SpendingBoxComponent } from './spending-box/spending-box/spending-box.component';
import { ChartSpendingBoxComponent } from './spending-box/chart-spending-box/chart-spending-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBoxComponent,
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
