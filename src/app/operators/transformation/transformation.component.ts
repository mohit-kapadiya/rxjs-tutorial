import { Component, OnInit } from '@angular/core';
import { concat, concatMap, from, interval, map, merge, mergeAll, mergeMap, of, pluck, take, timer } from 'rxjs';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.mapopExample();
    // this.pluckopExample();
    // this.mergeopExample();
    // this.mergeMapopExample(); 
    // this.mergeAllopExample();
    // this.concatopExample();
    this.concatMapopExample();
  }

  // map 
  mapopExample(){
    console.log("map operator");
    timer(2000,5000).pipe(
      map(i=>i*2),
      take(4)
    ).subscribe(console.log)
  }

  // pluck

  pluckopExample(){
    console.log("pluck operator");
    const source = from([
      {
        name :'joe' , age : 30
      },{
        name :'sarah' , age :35
      }
    ])
    source.pipe(pluck('name')).subscribe(console.log)
  } 

  // merge

  mergeopExample(){
    console.log('merge operator');
    
    const first = interval(500).pipe(take(3));
    const second = interval(1000).pipe(take(4));
    merge(first , second).subscribe(
      console.log
    )
  }


  // mergeAll

  mergeAllopExample(){
   console.log('mergeAll operator');
   const observable = of(1,2,3);

   console.log("before value map");
   observable.subscribe(
    console.log
   )
   var getValue =(v:any)=>{
    return of('new value is :'+(v+100))
   }

   var map1=observable.pipe(
     map(v=>getValue(v)),
     mergeAll()
   )

   console.log("after value map")
   map1.subscribe(
     
    /*  value=>value.subscribe(
       data=>{
         console.log(data)
       }
     ) */
     console.log
   )
  }

  // merge map
  mergeMapopExample(){
  console.log('mergeMap operator');
  const source = interval(1000).pipe(
    take(2),
    mergeMap(int=>interval(500).pipe(take(3)))
  ).subscribe(console.log)
  }

  // concat

  concatopExample(){
    console.log('concat operator');

    const intA = interval(1000).pipe(take(3));
    const intB = interval(2000).pipe(take(3))

    concat(intA , intB).subscribe(console.log)
  }

  // concatMap

  concatMapopExample(){
    let srcObservable = of(1,2,3,4);
    let innerObervable = of('A','B','C','D');

    srcObservable.pipe(
      concatMap( val => {
        console.log('Source value '+val)
        console.log('starting new observable')
        return innerObervable
      })
    ).subscribe(
      data=>{
        console.log('recd', data)
      }
    )
  }

}
