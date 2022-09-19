import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, delay, forkJoin, interval, mapTo, merge, of, race, startWith, take, timer, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.combineLatestopExample();
    // this.forkJoinopExample();
    // this.concatopExample();
    // this.mergeopExample();
    // this.raceopExample();
    // this.startWithExample();
    // this.zipExample();
    this.withLatestFromopExample();
  }

  // combineLatest operator 
  combineLatestopExample(){
    console.log('combine latest operator');
    const x = interval(1000).pipe(take(5));
    const y = interval(2000).pipe(take(5));

    combineLatest(x,y).subscribe({
      next : value => console.log(value),
      complete :()=> console.log("complete")
    }
    )

    console.log("****************************");
  }

  // forkJoin
  forkJoinopExample(){
    console.log('fork join operator');
    const x = interval(1000).pipe(take(5));
    const y = interval(2000).pipe(take(5));

    forkJoin(x,y).subscribe({
      next : value => console.log(value),
      complete :()=> console.log("complete")
    }
    )
    console.log("****************************");
  }

  // concat
  concatopExample(){
    console.log('concat operator');
    const x = interval(1000).pipe(take(5));
    const y = interval(2000).pipe(take(5));
    concat(of(1,2,3) , of(4,5,6) , of(7,8,9)).subscribe(console.log)
  }

  // merge

  mergeopExample(){
    console.log('merge operator');
    const first = interval(1000);
    const second = interval(2000);
    const third = interval(3000);
    const forth = interval(1000);
    
    const example = merge(
      first.pipe(mapTo('FIRST')),
      second.pipe(mapTo('SECOND')),
      third.pipe(mapTo('THIRD')),
      forth.pipe(mapTo('FORTH')),
    )

    example.subscribe(val=>console.log(val))
  }

  // race

  raceopExample(){
    console.log('race operator');
    const example = race(
      interval(1000).pipe(mapTo('1st won')),
      interval(1500),
      interval(2000)
    )
    example.subscribe(console.log)
  }

  // startWith

  startWithExample(){
    console.log('startwith  operator');
    const source = of(1,2,3);
    source.pipe(startWith(0)).subscribe(console.log)
  }

  // zip 

  zipExample(){
    console.log('zip  operator');
    const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    const soureceThree = of('Goodbye');
    const sourceFour = of('World');

    const example = zip(
      sourceOne,
      sourceTwo.pipe(delay(1000)),
      soureceThree.pipe(delay(2000)),
      sourceFour.pipe(delay(3000))
    ).subscribe(
      val=>console.log(val)
    )
  }

  // withLatestFrom

  withLatestFromopExample(){
    const a = timer(0,10).pipe(
      take(5)
    )

    const b = timer(0,4).pipe(
      take(7)
    )

    const result = a.pipe(
      withLatestFrom(b)
    ).subscribe(console.log)
  }

  back(){
    window.history.back();
  }
  
  

}
