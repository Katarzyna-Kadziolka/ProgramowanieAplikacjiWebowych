import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CurrencyFormatter {
    constructor(){}
    format (cost: number) {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        });
        return formatter.format(cost);
      }
}