import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Format } from './format';

@Component({
  selector: 'app-format-card',
  templateUrl: './format-card.component.html',
  styleUrls: ['./format-card.component.scss']
})
export class FormatCardComponent {
  @Input () styles: Format = {
    textColor: '',
    background: '',
    border: '',
    boxShadow: ''
  }

  onTextColorChange(text: string) {
    this.styles.textColor = text;
  }
  onBackgroundChange(text: string) {
    this.styles.background = text;
  }
  onBorderChange(text: string) {
    this.styles.border = text;
  }
  onBoxShadowChange(text: string) {
    this.styles.boxShadow = text;
  }

  @Output () styleChange = new EventEmitter<Format>()
  onChange() {
    this.styleChange.emit(this.styles)
  }
}
