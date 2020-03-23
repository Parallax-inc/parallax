import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'

import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable()
export class IsLoggedIn implements CanActivate{
    constructor(private router: Router){}

    canActivate(){
        const token = localStorage.getItem("token");
        // const helper = new JwtHelperService();
        // console.log(localStorage.getItem("token"))
        // const jwt = helper.isTokenExpired();
        // console.log(jwt)
        if(token){
            this.router.navigate(['admin']);
            // return true;
        }
        else{
            this.router.navigate(['admin']);
            return false;
        }
    }
}