import { Component, OnInit } from '@angular/core';
import { count, max , min , reduce} from 'rxjs/operators';
import { of, range } from 'rxjs';

@Component({
  selector: 'app-mathemetical',
  templateUrl: './mathemetical.component.html',
  styleUrls: ['./mathemetical.component.scss']
})
export class MathemeticalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.conutopExample();
    this.maxopExample();
    this.minopExample();
    this.reduceExample();
  }

  // count
  conutopExample(){
    console.log("count operator");
    const numbers = range(1,7);
    const result = numbers.pipe(count(i=>i%2 === 1));
    result.subscribe(x=>console.log('count' , x));
  }

  // max
  maxopExample(){
    console.log("max operator")
    of(1,3,2,4,5).pipe(
      max(),
    ).subscribe(value=>console.log('max',value))
  }

  // min
  minopExample(){
    console.log("min operator")
    of(1,2,3,4,5).pipe(
      min(),
    ).subscribe(value=>console.log('min', value))
  }

  // reduce
  reduceExample(){
    console.log("reduce operator")
    of(1,2,3,4,5).pipe(
      reduce((x,y)=> x+y)
    ).subscribe(value=>console.log('reduce', value))
  }

  back(){
    window.history.back();
  }
}
