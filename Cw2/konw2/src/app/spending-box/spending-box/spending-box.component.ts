import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBagShopping, faEllipsis } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-spending-box',
  templateUrl: './spending-box.component.html',
  styleUrls: ['./spending-box.component.scss']
})
export class SpendingBoxComponent {
  faEllipsis = faEllipsis;
  @Input() icon: IconProp = faEllipsis
  @Input() cost = 0
  @Input() title = ""
  @Input() color ="#000"

  get currency() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    return formatter.format(this.cost);
  }
}
