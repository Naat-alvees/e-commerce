import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string;
    hide = true;
    password: string;
    title = "auth-guard-demo";

    constructor(private _router: Router) {
        
    }

    ngOnInit() {
    }

    login(): void {
        
    }

}
