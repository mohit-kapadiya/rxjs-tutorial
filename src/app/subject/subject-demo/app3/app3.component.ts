import { Component, OnInit } from '@angular/core';
import { DataShringService } from '../service/data-shring.service';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.scss']
})
export class App3Component implements OnInit {

  constructor(
    private datashringSvc : DataShringService
  ) { }

  component3Data: any

  ngOnInit(): void {
    this.datashringSvc.sharingData.subscribe(
      res=>{
        this.component3Data = res;
      }
    )
  }

  onSubmit(data : any){
    this.datashringSvc.sharingData.next(data.value)
  }



}
