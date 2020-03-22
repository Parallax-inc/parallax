import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

// import { of } from 'rxjs/Observable/of'

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollPoint = new BehaviorSubject('')
  constructor() { }

  scroll(elem: string) {
    this.scrollPoint.next(elem);  
  }

 

}
