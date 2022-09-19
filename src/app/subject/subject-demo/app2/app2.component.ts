import { Component, OnInit } from '@angular/core';
import { DataShringService } from '../service/data-shring.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  constructor(
    private dataShringSvc : DataShringService
  ) { }

  component2Data : any

  ngOnInit(): void {
    this.dataShringSvc.sharingData.subscribe(
      res=>{
        this.component2Data = res;
      }
    )
  }

  onSubmit(data : any){
    this.dataShringSvc.sharingData.next(data.value)
  }


}
