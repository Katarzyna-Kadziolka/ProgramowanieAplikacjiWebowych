import { Component, Input } from '@angular/core';
import { Format } from '../format-card/format';

@Component({
  selector: 'app-generated-css-card',
  templateUrl: './generated-css-card.component.html',
  styleUrls: ['./generated-css-card.component.scss']
})
export class GeneratedCssCardComponent {
  @Input () styles: Format = {
    textColor: '',
    background: '',
    border: '',
    boxShadow: ''
  }
}
