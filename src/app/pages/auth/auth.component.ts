import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { from } from 'rxjs';
// import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login: string;
  pass: string;

  constructor(private http: HttpClient,
              private flashMessages: FlashMessagesService,
              private router: Router) { }

  ngOnInit() { }

  userAuth() {
    const user = {
      login: this.login,
      pass: this.pass
    }
    this.authUser(user).subscribe(data => {
      if (data.succes === false) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        })
      } else {
        this.flashMessages.show('Ви успішно авторизувались', {
          cssClass: 'alert-success',
          timeout: 4000
        })
        this.router.navigate(['admin']);
        localStorage.setItem('token', data.token);
      }
    })
  }
  authUser(userauth) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/auth', userauth,
      { headers }).pipe(map((response: any) => response = { ...response }));
  }
  // isLoggedIn(){
  //   const helper = new JwtHelperService();
  //   return helper.isTokenExpired();
  // }
}
