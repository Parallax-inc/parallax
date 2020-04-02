import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { WebServiceService } from './web-service.service';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BackenadService {
  constructor(private webService: WebServiceService, private http: HttpClient) {

  }

  getProject() {
    return this.webService.get('get/project');
  }
 
  postProject(data: FormData) {
    return this.webService.post('api/post/project', data)
  }

  deleteProject(id: string) {
    return this.webService.delete(`delete/${id}`);
  }

  feedback(text){
    return this.webService.post('api/feedback', text);
  }

}
