import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(
    private rxjsService : RxjsService
   ) { }

   userData : any;

  ngOnInit(): void {
    this.getExample();
    this.getExample2();
    this.getData();
  }


  getExample(){
    const observable = new Observable(subscriber =>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(()=>{
        subscriber.next(4),
        subscriber.complete();
      }, 1000)
    })

    console.log('just befor subscriber');
    observable.subscribe({
      next(x){ console.log('value :' + x) },
      error(err){ console.log(err)},
      complete(){console.log('done')}
    })

    console.log('just after subscriber');
  }

  // observable as generalizations of function, observable return multiple value ,function not return 
  
  getExample2(){
    const foo = new Observable(
      subscriber=>{
        try{
          subscriber.next(40);
          subscriber.next(50);
          subscriber.complete();
          subscriber.next(60); // Is not delivered because it would violate the contract
          console.log("Hello")
        }
        catch(err){
          subscriber.error(err);
        }
       
      });
    
      foo.subscribe(x=>{
        console.log(x);
      })

      foo.subscribe(y=>{
        console.log(y)
      })
  }

  getData(){
    this.rxjsService.getUserSubsData().subscribe(
      data=>{
        this.userData = data;
      }
    )
  }



  

}
