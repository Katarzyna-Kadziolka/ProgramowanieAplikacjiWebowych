import { Component } from '@angular/core';
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ValueWithPercentageChange, ValueWithPreviousValue } from './spending-box/chart-spending-box/chart-spending-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'konw2';
  faBagShopping = faBagShopping;
  faCartShopping = faCartShopping;
  totalEarnings: ValueWithPreviousValue = {
    previousValue: 45243.62,
    value: 39000
  }
  producsSold: ValueWithPercentageChange = {
    value: 2453,
    change: 13.8
  }
}
