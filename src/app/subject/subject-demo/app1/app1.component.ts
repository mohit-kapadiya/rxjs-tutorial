import { Component, OnInit } from '@angular/core';
import { DataShringService } from '../service/data-shring.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {

  constructor(
    private dataShringSvc : DataShringService
  ) { }

  component1Data : any;

  ngOnInit(): void {
    this.dataShringSvc.sharingData.subscribe(res=>{
      this.component1Data = res;
    })
  }


  onSubmit(data : any){
    this.dataShringSvc.sharingData.next(data.value);
  }
}
