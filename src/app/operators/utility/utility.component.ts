import { Component, OnInit } from '@angular/core';
import { delay, delayWhen, finalize, from, interval, map, of, repeat, take, tap, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.tapopExample();
    // this.finalizeopExample();
    // this.repeatopExample();
    // this.delayWhenopExample();
    this.timeoutopExample();
    this.toPromise();
  }

  // tap 
  tapopExample(){
    const source = of(1,2,3,4,5);
    const example = source.pipe(
      tap(val=>console.log(`Before MAP : ${val}`)),
      map(val=>val+10),
      tap(val=>console.log(`After MAP : ${val}`))
    )
    example.subscribe(val=>console.log(val))
  }

  // finalize

  finalizeopExample(){
    const source = interval(1000);
    const example = source.pipe(
      take(5),
      finalize(()=>{console.log('sequence complete')})
    ).subscribe(value => console.log("finalize call" , value))
  }

  // repeat & delay

  repeatopExample(){
    const delayThing = of('delay value').pipe(delay(2000));

    delayThing.pipe(
      repeat(4)
    ).subscribe(console.log)
  }

  delayWhenopExample(){
    console.log('delayWhen example')
    const message = interval(1000).pipe(
      take(4)
    );
    // emit value after 5 second
    const delayForFiveSeconds =()=>timer(5000);
    //after 5 seconds, start emitting delayed interval values
    const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
    delayWhenExample.subscribe(console.log)
  }

  // timeout 
  timeoutopExample(){
    
  }

  // topromise

  toPromise(){
    const source = from([1,2,3]);
    source.subscribe(x=>console.log('observer',x));
    source.toPromise().then(x=>console.log('toPromise' , x));
  }

  back(){
    window.history.back();
  }
  

}
