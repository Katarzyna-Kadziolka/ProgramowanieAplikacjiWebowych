import { Component } from '@angular/core';
import { Format } from './format-card/format';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab3';
  
  styles: Format = {
    textColor: 'red',
    background: 'blue',
    border: '1px solid black',
    boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)"
  }

  onStyleChange(format: Format) {
    this.styles.textColor = format.textColor;
    this.styles.background = format.background;
    this.styles.border = format.border;
    this.styles.boxShadow = format.boxShadow;
  }
}
