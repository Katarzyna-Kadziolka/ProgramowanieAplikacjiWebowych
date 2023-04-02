import { Component, Input } from '@angular/core';
import { Format } from '../format-card/format';

@Component({
  selector: 'app-format-preview',
  templateUrl: './format-preview.component.html',
  styleUrls: ['./format-preview.component.scss']
})
export class FormatPreviewComponent {
  @Input () styles: Format = {
    textColor: '',
    background: '',
    border: '',
    boxShadow: ''
  }
}
