import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service';
// import { AuthService } from '../shared/services/auth.service'

@Injectable()
export class IsLoggedIn implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['auth']);
        return false;
    }
}