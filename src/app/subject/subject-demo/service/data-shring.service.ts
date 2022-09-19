import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShringService {

  constructor() { }

  sharingData = new Subject();
}
