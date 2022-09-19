import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getExampleOfSubject();
    this.getBehaviourSubject();
    this.getReplySubject();
  }

  // subject example
  getExampleOfSubject(){
    const subject = new Subject<String>();

    subject.subscribe({
      next: (v)=>console.log(`observer 1 : ${v}`)
    })

    subject.subscribe({
      next: (v)=>console.log(`observer 2 : ${v}`)
    })


    subject.next("Hello");
    subject.next("Hiee");

    subject.subscribe({
      next :(v)=>console.log(`observer 3 : ${v}`)
    })

    subject.next('Hii');

    subject.subscribe({
      next :(v)=>console.log(`observer 4 : ${v}`)
    })
    console.log("******************************************************");
  }


  //behaviour subject example

  getBehaviourSubject(){
    const behaviourSub = new BehaviorSubject<string>('Initial Value');

    behaviourSub.subscribe({
      next :(v)=>console.log(`first value : ${v}`)
    })

    behaviourSub.next('Hii')
    behaviourSub.next('Hello')
    behaviourSub.next('Take Last Value')

    /*  Moreover, Behavior Subjects keep track of the last values, and whenever there is a new subscriber, it will get the previous value, and log it.

     */

    behaviourSub.subscribe({
      next :(v)=>console.log(`add Last Value : ${v}`)
    })

    behaviourSub.next('Tc')
    console.log("******************************************************");
  }

  // reply subject demo

  getReplySubject(){
    /*
      It works similar to Behavior Subject expect that it can keep track of multiple previous values and reply to them for the new subscribers. 
      Furthermore, you can also specify the window for tracking the older values. 
    */
    const rplySubject = new ReplaySubject(1);
    rplySubject.subscribe({
      next: (v)=>console.log(`observer 1 : ${v}`)
    })
    rplySubject.next(1);
    rplySubject.next(2);
    rplySubject.next(3);

    rplySubject.subscribe({
      next: (v)=>console.log(`observer 2 : ${v}`)
    })
    rplySubject.next(1);


  }



}
