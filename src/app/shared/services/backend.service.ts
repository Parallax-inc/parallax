import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class BgService {
  constructor(private webService: WebServiceService, private http: HttpClient) {

  }

  getPortrait() {
    return this.webService.get('api/portrait');
  }
 
  createPortrait(data: string) {
    return this.webService.post('api/portrait', data)
  }
}
