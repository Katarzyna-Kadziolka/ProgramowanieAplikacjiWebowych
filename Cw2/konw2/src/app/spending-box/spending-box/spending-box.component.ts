import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spending-box',
  templateUrl: './spending-box.component.html',
  styleUrls: ['./spending-box.component.scss']
})
export class SpendingBoxComponent {
  @Input() icon = ""
  @Input() cost = 0
  @Input() title = ""
  @Input() color ="#000"
}
