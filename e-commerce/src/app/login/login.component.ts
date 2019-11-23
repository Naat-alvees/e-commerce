import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // email: string;
    // hide = true;
    // password: string;
    // title = "auth-guard-demo";

    // constructor(private _router: Router) {
    //     if (this._auth.loggedIn) {
    //         this._router.navigate(['home']);
    //     }
    // }

    ngOnInit() {
    }

    // login(): void {
    //     if (this.email != '' && this.password != '') {
    //         if (this._auth.login(this.email, this.password)) {
    //             this._router.navigate(["home"]);
    //         } else {
    //             alert("Wrong username or password");
    //         }
    //     }
    // }

}
