import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-format-input',
  templateUrl: './format-input.component.html',
  styleUrls: ['./format-input.component.scss']
})
export class FormatInputComponent {
  @Input () label = "";
  
  @Input () value: string = "";

  @Output () styleChange = new EventEmitter()
  onChange() {
    this.styleChange.emit(this.value)
  }
}
