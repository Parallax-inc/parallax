import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  authUser(users){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/auth', 
    users, 
    {headers: headers}).pipe(map((response: any) => response.json()));
  }
  storeUser(token){
    localStorage.setItem('token', token);
  }
  isLoggedIn(){
    return tokenNotExpired();
  }
}
