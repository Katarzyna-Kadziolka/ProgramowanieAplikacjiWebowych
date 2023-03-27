import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBagShopping, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CurrencyFormatter } from 'src/services/currencyFormatter';


@Component({
  selector: 'app-spending-box',
  templateUrl: './spending-box.component.html',
  styleUrls: ['./spending-box.component.scss']
})
export class SpendingBoxComponent {
  constructor(private currencyFormatter: CurrencyFormatter) {}

  faEllipsis = faEllipsis;
  @Input() icon: IconProp = faEllipsis
  @Input() cost = 0
  @Input() title = ""
  @Input() color ="#000"

  get currency() {
    return this.currencyFormatter.format(this.cost)
  }
}
