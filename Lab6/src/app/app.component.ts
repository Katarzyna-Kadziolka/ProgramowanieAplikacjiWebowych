import { Component } from '@angular/core';
import { filter, find, interval, map, mergeMap, of, pipe, take, toArray } from 'rxjs';
import * as Rx from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab6';
  arr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  onlyEven = of(this.arr)
    .pipe(
      mergeMap(arr => arr),
      filter(a => a % 2 === 0),
    )
    .subscribe(
      x => console.log(x)
    )
  takeFirstFive = of(this.arr)
    .pipe(
      mergeMap(arr => arr),
      take(5)
    )
    .subscribe(
      x => console.log(x)
    )
  onlyEight = of(this.arr)
    .pipe(
      mergeMap(arr => arr),
      find(a => a === 8)
    )
    .subscribe(
      x => console.log(x)
    )
  mapTo = of(this.arr)
    .pipe(
      mergeMap(arr => arr),
      map(a => 'Liczba ' + a)
    )
    .subscribe(
      x => console.log(x)
    )

  emitDatesFrom = (startDate: Date) => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 10);
  
    return interval(1000).pipe(
      take(10),
      map(index => {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + index);
        return currentDate;
      })
    );
  }
  startDate = new Date(); // Bieżąca data
  getDate = this.emitDatesFrom(this.startDate).subscribe(date => console.log(date));
}
