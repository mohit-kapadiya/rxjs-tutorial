import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(
    private http : HttpClient
  ) { }

  // observable example

  myData = [
    {id :'1' , name :'mohit'},
    {id :'2' , name :'uday'},
  ]

  getUserSubsData(){
    let data = new Observable(
      observer=>{
        setTimeout(()=>{
          observer.next(this.myData);
        },2000)
      }
    )
    return data;
  }

  // subscription example

  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums';

  getSubscribeData(){
    return this.http.get<any>(this.albumsUrl)
  }




}
