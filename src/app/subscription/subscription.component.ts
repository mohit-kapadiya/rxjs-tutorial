import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';  
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit , OnDestroy {

  constructor(
    private rxjsSvc : RxjsService
  ) { }

  subscription! : Subscription;
  data : any

 
  ngOnInit(): void {
    this.getExample();
    this.getMoreSubscriptionExample();
    this.getData();
  }

  getExample(){
    const observable = interval(1000);
    observable.subscribe(x=>console.log(x));
  }

  getMoreSubscriptionExample(){
    const observable1 = interval(400);
    const observable2 = interval(300);

    const subscription = observable1.subscribe(x=>console.log("first",x));
    const childSubscription = observable2.subscribe(x=>console.log("second",x));

    subscription.add(childSubscription);

    setTimeout(()=>{
      subscription.unsubscribe()
    } , 1000);
  }

  getData(){
   this.subscription = this.rxjsSvc.getSubscribeData().subscribe(
      res=>{
        this.data = res;
        console.log(this.data);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
