import { Component, OnInit } from '@angular/core';
import { filter, find, first, from, interval, last, of, take, takeLast, takeUntil, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filteropExample();
    this.findopExample();
    this.firstopExample();
    this.lastopExample();
    this.takeopExample();
    this.takeLastopExample();
    this.takeUntilopExample();
    this.takeWhileopExample();
  }

  // filter
  filteropExample(){
    console.log("filter operator");
    const source = from([1,2,3,4,5])
    const example = source.pipe(filter(x=> x%2 === 0)).subscribe(
      console.log
    )
  }

  // find
  findopExample(){
    console.log("find operator");
    const source = from([1,2,3,4,5])
    const example = source.pipe(find(x=> x%2 === 0)).subscribe(
      console.log
    )
  }

  // first
  firstopExample(){
    console.log("first operator");
    const source = from([1,2,3,4,5])
    const example = source.pipe(first()).subscribe(console.log);
  }

  // last
  lastopExample(){
    console.log("last operator");
    const source = from([1,2,3,4,5]);
    const example = source.pipe(last()).subscribe(console.log);
  }

  // take
  takeopExample(){
    console.log("take operator");
    const source = from([1,2,3,4,5]);
    const example = source.pipe(take(2)).subscribe(console.log);
  }

  // takeLast

  takeLastopExample(){
    console.log("takeLast operator");
    const source = from([1,2,3,4,5]);
    const example = source.pipe(takeLast(2)).subscribe(console.log);
  }

  // takeUntil

  takeUntilopExample(){
    console.log("takeUntil operator")
    const source = interval(1000);

    //when timer emits after 5s, complete source
    const time = timer(6000);
    const example = source.pipe(takeUntil(time)).subscribe(console.log)
  }

  // takeWhile

  takeWhileopExample(){
    console.log("takeWhile operator")
    const source = of(1,2,3,4,5);
    const example = source.pipe(takeWhile(val=>val<4)).subscribe(console.log)
  }

  back(){
    window.history.back();
  }
}
