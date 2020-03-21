import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/Observable/of'

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollPoint: any;
  constructor() { }

  scroll(point): Observable<any> {
    return point;
    // console.log(point);

  }
}
