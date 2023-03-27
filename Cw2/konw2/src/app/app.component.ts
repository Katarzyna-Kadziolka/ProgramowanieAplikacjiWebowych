import { Component } from '@angular/core';
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'konw2';
  faBagShopping = faBagShopping;
  faCartShopping = faCartShopping;
}
