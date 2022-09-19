import { Component, OnInit } from '@angular/core';
import { catchError, empty, from, generate, interval, map, Observable, of, range, take, timer } from 'rxjs';


@Component({
  selector: 'app-operator-example',
  templateUrl: './operator-example.component.html',
  styleUrls: ['./operator-example.component.scss']
})
export class OperatorExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fromOpExample();
    this.intervalOpExaple();
    this.ofopExample();
    this.timeropExample();
    this.createopExample();
    this.emptyopExample();
    this.rangeopExample();
    this.generateopExample();
  }
  

  /* 
  from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>
  */
  fromOpExample(){
    console.log('from operator')
    const array = [10,20,30];
    const result = from(array);
    result.subscribe(value=>console.log(value));
    console.log('***********************************');
  }

  /* 
    interval(period: number = 0, scheduler: SchedulerLike = asyncScheduler): Observable<number>
 */
  intervalOpExaple(){
    console.log('interval operator')
    const numbers = interval(3000);
    const takeNumber = numbers.pipe(take(4))
    takeNumber.subscribe(value=>console.log(value));
    console.log('***********************************');
  }

  /*
  of<T>(...args: (SchedulerLike | T)[]): Observable<T>
  */

  ofopExample(){
    console.log('of operator')
    const arr = [1,2,3];
    const arr$ = of(arr);
    arr$.subscribe(values=>{
      console.log(values);
    })
    console.log('***********************************');
  }

/*   timer(initialDelay: number | Date, period: number, scheduler: Scheduler): Observable */

/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
  timeropExample(){
    console.log('timer operator');
    const source = timer(1000 , 2000);
    source.subscribe(data=>console.log(data))
    console.log('***********************************');
  }

  /* signature: create(subscribe: function) */
  createopExample(){
    console.log('create operator');

    const hello = Observable.create(
      function(observer: any){
        observer.next('Hello');
        observer.next('world');
        observer.complete();
      });

    hello.subscribe((val: any) => console.log(val));
    console.log('***********************************');
  }

  /* empty(scheduler: Scheduler): Observable */
  emptyopExample(){
    console.log('empty operator');
    empty().subscribe({
      next :()=>console.log('next'),
      complete :()=> console.log('complete')
    })
    console.log('***********************************');
  }

  /*
   range(start: number, count: number, scheduler: Scheduler): Observable
  */

  rangeopExample(){
    console.log('range operator');
    const source = range(1,10);
    source.subscribe(res=>console.log(res));
    console.log('***********************************');
  }

  generateopExample(){
    console.log('generate operator');
    generate(2 , x=> x<=5 , x=> x+3).subscribe(console.log);   
    console.log('***********************************');
  }
}