import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty, every, from, iif, of, sequenceEqual, switchMap } from 'rxjs';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.scss']
})
export class ConditionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.defaultIfEmptyopExample();
    this.everyopExample();
    this.iffopExample();
    this.sequenceequal();
  }

/*   defaultIfEmpty(defaultValue: any): Observable */

  defaultIfEmptyopExample(){
    console.log(' defaultIfEmpty operator');
    const example = of().pipe(defaultIfEmpty('this is empty'));
    example.subscribe(value=>console.log(value));
    console.log('***********************************');
  }

  /*
  every(predicate: function, thisArg: any): Observable
  */
  everyopExample(){
    console.log('every operator');
    const source = of(1,2,3,4,5);
    const example = source.pipe(
      every(
        val => val %2 === 0
      )
    )
    example.subscribe(value=>console.log(value));
    console.log('***********************************');
  }

/*   iif(condition: Function):Observable */
  iffopExample(){
    console.log('iif operator');
      iif(
        () => (Math.random() + 1) % 2 === 0,
        of("Even Case"),
        of("Odd Case")
    ).subscribe(value=>console.log(value));
    console.log('***********************************');
  }

/*   Rx.Observable.prototype.sequenceEqual(second, [comparer]) */
  
  sequenceequal(){
    console.log('sequenceequal operator');
      const expectedseq = from([4,5,6]);

      of([1,2,3] ,[4,5,6],[7,8,9]).pipe(
        switchMap(arr=>from(arr).pipe(sequenceEqual(expectedseq))))
        .subscribe(console.log);
        console.log('***********************************');
  }

  back(){
    window.history.back();
  }
}
