import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login: string;
  pass: string;
  constructor(private authe: AuthService, private router: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  auth() {
    const user = {
      login: this.login,
      pass: this.pass
    };
    this.authe.authUser(user).subscribe(res => {
      if (!res.success) {
        this._flashMessagesService.show('Неверые данные', { cssClass: 'alert-danger', timeout: 4000 });
        alert('Неверное имя полтзователя или пароль')
      }
      else {
        console.log('no else');
        this._flashMessagesService.show('Good', { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/admin'])
        this.authe.storeUser(res.token);
      }
    });
  }
}
