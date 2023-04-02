import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { FormatInputComponent } from './format-input/format-input.component';
import { FormatCardComponent } from './format-card/format-card.component';
import { GeneratedCssCardComponent } from './generated-css-card/generated-css-card.component';
import { FormatPreviewComponent } from './format-preview/format-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    CardWrapperComponent,
    FormatInputComponent,
    FormatCardComponent,
    GeneratedCssCardComponent,
    FormatPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
