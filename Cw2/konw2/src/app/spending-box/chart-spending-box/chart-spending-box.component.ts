import { Component, Input } from '@angular/core';
import { faArrowDown, faArrowUp, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { CurrencyFormatter } from 'src/services/currencyFormatter';
import { ValueWithPercentageChange, ValueWithPreviousValue } from './chart-spending-models';

@Component({
  selector: 'app-chart-spending-box',
  templateUrl: './chart-spending-box.component.html',
  styleUrls: ['./chart-spending-box.component.scss']
})
export class ChartSpendingBoxComponent {
  constructor(private currencyFormatter: CurrencyFormatter) {}
  
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  faChartLine = faChartLine;
  @Input() color = "#000";
  @Input() title = "";
  @Input() valueWithPreviousValue: ValueWithPreviousValue | undefined = undefined;
  @Input() valueWithPercentageChangen: ValueWithPercentageChange | undefined = undefined;

  get amount() {
    if(this.valueWithPreviousValue === undefined && this.valueWithPercentageChangen === undefined) {
      throw Error;
    }
    if(this.valueWithPreviousValue !== undefined && this.valueWithPercentageChangen !== undefined) {
      throw Error;
    }
    if(this.valueWithPercentageChangen !== undefined) {
      return this.currencyFormatter.format(this.valueWithPercentageChangen.value) 
    }
    return this.currencyFormatter.format(this.valueWithPreviousValue!.value) 
  }

  get percentage() {
    if(this.valueWithPreviousValue === undefined && this.valueWithPercentageChangen === undefined) {
      throw Error;
    }
    if(this.valueWithPreviousValue !== undefined && this.valueWithPercentageChangen !== undefined) {
      throw Error;
    }
    if(this.valueWithPreviousValue !== undefined) {
      return this.calculatePercentage(this.valueWithPreviousValue)
    }
    
    return this.valueWithPercentageChangen?.change
  }

  get percentageText() {
    return this.percentage?.toFixed(1) + "%"
  }

  calculatePercentage = (valueWithPreviousValue: ValueWithPreviousValue) => {
    return (((valueWithPreviousValue.value * 100) / valueWithPreviousValue.previousValue) - 100)
  }

  get hossa () {
    if(this.percentage === undefined) throw Error
    if(this.percentage >=0) return true
    return false
  }
  
  get percentageColor () {
    if(this.hossa) return "#49c788"
    return "#fc5252"
  }

  get arrow () {
    if(this.hossa) return faArrowUp
    return faArrowDown
  }
}
